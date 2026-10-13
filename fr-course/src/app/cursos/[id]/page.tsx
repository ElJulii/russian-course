"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Loading, Meter, Notice, Roundel, lineStyle, useAction } from "@/components/ui";
import type { CSSProperties } from "react";
import { api, type CourseDetail, type StudentAssessment } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import {
  ASSESSMENT_TYPES,
  COURSE_STATUS,
  LEVELS,
  assessmentState,
  plural,
} from "@/lib/labels";
import { useApi } from "@/lib/useApi";

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const { user, loading: authLoading } = useAuth();
  const course = useApi<CourseDetail>(authLoading ? null : `/courses/${id}`);
  const action = useAction();
  // Las evaluaciones solo son visibles para quien está en el curso.
  const viewer = course.data?.viewer;
  const inCourse =
    !!viewer &&
    (viewer.canManage || (!!viewer.enrollment && viewer.enrollment.status !== "DROPPED"));
  const assessments = useApi<StudentAssessment[]>(
    inCourse ? `/courses/${id}/assessments` : null,
  );

  if (!course.data || !viewer) {
    return (
      <main className="shell page">
        <Loading loading={course.loading || authLoading} error={course.error} />
      </main>
    );
  }

  const { lessons, ...info } = course.data;
  const answerable = assessments.data?.filter((a) => a.questionCount > 0) ?? [];
  const exam = answerable.find((a) => a.type === "EXAM");
  const enrollment =
    viewer.enrollment?.status === "DROPPED" ? null : viewer.enrollment;
  const done = new Set(enrollment?.completedLessonIds);
  const nextLesson = lessons.find((lesson) => !done.has(lesson.id));
  const percent = lessons.length
    ? Math.round((done.size / lessons.length) * 100)
    : 0;
  const canOpen = viewer.canManage || !!enrollment;
  const minutes = lessons.reduce((sum, l) => sum + l.durationMinutes, 0);

  const enroll = () =>
    action.run(async () => {
      await api(`/courses/${id}/enroll`, { method: "POST" });
      course.reload();
    });
  const drop = () =>
    action.run(async () => {
      await api(`/enrollments/${enrollment!.id}/drop`, { method: "POST" });
      course.reload();
    });

  return (
    <main
      className="shell page stack"
      style={{ ...lineStyle(info.level), "--gap": "2rem" } as CSSProperties}
    >
      <header className="course-head">
        <Roundel level={info.level} large />
        <div className="stack">
          <div className="row">
            <span className="chip">{LEVELS[info.level].name}</span>
            {info.status !== "PUBLISHED" && (
              <span className="chip chip-sun">{COURSE_STATUS[info.status]}</span>
            )}
          </div>
          <h1>{info.title}</h1>
          <p className="lede">{info.description}</p>
          <p className="small muted">
            {plural(lessons.length, "estación", "estaciones")}, unos {minutes}{" "}
            minutos en total. Avanzas a tu ritmo: cada estación tiene un test que
            se corrige solo.
          </p>
        </div>
      </header>

      <Notice>{action.error}</Notice>

      {viewer.canManage ? (
        <div className="row">
          <Link href={`/ensenar/${id}`} className="btn btn-sun">
            Gestionar este curso
          </Link>
        </div>
      ) : enrollment ? (
        <section className="panel stack">
          <div className="row spread">
            <h2>
              {enrollment.status === "COMPLETED"
                ? "Llegaste a la terminal. Молодец!"
                : `Vas en ${done.size} de ${lessons.length}`}
            </h2>
            <span className="cyr">{percent}%</span>
          </div>
          <Meter percent={percent} />
          <div className="row spread">
            {nextLesson ? (
              <Link
                href={`/cursos/${id}/lecciones/${nextLesson.id}`}
                className="btn btn-primary"
              >
                {done.size ? "Seguir el viaje" : "Empezar el viaje"}
              </Link>
            ) : exam && !exam.passed ? (
              <Link
                href={`/cursos/${id}/evaluaciones/${exam.id}`}
                className="btn btn-primary"
              >
                Hacer el examen final
              </Link>
            ) : (
              <Link href="/notas" className="btn">
                Ver mis notas
              </Link>
            )}
            {enrollment.status === "ACTIVE" && (
              <button
                className="btn btn-quiet btn-danger"
                onClick={drop}
                disabled={action.busy}
              >
                Bajarme del curso
              </button>
            )}
          </div>
        </section>
      ) : info.status !== "PUBLISHED" ? (
        <Notice>Este curso ya no recibe viajeros nuevos.</Notice>
      ) : !user ? (
        <div className="row">
          <Link href="/registro" className="btn btn-primary">
            Crear cuenta para subirme
          </Link>
          <Link href="/login" className="btn">
            Ya tengo cuenta
          </Link>
        </div>
      ) : user.role === "STUDENT" ? (
        <div className="row">
          <button className="btn btn-primary" onClick={enroll} disabled={action.busy}>
            {viewer.enrollment ? "Volver a subirme" : "Subirme a esta línea"}
          </button>
        </div>
      ) : null}

      <section className="stack">
        <h2>El recorrido</h2>
        {lessons.length === 0 && (
          <p className="muted">Esta línea todavía no tiene estaciones.</p>
        )}
        <ol className="journey">
          {lessons.map((lesson) => {
            const state = !enrollment
              ? undefined
              : done.has(lesson.id)
                ? "done"
                : lesson.id === nextLesson?.id
                  ? "next"
                  : "locked";
            return (
              <li key={lesson.id} className="station" data-state={state}>
                <span className="station-dot" aria-hidden>
                  {state === "done" ? "✓" : lesson.order}
                </span>
                {canOpen && state !== "locked" ? (
                  <Link
                    href={`/cursos/${id}/lecciones/${lesson.id}`}
                    className="station-title"
                  >
                    {lesson.title}
                  </Link>
                ) : (
                  <span className="station-title">{lesson.title}</span>
                )}
                <span className="small muted">
                  {state === "done"
                    ? "Completada"
                    : state === "next"
                      ? "Aquí sigues"
                      : `${lesson.durationMinutes} min`}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      {answerable.length > 0 && (
        <section className="stack">
          <h2>Tests y examen</h2>
          <p className="muted">
            Son de opción múltiple y se corrigen al momento. Aprobar el test de una
            estación abre la siguiente, y el examen final se abre al completarlas
            todas. Puedes repetirlos las veces que quieras: cuenta tu mejor nota.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Evaluación</th>
                  <th>Tipo</th>
                  <th className="num">Peso</th>
                  {!viewer.canManage && <th>Tu mejor nota</th>}
                </tr>
              </thead>
              <tbody>
                {answerable.map((a) => (
                  <tr key={a.id}>
                    <td style={{ whiteSpace: "normal" }}>
                      <Link href={`/cursos/${id}/evaluaciones/${a.id}`}>{a.title}</Link>
                    </td>
                    <td>{ASSESSMENT_TYPES[a.type]}</td>
                    <td className="num">{a.weight}%</td>
                    {!viewer.canManage && (
                      <td>
                        {a.bestScore === null ? (
                          <span className="muted">{assessmentState(a)}</span>
                        ) : (
                          <span className={a.passed ? "chip chip-sun" : "chip"}>
                            {assessmentState(a)}
                          </span>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}
