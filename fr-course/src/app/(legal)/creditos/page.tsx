import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Créditos — Поехали",
  description: "Fuentes de datos, tipografías y software de terceros que usa Поехали.",
};

export default function CreditsPage() {
  return (
    <>
      <h1>Créditos</h1>
      <p className="lede">
        Lo que {LEGAL.site} toma de otros, de dónde viene y qué hicimos con ello.
      </p>

      <h2>1. Lista de vocabulario</h2>
      <p>
        El orden de las palabras del <Link href="/vocabulario">Vocabulario</Link>{" "}
        viene de la lista de frecuencias de lemas del ruso elaborada por{" "}
        <strong>Serge Sharoff</strong> a partir de un corpus de unos 40 millones
        de palabras de textos escritos originalmente en ruso entre 1970 y 2002.
        La lista se publica en{" "}
        <a href="http://www.artint.ru/projects/frqlist/frqlist-en.php">
          artint.ru
        </a>
        .
      </p>
      <p>
        De esa lista tomamos solo el orden de frecuencia, la palabra y su
        categoría gramatical. Sobre ella:
      </p>
      <ul>
        <li>
          quitamos duplicados, variantes de una misma palabra (во, со, ко) y
          errores del etiquetado automático, y completamos hasta 1000 con las
          siguientes de la lista;
        </li>
        <li>restituimos la letra ё, que la lista original no usa;</li>
        <li>
          cambiamos algunas entradas por la forma que usa quien aprende, como
          должен en vez de должный;
        </li>
        <li>
          añadimos el aspecto de cada verbo y las traducciones al español, que
          son propias de {LEGAL.site}.
        </li>
      </ul>
      <p>
        Si ves una traducción mejorable, escríbenos a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>

      <h2>2. Tipografías</h2>
      <p>
        El sitio usa{" "}
        <a href="https://fonts.google.com/specimen/Unbounded">Unbounded</a> para
        los títulos y <a href="https://fonts.google.com/specimen/Onest">Onest</a>{" "}
        para el texto, ambas distribuidas por Google Fonts bajo la{" "}
        <a href="https://openfontlicense.org/">SIL Open Font License</a>. Se
        sirven desde nuestro propio servidor: tu navegador no se conecta a Google
        para cargarlas.
      </p>

      <h2>3. Software</h2>
      <p>
        {LEGAL.site} está construido con software libre, entre otros{" "}
        <a href="https://nextjs.org/">Next.js</a> y{" "}
        <a href="https://react.dev/">React</a> en la web, y{" "}
        <a href="https://nestjs.com/">NestJS</a> y{" "}
        <a href="https://www.prisma.io/">Prisma</a> en el servidor, publicados
        bajo licencias MIT y Apache 2.0.
      </p>
    </>
  );
}
