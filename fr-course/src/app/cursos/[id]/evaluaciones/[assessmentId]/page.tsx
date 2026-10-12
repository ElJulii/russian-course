"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { Guard, Loading, Notice, lineStyle, useAction } from "@/components/ui";
import { api, type AssessmentDetail } from "@/lib/api";
import { ASSESSMENT_TYPES, plural } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

function AnswerForm({
  assessment,
  onSaved,
}: {
  assessment: AssessmentDetail;
  onSaved: () => void;
}) {
  const { questions, viewer } = assessment;
  const action = useAction();
  const [saved, setSaved] = useState(false);
  const [answers, setAnswers] = useState(
    () => viewer.submission?.answers ?? questions.map(() => ""),
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(false);
    void action.run(async () => {
      await api(`/assessments/${assessment.id}/submission`, {
        method: "PUT",
        body: { answers },
      });
      setSaved(true);
      onSaved();
    });
  };

  return (
    <form className="stack" style={{ "--gap": "1.5rem" } as CSSProperties} onSubmit={submit}>
      <ol className="exercises">
        {questions.map((question, index) => (
          <li key={index} className="exercise">
            <label className="exercise-prompt" htmlFor={`answer-${index}`}>
              {question}
            </label>
            <textarea
              id={`answer-${index}`}
              className="input"
              lang="ru"
              maxLength={4000}
              value={answers[index] ?? ""}
              onChange={(e) =>
                setAnswers(answers.map((a, i) => (i === index ? e.target.value : a)))
              }
            />
          </li>
        ))}
      </ol>
      <Notice>{action.error}</Notice>
      <Notice ok>
        {saved && "Entrega guardada. Tu nota aparecerá cuando el profe la califique."}
      </Notice>
      <div className="row">
        <button className="btn btn-primary" disabled={action.busy}>
          {viewer.submission ? "Actualizar mi entrega" : "Entregar"}
        </button>
        <span className="small muted">
          Puedes corregirla mientras el profe no la haya calificado.
        </span>
      </div>
    </form>
  );
}

function AssessmentView() {
  const { id, assessmentId } = useParams<{ id: string; assessmentId: string }>();
  const assessment = useApi<AssessmentDetail>(`/assessments/${assessmentId}`);

  if (!assessment.data) {
    return (
      <main className="shell page stack">
        <Loading loading={assessment.loading} error={assessment.error} />
        {assessment.error && (
          <Link href={`/cursos/${id}`} className="btn">
            Volver al curso
          </Link>
        )}
      </main>
    );
  }

  const { course, lesson, viewer, questions, instructions, ...info } = assessment.data;
  const { submission, grade } = viewer;
  const readOnly = viewer.canGrade || !!grade;

  return (
    <main
      className="shell page stack"
      style={{ ...lineStyle(course.level), "--gap": "1.75rem" } as CSSProperties}
    >
      <Link
        href={lesson ? `/cursos/${id}/lecciones/${lesson.id}` : `/cursos/${id}`}
        className="small"
      >
        {lesson ? `Estación ${lesson.order}: ${lesson.title}` : course.title}
      </Link>
      <header className="stack">
        <div className="row">
          <span className="chip chip-solid">{ASSESSMENT_TYPES[info.type]}</span>
          <span className="small muted">
            {plural(info.questionCount, "ejercicio", "ejercicios")}, sobre{" "}
            {info.maxScore} puntos, pesa {info.weight}% de la nota final
          </span>
        </div>
        <h1>{info.title}</h1>
      </header>

      {grade ? (
        <section className="panel stack">
          <div className="row spread">
            <h2>Tu nota</h2>
            <div className="grade">
              {grade.score}
              <span className="small muted"> / {info.maxScore}</span>
            </div>
          </div>
          {grade.feedback && <p className="prose">{grade.feedback}</p>}
        </section>
      ) : (
        submission && (
          <Notice ok>
            Entregaste el {new Date(submission.submittedAt).toLocaleDateString("es")}.
            Todavía no tiene nota: el profe la califica a mano.
          </Notice>
        )
      )}

      {viewer.canGrade && (
        <Notice ok>
          Así lo ven los estudiantes. Sus respuestas se califican en la pestaña
          Entregas del curso.
        </Notice>
      )}

      {instructions && <p className="prose">{instructions}</p>}

      {viewer.lockedReason ? (
        <Notice>{viewer.lockedReason}.</Notice>
      ) : questions.length === 0 ? (
        <p className="muted">Esta evaluación todavía no tiene ejercicios.</p>
      ) : readOnly ? (
        <ol className="exercises">
          {questions.map((question, index) => (
            <li key={index} className="exercise">
              <span className="exercise-prompt">{question}</span>
              {submission && (
                <p className="answer" lang="ru">
                  {submission.answers[index] || (
                    <span className="muted">Sin respuesta</span>
                  )}
                </p>
              )}
            </li>
          ))}
        </ol>
      ) : (
        <AnswerForm assessment={assessment.data} onSaved={assessment.reload} />
      )}

      <Link href={`/cursos/${id}`} className="btn">
        Volver al curso
      </Link>
    </main>
  );
}

export default function AssessmentPage() {
  return (
    <Guard>
      <AssessmentView />
    </Guard>
  );
}
