# Salir a producción

La API y la base de datos van en **Railway** y la web en **Vercel**. La web
reenvía `/api` a la API, así que para el navegador todo vive en el mismo
dominio: la cookie de sesión es «propia» y ningún navegador la bloquea como
cookie de terceros. No hace falta comprar dominio; si un día lo compras, solo
cambian las direcciones de los pasos 2 y 3.

Necesitas: el repo en GitHub, una cuenta en [Railway](https://railway.com) y
otra en [Vercel](https://vercel.com) (ambas entran con GitHub), y acceso a
Google Cloud Console y a tu cuenta de Gmail.

## 0. Antes de empezar

- **Contraseña de aplicación de Gmail.** Los correos de confirmación salen de
  tu Gmail. En [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
  crea una (pide tener la verificación en dos pasos). Es la que va en
  `SMTP_PASS`; nunca pongas tu contraseña normal. Gmail admite unos 500 envíos
  al día y es probable que los correos lleguen a spam: la pantalla de registro
  ya avisa de ello.
- **Cuenta admin.** Usa una cuenta de Google dedicada solo a administrar, no la
  personal, y actívale la verificación en dos pasos: quien entre con ella
  controla cursos y usuarios. Su correo va en `ADMIN_EMAILS` y no hace falta
  escribirlo en ningún archivo del repo.
- **Secreto de las sesiones.** Genera uno nuevo para producción, distinto del de
  tu `.env`:
  `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`

## 1. Base de datos y API en Railway

1. **New Project → Deploy from GitHub repo** y elige este repositorio.
2. En el proyecto, **New → Database → PostgreSQL**.
3. Abre el servicio del repo y en **Settings**:
   - **Root Directory:** `bc-course`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run db:deploy && npm run start:prod`
     (aplica las migraciones pendientes antes de arrancar; nunca corre el seed)
   - **Networking → Generate Domain.** Apunta la dirección, por ejemplo
     `https://bc-course-production.up.railway.app`.
4. En **Variables** del servicio:

   | Variable | Valor |
   | -------- | ----- |
   | `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` (referencia a la base del paso 2) |
   | `NODE_ENV` | `production` |
   | `NPM_CONFIG_INCLUDE` | `dev` (con `NODE_ENV=production` npm no instalaría las herramientas del build) |
   | `JWT_SECRET` | el secreto nuevo del paso 0 |
   | `JWT_EXPIRES_IN` | `1d` |
   | `COOKIE_SAMESITE` | `lax` |
   | `TRUST_PROXY` | `2` (el proxy de Railway y el reenvío de Vercel) |
   | `CORS_ORIGIN` | la dirección de Vercel (paso 2), sin `/` final |
   | `APP_URL` | la misma dirección de Vercel |
   | `GOOGLE_CLIENT_ID` | el ID de cliente OAuth |
   | `ADMIN_EMAILS` | el correo de Google de la cuenta admin |
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | el Gmail desde el que salen los correos |
   | `SMTP_PASS` | la contraseña de aplicación del paso 0 |
   | `MAIL_FROM` | `Поехали <ese mismo Gmail>` |

   `PORT` no hace falta: Railway lo pone solo.

## 2. Web en Vercel

1. **Add New → Project** e importa el mismo repositorio.
2. **Root Directory:** `fr-course`. El resto lo detecta solo (Next.js).
3. **Environment Variables:**

   | Variable | Valor |
   | -------- | ----- |
   | `NEXT_PUBLIC_API_URL` | `/api` |
   | `API_PROXY_TARGET` | la dirección de Railway, sin `/api` ni `/` final |
   | `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | el mismo ID de cliente OAuth |

4. **Deploy.** Apunta la dirección, por ejemplo `https://poyejali.vercel.app`,
   y vuelve a Railway a poner `CORS_ORIGIN` y `APP_URL` con ella (Railway
   redespliega solo).

Las variables `NEXT_PUBLIC_*` se fijan al compilar: si cambias alguna, hay que
volver a desplegar en Vercel.

## 3. Google

En [Google Cloud Console → Credenciales](https://console.cloud.google.com/apis/credentials),
abre el ID de cliente OAuth y añade la dirección de Vercel en **Orígenes
autorizados de JavaScript**. Sin esto el botón de Google no aparece. Si la
pantalla de consentimiento está «En prueba», pásala a **En producción** para
que pueda entrar cualquier persona y no solo los usuarios de prueba.

## 4. Cargar los cursos

La base nace vacía. Desde tu máquina, con la dirección **pública** de la base
(Railway → Postgres → Connect → *Public Network*):

```bash
cd bc-course
DATABASE_URL="postgresql://…railway…" npm run db:courses
```

Crea los seis cursos, ya publicados. Se puede repetir sin miedo: no toca
usuarios, inscripciones ni notas, y solo añade lo que falte. **No uses
`db:seed`**: borra la base entera (y se niega a correr con `NODE_ENV=production`,
pero desde tu máquina no lo tendrías puesto).

## 5. Comprobar

1. Abre la web y entra con **el botón de Google** con la cuenta de `ADMIN_EMAILS`:
   debes ver «Cursos» y «Usuarios» en el menú (eres admin).
2. En otra ventana privada, regístrate con correo y contraseña con otra
   dirección tuya: el correo de confirmación debe llegar (mira en spam).
3. Con esa cuenta, súbete a un curso, responde un test y abre Vocabulario.
4. Recarga la página: la sesión debe seguir abierta.

## 6. Mantenimiento

- **Copias de seguridad.** En Railway → Postgres → **Backups**, activa las
  automáticas. Sin ellas, un error borraría los datos para siempre.
- **Actualizar.** Cada `git push` a `main` redespliega las dos partes. Las
  migraciones nuevas se aplican solas al arrancar la API.
- **Errores.** Los registros de la API están en Railway → servicio →
  **Deployments → View logs**; los de la web, en Vercel → **Logs**.
- **Límite de peticiones.** El contador vive en memoria: con una sola
  instancia de la API (lo normal en Railway) funciona bien.

## Si algo falla

| Síntoma | Causa y arreglo |
| ------- | --------------- |
| El build de Railway falla con `nest: not found` | Falta `NPM_CONFIG_INCLUDE=dev`: con `NODE_ENV=production` npm no instala las herramientas del build. |
| La API no arranca y el log habla de `JWT_SECRET` | El secreto tiene menos de 32 caracteres o es el de ejemplo. Genera uno nuevo (paso 0). |
| «Origen no permitido» (403) al entrar o registrarse | `CORS_ORIGIN` no es exactamente la dirección de Vercel: revisa `https://`, sin `/` final. |
| Entras, pero al recargar se pierde la sesión | En Vercel `NEXT_PUBLIC_API_URL` no es `/api`, o lo cambiaste sin volver a desplegar. |
| La web dice que no puede conectar con la API | `API_PROXY_TARGET` mal escrita, con `/api` al final, o la API de Railway caída (mira sus logs). |
| No aparece el botón de Google | Falta la dirección de Vercel en «Orígenes autorizados» de Google Cloud, o `NEXT_PUBLIC_GOOGLE_CLIENT_ID` vacío. |
| Google dice «acceso bloqueado» o «app no verificada» | La pantalla de consentimiento sigue «En prueba»: pásala a producción o añade esa cuenta como usuario de prueba. |
| No llegan los correos de confirmación | `SMTP_PASS` no es una contraseña de aplicación, o `MAIL_FROM` no usa el mismo Gmail que `SMTP_USER`. El error exacto sale en los logs de la API. |
| El enlace del correo lleva a `localhost` | `APP_URL` en Railway no es la dirección de Vercel. |
| Entras con Google y no eres admin | `ADMIN_EMAILS` no tiene ese correo, o entraste con correo y contraseña en vez del botón de Google. |
| «Error de base de datos» o tablas que no existen | Las migraciones no corrieron: revisa que el Start Command empiece por `npm run db:deploy`. |
| No hay cursos | Falta el paso 4 (`npm run db:courses`). |
