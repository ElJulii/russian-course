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
| `olga@ruso.dev` | Profe | `olgaivanova` |
| `dmitri@ruso.dev` | Profe | `dmitrisokolov` |
| `ana@ruso.dev` | Estudiante | `anatorres` |
| `luis@ruso.dev` | Estudiante | `luismendez` |
| `sofia@ruso.dev` | Estudiante | `sofiarojas` |

El seed crea además los seis cursos de la plataforma, de A1 a C2. Su contenido
está en `prisma/content/` (un archivo por nivel) y el catálogo en
`prisma/courses.ts`: doce lecciones por curso, un bloque de ejercicios por
lección (5 % de la nota cada uno) y un examen final (40 %). El seed borra todo
lo que haya en la base.

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

Los permisos por rol están en `src/common/rbac/permissions.ts` y cada ruta declara
lo que exige con `@RequirePermissions(...)`. Los cursos son de la plataforma: no
pertenecen a ningún profe. Al inscribirse, el estudiante elige qué profe lo evalúa.

| Rol        | Puede                                                                 |
| ---------- | --------------------------------------------------------------------- |
| STUDENT    | Inscribirse eligiendo profe, completar lecciones, entregar ejercicios y exámenes, ver sus notas |
| INSTRUCTOR | Ver los cursos y calificar las entregas de los estudiantes que lo eligieron |
| ADMIN      | Crear y editar cursos, lecciones y evaluaciones; crear usuarios; calificar a cualquiera; estadísticas |

## Endpoints (prefijo `/api`)

| Método | Ruta | Acceso |
| ------ | ---- | ------ |
| POST | `/auth/register`, `/auth/login`, `/auth/logout` | Público (entrar deja la sesión en una cookie) |
| POST | `/auth/verify-email`, `/auth/resend-verification` | Público (confirmar el correo y pedir otro enlace) |
| POST | `/auth/google` | Público (entra o crea la cuenta con un ID token de Google) |
| GET, PATCH | `/users/me` | Autenticado |
| GET | `/users/instructors` | Autenticado (profes activos para elegir) |
| GET | `/users`, `/users/:id`, `/users/stats` | Admin |
| POST | `/users` | Admin (devuelve una contraseña inicial aleatoria, una sola vez) |
| PATCH | `/users/:id/role`, `/users/:id/status` | Admin |
| GET | `/courses`, `/courses/:id` | Público (solo publicados) |
| GET | `/courses/manage` | Admin |
| GET | `/courses/teaching` | Instructor (cursos con estudiantes suyos) / Admin |
| POST | `/courses` | Admin |
| PATCH, DELETE | `/courses/:id` | Admin |
| POST | `/courses/:id/publish`, `/courses/:id/archive` | Admin |
| GET | `/courses/:id/lessons/:lessonId` | Inscritos, instructores, admin |
| POST | `/courses/:id/lessons` | Admin |
| PUT | `/courses/:id/lessons/order` | Admin |
| PATCH, DELETE | `/courses/:id/lessons/:lessonId` | Admin |
| POST | `/courses/:id/enroll` | Estudiante (body: `evaluatorId`) |
| POST | `/courses/:id/lessons/:lessonId/complete` | Estudiante inscrito |
| GET | `/enrollments/me` | Estudiante |
| GET | `/enrollments/evaluating` | Instructor (estudiantes que lo eligieron, con curso, avance y entregas) / Admin |
| POST | `/enrollments/:id/drop` | Estudiante (propia) |
| GET | `/courses/:id/enrollments` | Admin |
| GET | `/courses/:id/assessments` | Inscritos, instructores, admin |
| POST | `/courses/:id/assessments` | Admin |
| GET | `/assessments/:id` | Inscritos (con su entrega y su nota), instructores, admin |
| PATCH, DELETE | `/assessments/:id` | Admin |
| PUT | `/assessments/:id/submission` | Estudiante inscrito |
| GET | `/assessments/:id/submissions` | Instructor (solo sus estudiantes) / Admin |
| PUT | `/assessments/:id/grades/:studentId` | Instructor elegido por el estudiante / Admin |
| GET | `/courses/:id/gradebook` | Instructor (solo sus estudiantes) / Admin |
| GET | `/courses/:id/stats` | Admin |
| GET | `/grades/me` | Estudiante |

## Reglas de negocio

- Cada usuario tiene nombre (`firstName`) y apellido (`lastName`); `name` es el nombre completo que arma el servidor. El registro pide ambos y el estudiante elige su contraseña.
- El registro público solo crea estudiantes. Un admin crea las demás cuentas (p. ej. profes) con `POST /users`; la API genera una contraseña inicial aleatoria y la devuelve una sola vez para que el admin la entregue. Un admin no puede cambiar su propio rol ni desactivarse.
- Para inscribirse hay que elegir un profe activo; solo ese profe (o un admin) ve y califica las entregas de ese estudiante. Un profe con estudiantes en curso no se puede desactivar ni cambiar de rol.
- Un curso se publica solo si tiene al menos una lección y, si tiene evaluaciones, sus pesos suman 100.
- Un curso con inscripciones no se elimina, se archiva; archivado no admite inscripciones nuevas.
- Las lecciones se completan en orden; al terminar la última, la inscripción pasa a `COMPLETED`.
- Los pesos de las evaluaciones de un curso no superan 100 y una nota no supera el `maxScore`.
- Solo se califica a estudiantes con inscripción vigente; una evaluación con notas o entregas no se elimina.
- Una evaluación con `questions` se responde en la plataforma: no hay nota automática, el instructor califica cada entrega a mano y no puede calificar a quien no ha entregado.
- El estudiante puede corregir su entrega hasta que se califica; después queda cerrada. Los ejercicios de una evaluación no se cambian si ya tiene entregas.
- El examen (`type: EXAM`) solo se abre al completar todas las lecciones del curso.
- Nota final = suma de `nota / maxScore × peso`; se aprueba con 70.
