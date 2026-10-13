"use client";

import { Loading } from "@/components/ui";
import type { Gradebook } from "@/lib/api";
import { ENROLLMENT_STATUS } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

export function GradebookTab({ courseId }: { courseId: string }) {
  const book = useApi<Gradebook>(`/courses/${courseId}/gradebook`);
  if (!book.data) return <Loading loading={book.loading} error={book.error} />;
  const { assessments, students, classSummary } = book.data;

  if (assessments.length === 0) {
    return (
      <p className="muted">
        Primero crea evaluaciones en la pestaña Evaluaciones; aquí verás la mejor
        nota de cada estudiante.
      </p>
    );
  }
  if (students.length === 0) {
    return <p className="muted">Todavía no hay viajeros en esta línea.</p>;
  }

  return (
    <div className="stack">
      <p className="small muted">
        Las notas se calculan solas: es la mejor de los intentos de cada
        estudiante. Se aprueba con{" "}
        {classSummary.passingGrade}; van {classSummary.passed} de{" "}
        {classSummary.students} y el promedio del grupo es{" "}
        {classSummary.averageFinalGrade ?? 0}.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th className="num">Puesto</th>
              <th>Estudiante</th>
              {assessments.map((a) => (
                <th key={a.id} className="num">
                  {a.title}
                  <div className="small muted">
                    sobre {a.maxScore}, pesa {a.weight}%
                  </div>
                </th>
              ))}
              <th className="num">Final</th>
            </tr>
          </thead>
          <tbody>
            {students.map((row) => (
              <tr key={row.enrollmentId}>
                <td className="num">{row.rank}</td>
                <td>
                  <strong>{row.student.name}</strong>
                  <div className="small muted">
                    {row.student.email}, {ENROLLMENT_STATUS[row.status].toLowerCase()}
                  </div>
                </td>
                {assessments.map((a) => {
                  const score = row.scores[a.id];
                  return (
                    <td key={a.id} className="num">
                      {score !== null ? (
                        <strong>{score}</strong>
                      ) : (
                        <span className="small muted">Sin responder</span>
                      )}
                    </td>
                  );
                })}
                <td className="num">
                  <span className={row.passed ? "chip chip-sun" : "chip"}>
                    {row.finalGrade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
