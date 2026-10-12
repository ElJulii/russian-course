"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { Loading, Roundel, lineStyle } from "@/components/ui";
import type { CourseSummary, Level, Page } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { LEVELS, LEVEL_KEYS, plural } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

const STOPS = [
  ["Привет", "hola"],
  ["Спасибо", "gracias"],
  ["Метро", "metro"],
  ["Друг", "amigo"],
  ["Поехали!", "¡vámonos!"],
];

export default function Home() {
  const { user } = useAuth();
  const [level, setLevel] = useState<Level | null>(null);
  const [search, setSearch] = useState("");

  const query = new URLSearchParams({ limit: "50" });
  if (level) query.set("level", level);
  if (search.trim()) query.set("search", search.trim());
  const courses = useApi<Page<CourseSummary>>(`/courses?${query}`);

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <h1>Ruso, estación por estación.</h1>
          <p className="lede">
            Cada curso es una línea de metro y cada lección, una estación.
            Súbete, avanza a tu ritmo y bájate hablando ruso.
          </p>
          <div className="row hero-actions">
            <a href="#lineas" className="btn btn-primary">
              Ver las líneas
            </a>
            {!user && (
              <Link href="/registro" className="btn">
                Crear cuenta gratis
              </Link>
            )}
          </div>
          <ol className="route" aria-label="Tus primeras palabras en ruso">
            {STOPS.map(([ru, es], i) => (
              <li key={ru} className="stop" style={{ "--i": i } as CSSProperties}>
                <span className="stop-ru" lang="ru">
                  {ru}
                </span>
                <span className="stop-es">{es}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="lineas" className="shell page stack" style={{ "--gap": "1.5rem" } as CSSProperties}>
        <div className="row spread">
          <h2>Líneas abiertas</h2>
          <input
            className="input"
            style={{ maxWidth: "18rem" }}
            type="search"
            placeholder="Buscar un curso"
            aria-label="Buscar un curso"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="row" role="group" aria-label="Filtrar por nivel">
          <button
            className="chip filter"
            style={{ "--line": "var(--ink)" } as CSSProperties}
            aria-pressed={level === null}
            onClick={() => setLevel(null)}
          >
            Todas
          </button>
          {LEVEL_KEYS.map((key) => (
            <button
              key={key}
              className="chip filter"
              style={lineStyle(key)}
              aria-pressed={level === key}
              onClick={() => setLevel(level === key ? null : key)}
            >
              {key} {LEVELS[key].name}
            </button>
          ))}
        </div>

        <Loading loading={courses.loading} error={courses.error} />

        {courses.data?.data.length === 0 && (
          <div className="empty">
            <h3>Aún no hay líneas por aquí</h3>
            <p className="muted">
              Prueba con otro nivel o borra la búsqueda para ver todos los cursos.
            </p>
          </div>
        )}

        {!!courses.data?.data.length && (
          <ul className="lines">
            {courses.data.data.map((course) => (
              <li key={course.id}>
                <Link
                  href={`/cursos/${course.id}`}
                  className="line-row"
                  style={lineStyle(course.level)}
                >
                  <Roundel level={course.level} large />
                  <div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                  <span
                    className="track"
                    aria-hidden
                    style={{ width: `${Math.min(course._count.lessons, 14) * 0.85 + 1.4}rem` }}
                  >
                    {Array.from(
                      { length: Math.min(course._count.lessons, 14) },
                      (_, i) => (
                        <i key={i} />
                      ),
                    )}
                  </span>
                  <span className="line-meta">
                    {plural(course._count.lessons, "estación", "estaciones")},{" "}
                    {plural(course._count.enrollments, "viajero", "viajeros")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
