"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef, useState, type CSSProperties } from "react";
import { Guard, Loading, Notice, lineStyle, useAction } from "@/components/ui";
import {
  api,
  type AssessmentDetail,
  type AttemptResult,
  type CourseDetail,
  type Question,
} from "@/lib/api";
import { ASSESSMENT_TYPES, plural } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

// Una pregunta con sus opciones. Sin corregir, se elige una; corregida (con
// `answer`), marca la correcta y, si falló, la que eligió el estudiante.
function QuestionCard({
  index,
  question,
  chosen,
  answer,
  explanation,
  onChoose,
}: {
  index: number;
  question: Question;
  chosen?: number;
  answer?: number;
  explanation?: string | null;
  onChoose?: (option: number) => void;
}) {
  const reviewed = answer !== undefined;
  return (
    <li className="exercise">
      <fieldset className="question">
        <legend className="exercise-prompt">{question.prompt}</legend>
        <div className="options">
          {question.options.map((option, i) => {
            const state = !reviewed
              ? undefined
              : i === answer
                ? "correct"
                : i === chosen
                  ? "wrong"
                  : undefined;
            return (
              <label key={i} className="option" data-state={state}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  checked={chosen === i}
                  disabled={reviewed}
                  onChange={() => onChoose?.(i)}
                />
                <span>{option}</span>
                {state === "correct" && <strong className="small">Correcta</strong>}
                {state === "wrong" && <strong className="small">Tu respuesta</strong>}
              </label>
            );
          })}
        </div>
        {reviewed && explanation && <p className="explanation">{explanation}</p>}
      </fieldset>
    </li>
  );
}

function Quiz({
  assessment,
  courseId,
  onGraded,
}: {
  assessment: AssessmentDetail;
  courseId: string;
  onGraded: () => void;
}) {
  const { questions, lesson } = assessment;
  const course = useApi<CourseDetail>(`/courses/${courseId}`);
  const action = useAction();
  const top = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<(number | undefined)[]>(() =>
    questions.map(() => undefined),
  );
  const [result, setResult] = useState<AttemptResult | null>(null);
  const missing = answers.filter((a) => a === undefined).length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    void action.run(async () => {
      setResult(
        await api<AttemptResult>(`/assessments/${assessment.id}/attempts`, {
          method: "POST",
          body: { answers },
        }),
      );
      onGraded();
      course.reload();
      top.current?.scrollIntoView({ block: "start" });
    });
  };

  const retry = () => {
    setAnswers(questions.map(() => undefined));
    setResult(null);
    top.current?.scrollIntoView({ block: "start" });
  };

  const next = lesson && course.data?.lessons.find((l) => l.order === lesson.order + 1);
  const lessonDone =
    !!lesson &&
    (!!result?.lessonCompleted ||
      !!course.data?.viewer.enrollment?.completedLessonIds.includes(lesson.id));

  return (
    <div ref={top} className="stack quiz" style={{ "--gap": "1.5rem" } as CSSProperties}>
      {result && (
        <section className="panel stack" aria-live="polite">
          <div className="row spread">
            <h2>{result.passed ? "Aprobado. Молодец!" : "Todavía no"}</h2>
            <div className="grade">
              {result.score}
              <span className="small muted"> / {result.maxScore}</span>
            </div>
          </div>
          <p>
            Acertaste {result.correct} de {result.total}.{" "}
            {result.passed
              ? result.lessonCompleted
                ? "Con esto completaste la estación."
                : "Puedes repetirlo si quieres subir tu nota."
              : `Se aprueba con ${result.passingGrade} %. Revisa abajo en qué fallaste y vuelve a intentarlo: cuenta tu mejor nota.`}
          </p>
          <div className="row">
            {result.passed && next && lessonDone && (
              <Link href={`/cursos/${courseId}/lecciones/${next.id}`} className="btn btn-primary">
                Siguiente estación: {next.title}
              </Link>
            )}
            {result.passed && (!lesson || (lessonDone && !next)) && (
              <Link
                href={lesson ? `/cursos/${courseId}` : "/notas"}
                className="btn btn-primary"
              >
                {lesson ? "Fin de la línea. Volver al curso" : "Ver mis notas"}
              </Link>
            )}
            <button
              type="button"
              className={result.passed ? "btn" : "btn btn-primary"}
              onClick={retry}
            >
              Repetir el test
            </button>
            {!result.passed && lesson && (
              <Link href={`/cursos/${courseId}/lecciones/${lesson.id}`} className="btn">
                Repasar la estación
              </Link>
            )}
          </div>
        </section>
      )}

      <form className="stack" style={{ "--gap": "1.5rem" } as CSSProperties} onSubmit={submit}>
        <ol className="exercises">
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              index={index}
              question={question}
              chosen={answers[index]}
              answer={result?.results[index].answer}
              explanation={result?.results[index].explanation}
              onChoose={(option) =>
                setAnswers(answers.map((a, i) => (i === index ? option : a)))
              }
            />
          ))}
        </ol>
        <Notice>{action.error}</Notice>
        {!result && (
          <div className="row">
            <button className="btn btn-primary" disabled={action.busy || missing > 0}>
              Corregir mis respuestas
            </button>
            {missing > 0 && (
              <span className="small muted">
                Te {missing === 1 ? "falta" : "faltan"}{" "}
                {plural(missing, "pregunta", "preguntas")} por responder.
              </span>
            )}
          </div>
        )}
      </form>
    </div>
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
            {plural(info.questionCount, "pregunta", "preguntas")}, pesa {info.weight}% de
            la nota final
          </span>
        </div>
        <h1>{info.title}</h1>
        {!viewer.canManage && viewer.attempts > 0 && (
          <p>
            <span className={viewer.passed ? "chip chip-sun" : "chip"}>
              Tu mejor nota: {viewer.bestScore} / {info.maxScore}
            </span>{" "}
            <span className="small muted">
              en {plural(viewer.attempts, "intento", "intentos")}
            </span>
          </p>
        )}
      </header>

      {viewer.canManage && (
        <Notice ok>
          Así lo ven los estudiantes, pero con la respuesta correcta y la explicación
          a la vista. Se edita en la pestaña Evaluaciones del curso.
        </Notice>
      )}

      {instructions && <p className="prose">{instructions}</p>}

      {viewer.lockedReason ? (
        <Notice>{viewer.lockedReason}.</Notice>
      ) : questions.length === 0 ? (
        <p className="muted">Esta evaluación todavía no tiene preguntas.</p>
      ) : viewer.canManage ? (
        <ol className="exercises">
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              index={index}
              question={question}
              answer={question.answer}
              explanation={question.explanation}
            />
          ))}
        </ol>
      ) : (
        <Quiz assessment={assessment.data} courseId={id} onGraded={assessment.reload} />
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
