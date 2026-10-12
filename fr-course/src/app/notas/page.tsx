"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Guard, Loading, Roundel, lineStyle } from "@/components/ui";
import type { ReportCard } from "@/lib/api";
import { ASSESSMENT_TYPES, assessmentState } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

function verdict(card: ReportCard) {
  const { summary } = card;
  if (summary.totalWeight === 0) return "Este curso no tiene evaluaciones.";
  if (summary.gradedWeight === 0) return "Aún no te han calificado nada.";
  if (summary.passed) return "Vas aprobando. Так держать!";
  if (summary.gradedWeight < summary.totalWeight) {
    return `Falta por calificar el ${summary.totalWeight - summary.gradedWeight}% de la nota. En lo calificado llevas ${summary.currentAverage} de 100.`;
  }
  return "No alcanza para aprobar: se necesita 70.";
}

function Grades() {
  const report = useApi<ReportCard[]>("/grades/me");

  return (
    <main className="shell page stack" style={{ "--gap": "2rem" } as CSSProperties}>
      <header className="stack">
        <h1>Mis notas</h1>
        <p className="lede">
          Tu nota final es sobre 100 y cada evaluación pesa un porcentaje. Se
          aprueba con 70. Los ejercicios y el examen reciben nota cuando el profe
          revisa tu entrega.
        </p>
      </header>

      <Loading loading={report.loading} error={report.error} />

      {report.data?.length === 0 && (
        <div className="empty">
          <h2>Sin notas todavía</h2>
          <p className="muted">Aparecerán aquí cuando te subas a un curso.</p>
          <Link href="/#lineas" className="btn btn-primary">
            Ver las líneas
          </Link>
        </div>
      )}

      {report.data?.map((card) => (
        <section key={card.enrollmentId} className="stack" style={lineStyle(card.course.level)}>
          <div className="row spread">
            <div className="row">
              <Roundel level={card.course.level} />
              <h2>
                <Link href={`/cursos/${card.course.id}`}>{card.course.title}</Link>
              </h2>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="grade">{card.summary.finalGrade}</div>
              <span className="small muted">puntos acumulados de 100</span>
            </div>
          </div>
          <p>{verdict(card)}</p>
          {card.assessments.length > 0 && (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Evaluación</th>
                    <th>Tipo</th>
                    <th className="num">Peso</th>
                    <th className="num">Tu nota</th>
                    <th>Comentario del profe</th>
                  </tr>
                </thead>
                <tbody>
                  {card.assessments.map((a) => (
                    <tr key={a.id}>
                      <td>
                        {a.questionCount > 0 ? (
                          <Link href={`/cursos/${card.course.id}/evaluaciones/${a.id}`}>
                            {a.title}
                          </Link>
                        ) : (
                          a.title
                        )}
                      </td>
                      <td>{ASSESSMENT_TYPES[a.type]}</td>
                      <td className="num">{a.weight}%</td>
                      <td className="num">
                        {a.score === null ? (
                          <span className="muted">{assessmentState(a)}</span>
                        ) : (
                          <strong>{assessmentState(a)}</strong>
                        )}
                      </td>
                      <td style={{ whiteSpace: "normal" }}>{a.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}

export default function GradesPage() {
  return (
    <Guard roles={["STUDENT"]}>
      <Grades />
    </Guard>
  );
}
