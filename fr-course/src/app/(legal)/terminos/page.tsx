import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Términos y condiciones — Поехали",
  description: "Las reglas de uso de la plataforma de cursos de ruso Поехали.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Términos y condiciones</h1>
      <p className="lede">
        Estas son las reglas para usar {LEGAL.site}. Al crear una cuenta o usar
        la plataforma las aceptas; si no estás de acuerdo, no la uses.
      </p>

      <h2>1. Quiénes somos</h2>
      <p>
        {LEGAL.site} es una plataforma de cursos de ruso en español operada por{" "}
        {LEGAL.owner} («nosotros»). Los datos completos del titular están en el{" "}
        <Link href="/aviso-legal">Aviso legal</Link>.
      </p>

      <h2>2. El servicio</h2>
      <p>
        Ofrecemos cursos autónomos organizados por niveles: lecciones, tests de
        opción múltiple y un examen final que la plataforma corrige de forma
        automática, sin profesores ni tutorías. El acceso es gratuito. Los
        niveles siguen como referencia el Marco Común Europeo, pero los cursos y
        sus notas son orientativos: no equivalen a un título ni a una
        certificación oficial de idioma, y no garantizamos que alcances un nivel
        determinado.
      </p>

      <h2>3. Tu cuenta</h2>
      <ul>
        <li>
          Debes tener al menos {LEGAL.minAge} años, o contar con la autorización
          de tu madre, padre o tutor legal.
        </li>
        <li>Los datos que des al registrarte deben ser verdaderos y tuyos.</li>
        <li>
          La cuenta es personal. Eres responsable de mantener tu contraseña en
          secreto y de lo que se haga con tu cuenta; avísanos si crees que
          alguien más la está usando.
        </li>
      </ul>

      <h2>4. Uso permitido</h2>
      <p>Al usar la plataforma te comprometes a no:</p>
      <ul>
        <li>
          responder los tests con ayuda de programas o hacer que otra persona
          los responda por ti;
        </li>
        <li>
          publicar contenido ilegal, ofensivo, discriminatorio o que vulnere
          derechos de otras personas;
        </li>
        <li>
          intentar acceder a cuentas, datos o zonas de la plataforma que no te
          corresponden, ni poner a prueba su seguridad sin nuestro permiso;
        </li>
        <li>
          usar robots o programas para extraer contenido de forma masiva, ni
          sobrecargar el servicio;
        </li>
        <li>revender o explotar comercialmente el acceso o los contenidos.</li>
      </ul>

      <h2>5. Contenido de la plataforma</h2>
      <p>
        Las lecciones, ejercicios, textos, diseño, marca y código de {LEGAL.site}{" "}
        son nuestros o de quienes nos los han licenciado. Puedes usarlos para tu
        aprendizaje personal. No puedes copiarlos, distribuirlos, publicarlos ni
        crear obras derivadas sin nuestro permiso por escrito.
      </p>

      <h2>6. Tests y notas</h2>
      <p>
        Los tests y el examen se corrigen de forma automática comparando tus
        respuestas con las correctas. Puedes repetirlos sin límite y cuenta tu
        mejor nota. Guardamos tus intentos para calcular tus notas y tu avance.
        Si crees que una pregunta o su respuesta están mal, escríbenos y la
        revisaremos; podemos corregir preguntas en cualquier momento.
      </p>

      <h2>7. Disponibilidad y cambios</h2>
      <p>
        Trabajamos para que la plataforma funcione bien, pero puede haber
        interrupciones por mantenimiento, fallos técnicos o causas ajenas a
        nosotros. Podemos añadir, cambiar o retirar cursos y funciones. Si algún
        día cerramos el servicio, avisaremos con antelación razonable.
      </p>

      <h2>8. Suspensión y baja</h2>
      <p>
        Puedes eliminar tu cuenta cuando quieras, sin coste y sin dar
        explicaciones, con el botón «Eliminar mi cuenta» de{" "}
        <Link href="/perfil">Tu cuenta</Link>. Al hacerlo se borran de inmediato
        y de forma definitiva tus datos, tus inscripciones, tu avance y tus
        notas: no podremos recuperarlos, aunque puedes registrarte de nuevo y
        empezar de cero. Si no puedes entrar, pide la baja escribiendo a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> desde el correo de
        tu cuenta.
      </p>
      <p>
        Por nuestra parte, podemos bloquear o eliminar una cuenta que incumpla
        estos términos; salvo en casos graves, te avisaremos antes y te
        explicaremos el motivo.
      </p>

      <h2>9. Responsabilidad</h2>
      <p>
        La plataforma se ofrece «tal cual». En la medida en que la ley lo
        permita, no respondemos por daños indirectos, por la pérdida de datos
        causada por fallos ajenos a nuestro control ni por el uso que hagas de lo
        aprendido. Nada de lo dicho aquí limita los derechos que la ley te
        reconoce como consumidor ni nuestra responsabilidad cuando la ley no
        permite excluirla.
      </p>

      <h2>10. Datos personales</h2>
      <p>
        El tratamiento de tus datos se explica en la{" "}
        <Link href="/privacidad">Política de privacidad</Link> y en la{" "}
        <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>11. Cambios en estos términos</h2>
      <p>
        Podemos actualizar estos términos. Publicaremos aquí la versión nueva con
        su fecha y, si el cambio es relevante, te avisaremos por correo o al
        entrar. Si sigues usando la plataforma después del cambio, se entiende
        que lo aceptas.
      </p>

      <h2>12. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de {LEGAL.country}. Cualquier
        conflicto se resolverá ante los tribunales de {LEGAL.courts}, salvo que
        la normativa de protección al consumidor te permita acudir a los de tu
        domicilio.
      </p>

      <h2>13. Contacto</h2>
      <p>
        Dudas sobre estos términos:{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>
    </>
  );
}
