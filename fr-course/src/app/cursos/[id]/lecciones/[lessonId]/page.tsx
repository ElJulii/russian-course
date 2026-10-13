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
  const tests =
    assessments.data?.filter((a) => a.lessonId === lessonId && a.questionCount > 0) ??
    [];
  // Con test, la estación se completa al aprobarlo; sin test, a mano.
  const canMarkDone =
    !!enrollment &&
    enrollment.status !== "DROPPED" &&
    !isDone &&
    !!assessments.data &&
    tests.every((test) => test.passed);

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

      {tests.map((test) => (
        <section key={test.id} className="panel stack">
          <div className="row spread">
            <h2>Test de esta estación</h2>
            {!viewer.canManage && (
              <span className={test.passed ? "chip chip-sun" : "chip"}>
                {assessmentState(test)}
              </span>
            )}
          </div>
          <p className="muted">
            {plural(test.questionCount, "pregunta", "preguntas")} de opción múltiple
            que se corrigen al momento. Aprobarlo con 70 % completa la estación y
            abre la siguiente; puedes repetirlo las veces que quieras y cuenta tu
            mejor nota.
          </p>
          <Link href={`/cursos/${id}/evaluaciones/${test.id}`} className="btn btn-sun">
            {viewer.canManage
              ? "Ver el test"
              : test.attempts > 0
                ? "Repetir el test"
                : "Hacer el test"}
          </Link>
        </section>
      ))}

      <Notice>{action.error}</Notice>

      <div className="row">
        {canMarkDone && (
          <button className="btn btn-primary" onClick={complete} disabled={action.busy}>
            Marcar como completada
          </button>
        )}
        {isDone && <span className="chip chip-sun">Completada</span>}
        {next && (isDone || viewer.canManage) && (
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
