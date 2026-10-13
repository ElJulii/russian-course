import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad — Поехали",
  description: "Qué datos personales trata Поехали, para qué y cómo ejercer tus derechos.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Política de privacidad</h1>
      <p className="lede">
        Aquí te contamos qué datos tuyos guardamos, para qué los usamos, quién los
        ve y cómo puedes pedir que los corrijamos o los borremos.
      </p>

      <h2>1. Quién responde por tus datos</h2>
      <p>
        El responsable del tratamiento es {LEGAL.owner}, con identificación{" "}
        {LEGAL.taxId} y domicilio en {LEGAL.address}. Para cualquier asunto sobre
        tus datos escribe a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>

      <h2>2. Qué datos tratamos</h2>
      <ul>
        <li>
          <strong>Datos de tu cuenta:</strong> nombre, apellido y correo
          electrónico. Si creas una contraseña, guardamos solo su hash (bcrypt),
          nunca la contraseña en texto legible.
        </li>
        <li>
          <strong>Datos de Google, si entras con Google:</strong> el identificador
          de tu cuenta de Google, tu nombre y tu correo. No recibimos tu
          contraseña de Google ni accedemos a tus contactos, archivos o correos.
        </li>
        <li>
          <strong>Tu actividad en los cursos:</strong> los cursos en los que te
          inscribes, el profe que eliges, las estaciones que completas, las
          respuestas que entregas en ejercicios y exámenes, y las notas y
          comentarios que recibes.
        </li>
        <li>
          <strong>Datos técnicos:</strong> tu dirección IP y los registros básicos
          del servidor (fecha, hora y petición), que usamos para limitar intentos
          abusivos de acceso y diagnosticar fallos.
        </li>
      </ul>
      <p>
        No pedimos datos de pago ni categorías especiales de datos (salud,
        ideología, religión, etc.). No usamos herramientas de analítica ni de
        publicidad, y no elaboramos perfiles comerciales.
      </p>

      <h2>3. Para qué los usamos y con qué base</h2>
      <ul>
        <li>
          <strong>Prestarte el servicio</strong> (crear tu cuenta, mantener tu
          sesión, guardar tu avance, que tu profe califique tus entregas). Base:
          la ejecución de los <Link href="/terminos">Términos y condiciones</Link>{" "}
          que aceptas al registrarte.
        </li>
        <li>
          <strong>Enviarte correos del servicio</strong>, como el enlace para
          confirmar tu correo. Base: la ejecución de esos mismos términos. No
          enviamos publicidad.
        </li>
        <li>
          <strong>Proteger la plataforma</strong> frente a accesos no autorizados
          y abusos. Base: nuestro interés legítimo en mantener el servicio seguro.
        </li>
        <li>
          <strong>Cumplir obligaciones legales</strong> y atender requerimientos
          de autoridades competentes cuando la ley lo exija.
        </li>
      </ul>
      <p>
        Cuando la ley de tu país exija tu consentimiento para alguno de estos
        usos, lo das al crear tu cuenta y puedes retirarlo en cualquier momento
        pidiendo la baja.
      </p>

      <h2>4. Quién puede ver tus datos</h2>
      <ul>
        <li>
          <strong>El profe que elijas</strong> en cada curso ve tu nombre, tu
          avance, tus entregas y tus notas de ese curso.
        </li>
        <li>
          <strong>Los administradores</strong> de la plataforma ven los datos de
          las cuentas y de los cursos para gestionarlos.
        </li>
        <li>
          <strong>Proveedores que nos prestan servicios</strong>: alojamiento del
          sitio y de la base de datos, envío de correo y, si lo usas, el inicio
          de sesión de Google (Google Ireland Limited / Google LLC). Solo tratan
          los datos siguiendo nuestras instrucciones o, en el caso de Google,
          conforme a su propia política de privacidad.
        </li>
        <li>
          <strong>Si eres profe</strong>, tu nombre se muestra a los estudiantes
          para que puedan elegirte al inscribirse.
        </li>
      </ul>
      <p>
        No vendemos ni alquilamos tus datos, y no los compartimos con terceros
        con fines publicitarios.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Algunos de esos proveedores pueden tratar los datos en servidores fuera
        de tu país. En ese caso exigimos las garantías que pide la normativa
        aplicable, como cláusulas contractuales de protección de datos.
      </p>

      <h2>6. Cuánto tiempo los conservamos</h2>
      <p>
        Guardamos tus datos mientras tu cuenta exista. Si pides la baja,
        eliminamos o anonimizamos tus datos en un plazo máximo de 30 días, salvo
        los que debamos conservar por obligación legal o para atender
        reclamaciones, que quedan bloqueados durante el plazo que marque la ley.
        Los registros técnicos del servidor se borran de forma periódica.
      </p>

      <h2 id="derechos">7. Tus derechos</h2>
      <p>Puedes pedirnos en cualquier momento:</p>
      <ul>
        <li>saber qué datos tuyos tenemos y obtener una copia;</li>
        <li>corregir los que estén mal o incompletos;</li>
        <li>eliminar tu cuenta y tus datos;</li>
        <li>oponerte a un tratamiento o pedir que lo limitemos;</li>
        <li>recibir tus datos en un formato de uso común;</li>
        <li>retirar el consentimiento que hayas dado.</li>
      </ul>
      <p>
        Tu nombre, apellido y contraseña puedes cambiarlos tú mismo en{" "}
        <Link href="/perfil">Tu cuenta</Link>. Para lo demás, escribe a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> desde el correo de tu
        cuenta; respondemos en un máximo de 30 días. Si crees que no hemos
        atendido bien tu solicitud, puedes reclamar ante {LEGAL.authority}.
      </p>

      <h2>8. Cómo los protegemos</h2>
      <p>
        La conexión con el sitio va cifrada (HTTPS), las contraseñas se guardan
        con hash, la sesión viaja en una cookie que el código de la página no
        puede leer y el acceso a los datos está limitado según el rol de cada
        cuenta. Ningún sistema es infalible: si detectamos una brecha que afecte
        a tus datos, te avisaremos y lo comunicaremos a la autoridad cuando la
        ley lo exija.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        La plataforma está dirigida a mayores de {LEGAL.minAge} años. Los menores
        solo pueden usarla con la autorización y bajo la supervisión de su madre,
        padre o tutor legal. Si sabemos que un menor se registró sin esa
        autorización, eliminaremos su cuenta.
      </p>

      <h2>10. Cookies</h2>
      <p>
        Solo usamos el almacenamiento imprescindible para mantener tu sesión. El
        detalle está en la <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Si cambiamos esta política publicaremos aquí la versión nueva con su
        fecha. Si el cambio es relevante, te avisaremos por correo o al entrar en
        la plataforma.
      </p>
    </>
  );
}
