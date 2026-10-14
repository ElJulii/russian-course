"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { Guard, Loading } from "@/components/ui";
import type { PartOfSpeech, VocabularyWord } from "@/lib/api";
import { ASPECTS, PARTS_OF_SPEECH } from "@/lib/labels";
import { useApi } from "@/lib/useApi";
import { useRussianSpeech } from "@/lib/useSpeech";

const PAGE_SIZE = 100;

// Los grupos grandes tienen filtro propio; el resto va junto en «Otras».
const GROUPS: { label: string; matches: (pos: PartOfSpeech) => boolean }[] = [
  { label: "Todas", matches: () => true },
  { label: "Sustantivos", matches: (pos) => pos === "noun" },
  { label: "Verbos", matches: (pos) => pos === "verb" },
  { label: "Adjetivos", matches: (pos) => pos === "adj" },
  { label: "Adverbios", matches: (pos) => pos === "adv" },
  {
    label: "Otras",
    matches: (pos) => !["noun", "verb", "adj", "adv"].includes(pos),
  },
];

// Sin mayúsculas, tildes ni marcas de acento, y con ё = е: se busca como se
// escribe a mano.
const fold = (text: string) =>
  text
    .toLowerCase()
    .replace(/ё/g, "е")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function kind(word: VocabularyWord) {
  const pos = PARTS_OF_SPEECH[word.pos];
  return word.aspect ? `${pos} · ${ASPECTS[word.aspect]}` : pos;
}

function SpeakerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

function Vocabulary() {
  const words = useApi<VocabularyWord[]>("/vocabulary");
  const speak = useRussianSpeech();
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);

  const needle = fold(query.trim());
  const matches = (words.data ?? []).filter(
    (w) =>
      GROUPS[group].matches(w.pos) &&
      (!needle || fold(w.word).includes(needle) || fold(w.meaning).includes(needle)),
  );
  const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const current = Math.min(page, pages - 1);
  const shown = matches.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE);

  const goTo = (next: number) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="shell page stack" style={{ "--gap": "1.5rem" } as CSSProperties}>
      <header className="stack">
        <h1>Vocabulario</h1>
        <p className="lede">
          Las 1000 palabras más usadas del ruso, de la más frecuente a la menos.
          Con ellas se entiende cerca de dos tercios de un texto corriente. Es
          material de consulta para repasar a tu ritmo: no es una clase ni cuenta
          para tus notas.
        </p>
        <p className="small muted">
          La tilde sobre la vocal marca la sílaba que se acentúa (челове́к). En
          ruso no se escribe, pero cambia la pronunciación. La ё siempre es
          tónica, así que no la lleva.
        </p>
      </header>

      <Loading loading={words.loading} error={words.error} />

      {words.data && (
        <>
          <div className="stack" style={{ "--gap": "0.85rem" } as CSSProperties}>
            <input
              className="input"
              type="search"
              placeholder="Busca en ruso o en español"
              aria-label="Buscar palabra"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(0);
              }}
            />
            <div className="tabs" role="group" aria-label="Tipo de palabra">
              {GROUPS.map((g, i) => (
                <button
                  key={g.label}
                  className="chip filter"
                  aria-pressed={group === i}
                  onClick={() => {
                    setGroup(i);
                    setPage(0);
                  }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {matches.length === 0 ? (
            <div className="empty">
              <h2>Sin resultados</h2>
              <p className="muted">
                Prueba con otra palabra o quita el filtro de tipo.
              </p>
            </div>
          ) : (
            <>
              <p className="small muted" aria-live="polite">
                {current * PAGE_SIZE + 1}–{current * PAGE_SIZE + shown.length} de{" "}
                {matches.length} palabras
              </p>
              <div className="table-wrap">
                <table className="vocab">
                  <thead>
                    <tr>
                      <th className="num">#</th>
                      <th>Ruso</th>
                      <th>Significado</th>
                      <th>Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shown.map((w) => (
                      <tr key={w.rank}>
                        <td className="num muted">{w.rank}</td>
                        <td>
                          <span className="vocab-word">
                            {speak && (
                              <button
                                type="button"
                                className="speak"
                                onClick={() => speak(w.word)}
                                aria-label={`Escuchar ${w.word}`}
                                title="Escuchar"
                              >
                                <SpeakerIcon />
                              </button>
                            )}
                            <span lang="ru" className="cyr">
                              {w.word}
                            </span>
                          </span>
                        </td>
                        <td className="vocab-meaning">{w.meaning}</td>
                        <td className="small muted">{kind(w)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {pages > 1 && (
                <nav className="row spread" aria-label="Páginas del vocabulario">
                  <button
                    className="btn"
                    disabled={current === 0}
                    onClick={() => goTo(current - 1)}
                  >
                    Anterior
                  </button>
                  <span className="small muted">
                    Página {current + 1} de {pages}
                  </span>
                  <button
                    className="btn"
                    disabled={current === pages - 1}
                    onClick={() => goTo(current + 1)}
                  >
                    Siguiente
                  </button>
                </nav>
              )}
            </>
          )}

          {!speak && (
            <p className="small muted">
              Tu navegador no tiene una voz en ruso, por eso no aparece el botón
              para escuchar. En Windows se añade en Configuración › Hora e
              idioma › Voz; en Android y iPhone, en los ajustes de texto a voz.
            </p>
          )}

          <p className="small muted">
            Orden de frecuencia: lista de lemas de Serge Sharoff. Traducciones
            propias de la plataforma. Más detalles en{" "}
            <Link href="/creditos">Créditos</Link>.
          </p>
        </>
      )}
    </main>
  );
}

export default function VocabularyPage() {
  return (
    <Guard>
      <Vocabulary />
    </Guard>
  );
}
