"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Loading, Meter, Notice, Roundel, lineStyle, useAction } from "@/components/ui";
import { useState, type CSSProperties } from "react";
import {
  api,
  type CourseDetail,
  type Instructor,
  type StudentAssessment,
} from "@/lib/api";
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
    (viewer.canGrade || (!!viewer.enrollment && viewer.enrollment.status !== "DROPPED"));
  const assessments = useApi<StudentAssessment[]>(
    inCourse ? `/courses/${id}/assessments` : null,
  );

  // Al subirse, el estudiante elige qué profe lo evaluará.
  const [evaluatorId, setEvaluatorId] = useState("");
  const canEnroll =
    !!viewer &&
    user?.role === "STUDENT" &&
    course.data?.status === "PUBLISHED" &&
    (!viewer.enrollment || viewer.enrollment.status === "DROPPED");
  const instructors = useApi<Instructor[]>(canEnroll ? "/users/instructors" : null);

  if (!course.data || !viewer) {
    return (
      <main className="shell page">
        <Loading loading={course.loading || authLoading} error={course.error} />
      </main>
    );
  }

  const { lessons, ...info } = course.data;
  const answerable = assessments.data?.filter((a) => a.questionCount > 0) ?? [];
  const enrollment =
    viewer.enrollment?.status === "DROPPED" ? null : viewer.enrollment;
  const done = new Set(enrollment?.completedLessonIds);
  const nextLesson = lessons.find((lesson) => !done.has(lesson.id));
  const percent = lessons.length
    ? Math.round((done.size / lessons.length) * 100)
    : 0;
  const canOpen = viewer.canGrade || !!enrollment;
  const minutes = lessons.reduce((sum, l) => sum + l.durationMinutes, 0);

  const enroll = () =>
    action.run(async () => {
      await api(`/courses/${id}/enroll`, { method: "POST", body: { evaluatorId } });
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
            minutos en total. Al subirte eliges qué profe te evalúa.
          </p>
        </div>
      </header>

      <Notice>{action.error}</Notice>

      {viewer.canGrade ? (
        <div className="row">
          <Link href={`/ensenar/${id}`} className="btn btn-sun">
            {viewer.canManage ? "Gestionar este curso" : "Calificar a mis estudiantes"}
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
          <p className="small muted">Te evalúa {enrollment.evaluator.name}.</p>
          <div className="row spread">
            {nextLesson ? (
              <Link
                href={`/cursos/${id}/lecciones/${nextLesson.id}`}
                className="btn btn-primary"
              >
                {done.size ? "Seguir el viaje" : "Empezar el viaje"}
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
        <form
          className="panel stack"
          onSubmit={(e) => {
            e.preventDefault();
            void enroll();
          }}
        >
          <h2>Elige quién te evalúa</h2>
          <p className="muted">
            El curso es de la plataforma. El profe que elijas revisará tus ejercicios
            y tu examen final y les pondrá nota.
          </p>
          <Loading loading={instructors.loading} error={instructors.error} />
          {instructors.data?.length === 0 && (
            <Notice>Todavía no hay profes disponibles. Vuelve más tarde.</Notice>
          )}
          {!!instructors.data?.length && (
            <label className="field" style={{ maxWidth: "24rem" }}>
              <span>Profe</span>
              <select
                className="input"
                required
                value={evaluatorId}
                onChange={(e) => setEvaluatorId(e.target.value)}
              >
                <option value="">Elige un profe</option>
                {instructors.data.map((instructor) => (
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.name}
                  </option>
                ))}
              </select>
            </label>
          )}
          <button className="btn btn-primary" disabled={action.busy || !evaluatorId}>
            {viewer.enrollment ? "Volver a subirme" : "Subirme a esta línea"}
          </button>
        </form>
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
          <h2>Ejercicios y examen</h2>
          <p className="muted">
            Respondes aquí mismo y el profe califica cada entrega a mano. El examen
            final se abre al completar todas las estaciones.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Evaluación</th>
                  <th>Tipo</th>
                  <th className="num">Peso</th>
                  {!viewer.canGrade && <th>Estado</th>}
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
                    {!viewer.canGrade && (
                      <td>
                        {a.score === null ? (
                          <span className="muted">{assessmentState(a)}</span>
                        ) : (
                          <strong>{assessmentState(a)}</strong>
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
