"use client";

import { Loading, Notice, useAction } from "@/components/ui";
import { api, type Gradebook } from "@/lib/api";
import { ENROLLMENT_STATUS } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

export function GradebookTab({ courseId }: { courseId: string }) {
  const book = useApi<Gradebook>(`/courses/${courseId}/gradebook`);
  const action = useAction();

  const save = (assessmentId: string, studentId: string, raw: string, previous: number | null) => {
    if (raw.trim() === "" || Number(raw) === previous) return;
    void action.run(async () => {
      await api(`/assessments/${assessmentId}/grades/${studentId}`, {
        method: "PUT",
        body: { score: Number(raw) },
      });
      book.reload();
    });
  };

  if (!book.data) return <Loading loading={book.loading} error={book.error} />;
  const { assessments, students, classSummary } = book.data;

  if (assessments.length === 0) {
    return (
      <p className="muted">
        Primero crea evaluaciones en la pestaña Evaluaciones; después podrás poner
        notas aquí.
      </p>
    );
  }
  if (students.length === 0) {
    return <p className="muted">Todavía no hay viajeros en esta línea.</p>;
  }

  return (
    <div className="stack">
      <p className="small muted">
        Escribe la nota y sal de la casilla para guardarla. Los ejercicios y
        exámenes que se responden en la plataforma se califican en la pestaña
        Entregas, una vez que el estudiante entrega. Se aprueba con{" "}
        {classSummary.passingGrade}; van {classSummary.passed} de{" "}
        {classSummary.students} y el promedio del grupo es{" "}
        {classSummary.averageFinalGrade ?? 0}.
      </p>
      <Notice>{action.error}</Notice>
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
                    {row.student.email}, {ENROLLMENT_STATUS[row.status].toLowerCase()}, lo
                    evalúa {row.evaluator.name}
                  </div>
                </td>
                {assessments.map((a) => {
                  const score = row.scores[a.id];
                  if (a.questionCount > 0) {
                    return (
                      <td key={a.id} className="num">
                        {score !== null ? (
                          <strong>{score}</strong>
                        ) : (
                          <span className="small muted">
                            {row.submitted.includes(a.id) ? "Por calificar" : "Sin entregar"}
                          </span>
                        )}
                      </td>
                    );
                  }
                  return (
                    <td key={a.id} className="num">
                      <input
                        // La clave incluye la nota para refrescar la casilla tras guardar.
                        key={`${a.id}-${score}`}
                        className="input input-cell"
                        type="number"
                        min={0}
                        max={a.maxScore}
                        step="0.01"
                        defaultValue={score ?? ""}
                        aria-label={`Nota de ${row.student.name} en ${a.title}`}
                        onBlur={(e) => save(a.id, row.student.id, e.target.value, score)}
                        onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
                      />
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
