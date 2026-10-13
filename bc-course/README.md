# bc-course — API del curso de ruso

Backend en NestJS 11 + Prisma 7 + PostgreSQL.

## Puesta en marcha

1. Copia `.env.example` a `.env` y pon tu contraseña de PostgreSQL en `DATABASE_URL`.
2. Crea la base de datos y las tablas: `npm run db:migrate -- --name init`
3. Carga datos de prueba (opcional): `npm run db:seed`
4. Arranca la API: `npm run start:dev` → `http://localhost:4000/api`

Después de una migración o de `prisma generate`, detén y vuelve a lanzar
`npm run start:dev`: el modo watch no siempre recompila el cliente de Prisma y
la API responde «Error de base de datos» hasta reiniciarla.

El seed crea estas cuentas. La contraseña de cada una es su nombre y apellido
juntos, en minúsculas y sin espacios ni tildes:

| Correo | Rol | Contraseña |
| ------ | --- | ---------- |
| `admin@ruso.dev` | Admin | `adminplataforma` |
| `ana@ruso.dev` | Estudiante (terminó el A1) | `anatorres` |
| `luis@ruso.dev` | Estudiante (va por la estación 3) | `luismendez` |
| `sofia@ruso.dev` | Estudiante (recién inscrita) | `sofiarojas` |

El seed crea además los seis cursos de la plataforma, de A1 a C2. El catálogo
está en `prisma/courses.ts` y el contenido en `prisma/content/`, dos archivos
por nivel: `a1.ts` (el texto de las doce lecciones) y `a1.tests.ts` (sus
preguntas). Cada lección tiene un test de 10 preguntas de opción múltiple
(5 % de la nota cada uno) y el curso cierra con un examen de 15 (40 %). En los
archivos de tests la opción correcta se escribe primero; `q()` la reparte entre
las demás de forma fija. El seed borra todo lo que haya en la base.

Para añadir solo los cursos del catálogo que falten, sin tocar usuarios,
inscripciones ni notas: `npm run db:courses`.

## Seguridad

- **Límite de peticiones** (`src/common/throttle.ts`): 150 por minuto por IP en
  toda la API; en `/auth` es más estricto (entrar 30/min, registrarse 20 cada
  10 min, reenviar correo 10 cada 10 min) y además 10 intentos cada 15 min por
  correo desde una misma IP. Al pasarse responde `429`. El contador vive
  en memoria: con varias instancias habría que llevarlo a Redis.
- **Detrás de un proxy** pon `TRUST_PROXY` (número de proxies) o todas las
  peticiones parecerán venir de la misma IP.
- **Sesión en cookie `httpOnly`** (`src/auth/session.service.ts`): el token no
  va en el cuerpo de las respuestas ni es legible desde JavaScript, así que un
  XSS no puede robarlo. `POST /auth/logout` la borra. Las peticiones que
  modifican datos se rechazan si su `Origin` no está en `CORS_ORIGIN` (CSRF).
  Con frontend y API en dominios distintos hace falta `COOKIE_SAMESITE=none`.
- **Cambiar la contraseña cierra las demás sesiones**: cada token lleva la
  `tokenVersion` de la cuenta y deja de valer cuando esta sube.
- **Cabeceras** con `helmet`; el frontend añade su propia política de contenido
  (CSP) en `next.config.ts`.
- **`JWT_SECRET`**: la API no arranca si tiene menos de 32 caracteres o es el
  de ejemplo.
- **Seed**: borra la base y crea cuentas con contraseñas adivinables; se niega
  a correr con `NODE_ENV=production`. No lo uses fuera de desarrollo.
- En producción sirve la API y el frontend por HTTPS y pon en `CORS_ORIGIN`
  solo el dominio real del frontend.

## Confirmación del correo

Quien se registra con correo y contraseña recibe un enlace (vale 24 horas) y no
puede entrar hasta abrirlo. Las cuentas de Google y las que crea un admin nacen
confirmadas, igual que las del seed.

Para enviar correos de verdad rellena `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASS` y `MAIL_FROM` en `.env` (con Gmail: `smtp.gmail.com`, puerto `587`,
tu dirección y una [contraseña de aplicación](https://myaccount.google.com/apppasswords)).
Si `SMTP_HOST` está vacío no se envía nada: el enlace sale en la consola de la
API. `APP_URL` es la dirección del frontend con la que se arma el enlace.

## Entrar con Google

1. En [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   crea un «ID de cliente de OAuth» de tipo «Aplicación web».
2. En «Orígenes autorizados de JavaScript» añade `http://localhost:3000` y
   `http://localhost:3001` (y el dominio real cuando lo haya). No hacen falta
   URI de redireccionamiento.
3. Pon ese ID en `GOOGLE_CLIENT_ID` (`.env` de la API) y en
   `NEXT_PUBLIC_GOOGLE_CLIENT_ID` (`.env.local` del frontend) y reinicia ambos.

La primera vez que alguien entra con Google se crea su cuenta de estudiante,
sin contraseña (puede definir una en su perfil). Si el correo ya tenía cuenta,
se vincula con ella y conserva su rol.

## Roles y permisos

La plataforma es autónoma: no hay profes. Los tests son de opción múltiple y la
API los corrige al momento. Los permisos por rol están en
`src/common/rbac/permissions.ts` y cada ruta declara lo que exige con
`@RequirePermissions(...)`.

| Rol     | Puede                                                                 |
| ------- | --------------------------------------------------------------------- |
| STUDENT | Inscribirse, leer las lecciones, responder tests y exámenes, ver sus notas |
| ADMIN   | Crear y editar cursos, lecciones y tests; crear usuarios; ver las notas de todos y las estadísticas |

## Endpoints (prefijo `/api`)

| Método | Ruta | Acceso |
| ------ | ---- | ------ |
| POST | `/auth/register`, `/auth/login`, `/auth/logout` | Público (entrar deja la sesión en una cookie) |
| POST | `/auth/verify-email`, `/auth/resend-verification` | Público (confirmar el correo y pedir otro enlace) |
| POST | `/auth/google` | Público (entra o crea la cuenta con un ID token de Google) |
| GET, PATCH | `/users/me` | Autenticado |
| DELETE | `/users/me` | Estudiante (pide `currentPassword` si la cuenta tiene contraseña) |
| GET | `/users`, `/users/:id`, `/users/stats` | Admin |
| POST | `/users` | Admin (devuelve una contraseña inicial aleatoria, una sola vez) |
| PATCH | `/users/:id/role`, `/users/:id/status` | Admin |
| DELETE | `/users/:id` | Admin (solo estudiantes) |
| GET | `/courses`, `/courses/:id` | Público (solo publicados) |
| GET | `/courses/manage` | Admin |
| POST | `/courses` | Admin |
| PATCH, DELETE | `/courses/:id` | Admin |
| POST | `/courses/:id/publish`, `/courses/:id/archive` | Admin |
| GET | `/courses/:id/lessons/:lessonId` | Inscritos, admin |
| POST | `/courses/:id/lessons` | Admin |
| PUT | `/courses/:id/lessons/order` | Admin |
| PATCH, DELETE | `/courses/:id/lessons/:lessonId` | Admin |
| POST | `/courses/:id/enroll` | Estudiante |
| POST | `/courses/:id/lessons/:lessonId/complete` | Estudiante inscrito (solo estaciones sin test) |
| GET | `/enrollments/me` | Estudiante |
| POST | `/enrollments/:id/drop` | Estudiante (propia) |
| GET | `/courses/:id/enrollments` | Admin |
| GET | `/courses/:id/assessments` | Inscritos (con sus intentos y su mejor nota), admin |
| POST | `/courses/:id/assessments` | Admin |
| GET | `/assessments/:id` | Inscritos (preguntas sin la respuesta), admin (con respuesta y explicación) |
| PATCH, DELETE | `/assessments/:id` | Admin |
| POST | `/assessments/:id/attempts` | Estudiante inscrito (body: `answers`, un índice de opción por pregunta; devuelve la corrección) |
| GET | `/courses/:id/gradebook` | Admin |
| GET | `/courses/:id/stats` | Admin |
| GET | `/grades/me` | Estudiante |

## Reglas de negocio

- Cada usuario tiene nombre (`firstName`) y apellido (`lastName`); `name` es el nombre completo que arma el servidor. El registro pide ambos y el estudiante elige su contraseña.
- El registro público solo crea estudiantes. Un admin crea las demás cuentas con `POST /users`; la API genera una contraseña inicial aleatoria y la devuelve una sola vez para que el admin la entregue. Un admin no puede cambiar su propio rol ni desactivarse.
- Un estudiante puede eliminar su propia cuenta (`DELETE /users/me`) y un admin la de cualquier estudiante: se borran con ella sus inscripciones, avance e intentos. Las cuentas de admin no se eliminan; antes hay que quitarles el rol.
- Un curso se publica solo si tiene al menos una lección, sus evaluaciones tienen preguntas y, si hay evaluaciones, sus pesos suman 100.
- Un curso con inscripciones no se elimina, se archiva; archivado no admite inscripciones nuevas.
- Cada evaluación es una lista de preguntas `{ prompt, options, answer, explanation }` (`answer` es el índice de la opción correcta). El estudiante nunca recibe `answer` ni `explanation` antes de responder.
- Un intento (`POST /assessments/:id/attempts`) se corrige al momento y devuelve, pregunta por pregunta, la opción correcta y su explicación. Se puede repetir sin límite y cuenta el mejor intento.
- Un test se aprueba con 70 % de aciertos. Con `lessonId` es el test de esa estación: aprobarlo la completa y abre la siguiente; el de una estación no se puede responder hasta completar las anteriores. Las estaciones sin test se marcan a mano, en orden.
- Al completar la última estación, la inscripción pasa a `COMPLETED`.
- El examen (`type: EXAM`) solo se abre al completar todas las estaciones del curso.
- Cada intento guarda sus aciertos, no la nota: las preguntas y `maxScore` se pueden corregir aunque ya haya intentos, que no se vuelven a calificar. Una evaluación con intentos no se elimina.
- Los pesos de las evaluaciones de un curso no superan 100.
- Nota final = suma de `mejor nota / maxScore × peso`; se aprueba con 70.
