"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { CSSProperties } from "react";
import { Guard, Loading, Notice, lineStyle, useAction } from "@/components/ui";
import {
  api,
  type CourseDetail,
  type Lesson,
  type StudentAssessment,
} from "@/lib/api";
import { assessmentState, plural } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

function LessonView() {
  const { id, lessonId } = useParams<{ id: string; lessonId: string }>();
  const course = useApi<CourseDetail>(`/courses/${id}`);
  const lesson = useApi<Lesson>(`/courses/${id}/lessons/${lessonId}`);
  const assessments = useApi<StudentAssessment[]>(`/courses/${id}/assessments`);
  const action = useAction();

  if (!course.data || !lesson.data) {
    return (
      <main className="shell page stack">
        <Loading
          loading={course.loading || lesson.loading}
          error={lesson.error ?? course.error}
        />
        {lesson.error && (
          <Link href={`/cursos/${id}`} className="btn">
            Volver al curso
          </Link>
        )}
      </main>
    );
  }

  const { lessons, viewer, level, title } = course.data;
  const enrollment = viewer.enrollment;
  const isDone = !!enrollment?.completedLessonIds.includes(lessonId);
  const next = lessons.find((l) => l.order === lesson.data!.order + 1);
  const exercises =
    assessments.data?.filter((a) => a.lessonId === lessonId && a.questionCount > 0) ??
    [];

  const complete = () =>
    action.run(async () => {
      await api(`/courses/${id}/lessons/${lessonId}/complete`, { method: "POST" });
      course.reload();
    });

  return (
    <main
      className="shell page stack"
      style={{ ...lineStyle(level), "--gap": "1.75rem" } as CSSProperties}
    >
      <Link href={`/cursos/${id}`} className="small">
        {title}
      </Link>
      <header className="stack">
        <span className="chip chip-solid">
          Estación {lesson.data.order} de {lessons.length}
        </span>
        <h1>{lesson.data.title}</h1>
      </header>

      <article className="lesson-body">{lesson.data.content}</article>

      {exercises.map((exercise) => (
        <section key={exercise.id} className="panel stack">
          <div className="row spread">
            <h2>Ejercicios de esta estación</h2>
            {!viewer.canGrade && (
              <span className={exercise.score === null ? "chip" : "chip chip-sun"}>
                {assessmentState(exercise)}
              </span>
            )}
          </div>
          <p className="muted">
            {plural(exercise.questionCount, "ejercicio", "ejercicios")}. Valen{" "}
            {exercise.weight}% de tu nota final y los califica el profe cuando los
            entregas.
          </p>
          <Link
            href={`/cursos/${id}/evaluaciones/${exercise.id}`}
            className="btn btn-sun"
          >
            {viewer.canGrade
              ? "Ver los ejercicios"
              : exercise.score !== null
                ? "Ver mi nota"
                : exercise.submittedAt
                  ? "Revisar mi entrega"
                  : "Hacer los ejercicios"}
          </Link>
        </section>
      ))}

      <Notice>{action.error}</Notice>

      <div className="row">
        {enrollment && !isDone && enrollment.status !== "DROPPED" && (
          <button className="btn btn-primary" onClick={complete} disabled={action.busy}>
            Marcar como completada
          </button>
        )}
        {isDone && <span className="chip chip-sun">Completada</span>}
        {next && (isDone || viewer.canGrade) && (
          <Link href={`/cursos/${id}/lecciones/${next.id}`} className="btn">
            Siguiente estación: {next.title}
          </Link>
        )}
        {isDone && !next && (
          <Link href={`/cursos/${id}`} className="btn btn-sun">
            Fin de la línea. Volver al curso
          </Link>
        )}
      </div>
    </main>
  );
}

export default function LessonPage() {
  return (
    <Guard>
      <LessonView />
    </Guard>
  );
}
