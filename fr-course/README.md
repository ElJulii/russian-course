# fr-course — Поехали

Frontend del curso de ruso en Next.js 16. Cada curso se muestra como una línea
de metro y cada lección como una estación.

## Puesta en marcha

1. Arranca la API (`bc-course`) en `http://localhost:4000`.
2. Crea `.env.local` con `NEXT_PUBLIC_API_URL=http://localhost:4000/api`.
   Para el botón «Continuar con Google» añade también
   `NEXT_PUBLIC_GOOGLE_CLIENT_ID` (ver el README de la API); sin él, el botón
   no aparece.
3. `npm run dev` y abre `http://localhost:3000` (o el 3001 si el 3000 está ocupado).

Si sirves el frontend desde otro origen, añádelo a `CORS_ORIGIN` en el `.env`
de la API (varios orígenes separados por coma).

## Pantallas

| Ruta | Quién | Qué hace |
| ---- | ----- | -------- |
| `/` | Todos | Portada y catálogo con filtro por nivel y búsqueda |
| `/login`, `/registro` | Todos | Entrar y crear cuenta, con correo y contraseña o con Google. El registro con contraseña pide confirmar el correo |
| `/verificar` | Todos | Destino del enlace del correo: confirma la cuenta e inicia sesión |
| `/cursos/[id]` | Todos | Recorrido del curso, inscripción, avance y lista de tests y examen con tu mejor nota |
| `/cursos/[id]/lecciones/[lessonId]` | Inscritos, admin | Contenido de la lección y acceso a su test; sin test, se marca como completada |
| `/cursos/[id]/evaluaciones/[assessmentId]` | Inscritos, admin | Responder el test o el examen de opción múltiple, ver la corrección con explicaciones y repetirlo |
| `/mi-ruta` | Estudiante | Cursos en los que está inscrito y su progreso |
| `/notas` | Estudiante | Mejor nota e intentos por evaluación y puntos acumulados |
| `/ensenar` | Admin | Todos los cursos y creación |
| `/ensenar/[id]` | Admin | Estaciones, evaluaciones (editor de preguntas), notas de los estudiantes, cifras, publicar y archivar |
| `/admin` | Admin | Usuarios: crear cuentas, rol, bloquear y eliminar estudiantes |
| `/perfil` | Con sesión | Nombre y contraseña; el estudiante puede eliminar su cuenta |

## Dónde está cada cosa

- `src/lib/api.ts`: cliente de la API y tipos de las respuestas.
- `src/lib/auth.tsx`: sesión. El token va en una cookie `httpOnly` que pone la API; en `localStorage` solo queda una marca de que hay sesión.
- `src/lib/labels.ts`: colores de línea por nivel y textos de estados.
- `src/app/globals.css`: tokens de diseño y todos los estilos.
