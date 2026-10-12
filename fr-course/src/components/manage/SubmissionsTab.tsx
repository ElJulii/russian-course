"use client";

import { useState } from "react";
import { Loading, Notice, useAction } from "@/components/ui";
import { api, type ManagedAssessment, type SubmissionInbox } from "@/lib/api";
import { useApi } from "@/lib/useApi";

type Inbox = SubmissionInbox["assessment"];
type Entry = SubmissionInbox["entries"][number];

function Review({
  assessment,
  entry,
  onGraded,
}: {
  assessment: Inbox;
  entry: Entry;
  onGraded: () => void;
}) {
  const action = useAction();
  const [score, setScore] = useState(entry.grade ? String(entry.grade.score) : "");
  const [feedback, setFeedback] = useState(entry.grade?.feedback ?? "");

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    void action.run(async () => {
      await api(`/assessments/${assessment.id}/grades/${entry.student.id}`, {
        method: "PUT",
        body: {
          score: Number(score),
          ...(feedback.trim() && { feedback: feedback.trim() }),
        },
      });
      onGraded();
    });
  };

  return (
    <form className="panel stack" onSubmit={save}>
      <div className="row spread">
        <div>
          <h3>{entry.student.name}</h3>
          <span className="small muted">
            {entry.student.email}, entregó el{" "}
            {new Date(entry.submission!.submittedAt).toLocaleDateString("es")}
          </span>
        </div>
        <span className={entry.grade ? "chip chip-sun" : "chip chip-solid"}>
          {entry.grade
            ? `${entry.grade.score} / ${assessment.maxScore}`
            : "Por calificar"}
        </span>
      </div>

      <ol className="exercises">
        {assessment.questions.map((question, index) => (
          <li key={index} className="exercise">
            <span className="exercise-prompt">{question}</span>
            <p className="answer" lang="ru">
              {entry.submission!.answers[index] || (
                <span className="muted">Sin respuesta</span>
              )}
            </p>
          </li>
        ))}
      </ol>

      <div className="form-grid">
        <label className="field">
          <span>Nota (sobre {assessment.maxScore})</span>
          <input
            className="input"
            type="number"
            required
            min={0}
            max={assessment.maxScore}
            step="0.01"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </label>
        <label className="field" style={{ gridColumn: "span 2" }}>
          <span>Comentario para el estudiante (opcional)</span>
          <input
            className="input"
            maxLength={1000}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </label>
      </div>
      <Notice>{action.error}</Notice>
      <div className="row">
        <button className="btn btn-primary" disabled={action.busy}>
          {entry.grade ? "Corregir la nota" : "Guardar la nota"}
        </button>
      </div>
    </form>
  );
}

export function SubmissionsTab({ courseId }: { courseId: string }) {
  const assessments = useApi<ManagedAssessment[]>(`/courses/${courseId}/assessments`);
  const [chosen, setChosen] = useState<string | null>(null);

  const answerable = assessments.data?.filter((a) => a.questionCount > 0) ?? [];
  // Por defecto, la primera evaluación con entregas esperando nota.
  const selected =
    chosen ?? (answerable.find((a) => a.pendingReview > 0) ?? answerable[0])?.id ?? null;
  const inbox = useApi<SubmissionInbox>(
    selected ? `/assessments/${selected}/submissions` : null,
  );

  if (!assessments.data) {
    return <Loading loading={assessments.loading} error={assessments.error} />;
  }
  if (answerable.length === 0) {
    return (
      <p className="muted">
        Ninguna evaluación tiene ejercicios para responder en la plataforma. Añádelos
        en la pestaña Evaluaciones.
      </p>
    );
  }

  const pending = answerable.reduce((sum, a) => sum + a.pendingReview, 0);
  const delivered = inbox.data?.entries.filter((entry) => entry.submission) ?? [];
  const missing = inbox.data?.entries.filter((entry) => !entry.submission) ?? [];

  const reload = () => {
    inbox.reload();
    assessments.reload();
  };

  return (
    <div className="stack" style={{ ["--gap" as string]: "1.5rem" }}>
      <p className="small muted">
        {pending === 0
          ? "No hay entregas esperando nota."
          : `Hay ${pending} ${pending === 1 ? "entrega" : "entregas"} esperando nota.`}{" "}
        Un estudiante solo recibe nota cuando calificas lo que entregó.
      </p>

      <label className="field">
        <span>Evaluación</span>
        <select
          className="input"
          value={selected ?? ""}
          onChange={(e) => setChosen(e.target.value)}
        >
          {answerable.map((a) => (
            <option key={a.id} value={a.id}>
              {a.title} ({a.pendingReview} por calificar, {a.submitted} entregadas)
            </option>
          ))}
        </select>
      </label>

      <Loading loading={inbox.loading} error={inbox.error} />

      {inbox.data && delivered.length === 0 && (
        <p className="muted">Nadie ha entregado esta evaluación todavía.</p>
      )}

      {inbox.data &&
        delivered.map((entry) => (
          <Review
            // La clave cambia al calificar para refrescar el formulario.
            key={`${selected}-${entry.enrollmentId}-${entry.grade?.gradedAt}`}
            assessment={inbox.data!.assessment}
            entry={entry}
            onGraded={reload}
          />
        ))}

      {missing.length > 0 && (
        <p className="small muted">
          Sin entregar: {missing.map((entry) => entry.student.name).join(", ")}.
        </p>
      )}
    </div>
  );
}
