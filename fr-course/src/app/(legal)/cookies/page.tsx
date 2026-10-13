import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de cookies — Поехали",
  description: "Qué cookies y almacenamiento local usa Поехали y para qué.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Política de cookies</h1>
      <p className="lede">
        {LEGAL.site} solo guarda en tu navegador lo imprescindible para que
        puedas iniciar sesión. No usamos cookies de publicidad ni de analítica.
      </p>

      <h2>1. Qué guardamos en tu navegador</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Para qué sirve</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>poyejali_session</code>
              </td>
              <td>Cookie propia, técnica</td>
              <td>
                Mantiene tu sesión iniciada. Es <code>httpOnly</code>: el código de
                la página no puede leerla.
              </td>
              <td>Hasta que sales o la sesión caduca</td>
            </tr>
            <tr>
              <td>
                <code>poyejali.session</code>
              </td>
              <td>Almacenamiento local, técnico</td>
              <td>
                Una marca sin datos personales que indica que hay una sesión
                abierta, para no consultar al servidor en cada visita.
              </td>
              <td>Hasta que sales</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Las dos son estrictamente necesarias para prestar el servicio que pides
        al iniciar sesión, por eso no mostramos un aviso para aceptarlas o
        rechazarlas. Si no inicias sesión, no se guarda ninguna.
      </p>

      <h2>2. Cookies de terceros</h2>
      <p>
        En las pantallas de entrar y de crear cuenta se carga el botón
        «Continuar con Google». Para funcionar, Google puede usar sus propias
        cookies en su dominio, sobre las que no tenemos control; se rigen por la
        política de privacidad de Google. Si prefieres evitarlas, entra con correo
        y contraseña y bloquea las cookies de terceros en tu navegador.
      </p>

      <h2>3. Cómo borrarlas o bloquearlas</h2>
      <p>
        Al pulsar «Salir» se eliminan las dos. También puedes borrarlas o
        bloquearlas desde la configuración de privacidad de tu navegador; si las
        bloqueas, no podrás iniciar sesión, pero podrás seguir viendo el catálogo
        de cursos.
      </p>

      <h2>4. Cambios</h2>
      <p>
        Si empezamos a usar otras cookies actualizaremos esta página antes y, si
        hace falta tu consentimiento, te lo pediremos. El resto del tratamiento
        de tus datos está en la{" "}
        <Link href="/privacidad">Política de privacidad</Link>.
      </p>
    </>
  );
}
