import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal — Поехали",
  description: "Datos del titular de Поехали y condiciones generales del sitio.",
};

export default function LegalNoticePage() {
  return (
    <>
      <h1>Aviso legal</h1>
      <p className="lede">
        Quién está detrás de {LEGAL.site} y cómo ponerte en contacto.
      </p>

      <h2>1. Titular del sitio</h2>
      <dl className="legal-facts">
        <dt>Titular</dt>
        <dd>{LEGAL.owner}</dd>
        <dt>Identificación</dt>
        <dd>{LEGAL.taxId}</dd>
        <dt>Domicilio</dt>
        <dd>{LEGAL.address}</dd>
        <dt>Correo</dt>
        <dd>
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        </dd>
      </dl>

      <h2>2. Objeto</h2>
      <p>
        Este sitio ofrece cursos de ruso en español. Su uso se rige por los{" "}
        <Link href="/terminos">Términos y condiciones</Link>, la{" "}
        <Link href="/privacidad">Política de privacidad</Link> y la{" "}
        <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Los contenidos, el diseño, la marca y el código del sitio pertenecen al
        titular o a quienes se los han licenciado, y están protegidos por las
        leyes de propiedad intelectual e industrial. No se permite reproducirlos,
        distribuirlos ni transformarlos sin autorización por escrito, más allá del
        uso personal para aprender. Los datos, tipografías y programas de
        terceros que usa el sitio, y sus licencias, se detallan en{" "}
        <Link href="/creditos">Créditos</Link>.
      </p>

      <h2>4. Enlaces externos</h2>
      <p>
        El sitio puede enlazar a páginas de terceros. No controlamos su contenido
        ni sus prácticas de privacidad y no respondemos por ellas.
      </p>

      <h2>5. Avisos sobre contenidos</h2>
      <p>
        Si crees que algún contenido del sitio vulnera tus derechos o contiene un
        error, escríbenos a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>{" "}
        indicando de qué contenido se trata y el motivo. Lo revisaremos y, si
        procede, lo corregiremos o retiraremos.
      </p>

      <h2>6. Ley aplicable</h2>
      <p>
        Este aviso se rige por las leyes de {LEGAL.country}, en los términos que
        recoge el apartado 12 de los{" "}
        <Link href="/terminos">Términos y condiciones</Link>.
      </p>
    </>
  );
}
