"use client";

import { Loading, Meter } from "@/components/ui";
import type { CourseStats } from "@/lib/api";
import { useApi } from "@/lib/useApi";

const percent = (value: number | null) => (value === null ? "Sin notas" : `${value}%`);

export function StatsTab({ courseId }: { courseId: string }) {
  const stats = useApi<CourseStats>(`/courses/${courseId}/stats`);
  if (!stats.data) return <Loading loading={stats.loading} error={stats.error} />;

  const { enrollments, lessonCompletion, assessments } = stats.data;
  const riders = enrollments.active + enrollments.completed;

  return (
    <div className="stack" style={{ ["--gap" as string]: "2.25rem" }}>
      <dl className="figures">
        <div>
          <dt>En ruta</dt>
          <dd>{enrollments.active}</dd>
        </div>
        <div>
          <dt>Terminaron</dt>
          <dd>{enrollments.completed}</dd>
        </div>
        <div>
          <dt>Se bajaron</dt>
          <dd>{enrollments.dropped}</dd>
        </div>
        <div>
          <dt>Llegan a la terminal</dt>
          <dd>{percent(enrollments.completionRate).replace("Sin notas", "Sin datos")}</dd>
        </div>
      </dl>

      <section className="stack">
        <h3>Hasta dónde llegan</h3>
        <p className="small muted">
          Viajeros que completaron cada estación. Una caída brusca señala dónde se
          atascan.
        </p>
        {lessonCompletion.map((lesson) => (
          <div key={lesson.id} className="stack" style={{ ["--gap" as string]: "0.25rem" }}>
            <div className="row spread small">
              <span>
                {lesson.order}. {lesson.title}
              </span>
              <strong>
                {lesson.completedBy} de {riders}
              </strong>
            </div>
            <Meter percent={riders ? (lesson.completedBy / riders) * 100 : 0} />
          </div>
        ))}
      </section>

      {assessments.length > 0 && (
        <section className="stack">
          <h3>Cómo les va en las evaluaciones</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Evaluación</th>
                  <th className="num">Respondieron</th>
                  <th className="num">Promedio</th>
                  <th className="num">Más baja</th>
                  <th className="num">Más alta</th>
                  <th className="num">Aprueban</th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.title}</td>
                    <td className="num">{a.graded}</td>
                    <td className="num">{percent(a.avgPercent)}</td>
                    <td className="num">{percent(a.minPercent)}</td>
                    <td className="num">{percent(a.maxPercent)}</td>
                    <td className="num">{percent(a.passRate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
