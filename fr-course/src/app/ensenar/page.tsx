"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { Guard, Loading, Meter, Notice, Roundel, useAction } from "@/components/ui";
import {
  api,
  type CourseSummary,
  type EvaluatedStudent,
  type Level,
  type Page,
  type TeachingCourse,
} from "@/lib/api";
import { useAuth } from "@/lib/auth";
import {
  COURSE_STATUS,
  ENROLLMENT_STATUS,
  LEVELS,
  LEVEL_KEYS,
  plural,
} from "@/lib/labels";
import { useApi } from "@/lib/useApi";

function NewCourse() {
  const router = useRouter();
  const action = useAction();
  const [form, setForm] = useState({
    title: "",
    description: "",
    level: "A1" as Level,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    void action.run(async () => {
      const course = await api<CourseSummary>("/courses", {
        method: "POST",
        body: form,
      });
      router.push(`/ensenar/${course.id}`);
    });
  };

  return (
    <form className="panel stack" onSubmit={submit}>
      <h2>Abrir una línea nueva</h2>
      <div className="form-grid">
        <label className="field" style={{ gridColumn: "1 / -1" }}>
          <span>Título</span>
          <input
            className="input"
            required
            minLength={5}
            maxLength={120}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </label>
        <label className="field" style={{ gridColumn: "1 / -1" }}>
          <span>De qué trata</span>
          <textarea
            className="input"
            required
            minLength={20}
            maxLength={2000}
            style={{ minHeight: "5rem" }}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Nivel</span>
          <select
            className="input"
            value={form.level}
            onChange={(e) => setForm({ ...form, level: e.target.value as Level })}
          >
            {LEVEL_KEYS.map((key) => (
              <option key={key} value={key}>
                {key} {LEVELS[key].name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Notice>{action.error}</Notice>
      <button className="btn btn-primary" disabled={action.busy}>
        Crear borrador
      </button>
    </form>
  );
}

const statusChip = (status: CourseSummary["status"]) =>
  status === "PUBLISHED"
    ? "chip chip-solid"
    : status === "DRAFT"
      ? "chip chip-sun"
      : "chip chip-faded";

// Admin: todos los cursos de la plataforma, que solo él crea y edita.
function PlatformCourses() {
  const courses = useApi<Page<CourseSummary>>("/courses/manage?limit=100");
  const [creating, setCreating] = useState(false);

  return (
    <>
      <header className="row spread">
        <div className="stack">
          <h1>Cursos</h1>
          <p className="lede">
            Las líneas de la plataforma. Arma las estaciones y las evaluaciones, y
            publica cuando estén listas.
          </p>
        </div>
        <button className="btn btn-sun" onClick={() => setCreating(!creating)}>
          {creating ? "Cerrar" : "Abrir una línea nueva"}
        </button>
      </header>

      {creating && <NewCourse />}

      <Loading loading={courses.loading} error={courses.error} />

      {courses.data?.data.length === 0 && (
        <div className="empty">
          <h2>Aún no hay líneas</h2>
          <p className="muted">
            Crea el primer curso; nace como borrador y nadie lo ve hasta que lo
            publiques.
          </p>
        </div>
      )}

      {!!courses.data?.data.length && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Estado</th>
                <th className="num">Estaciones</th>
                <th className="num">Viajeros</th>
              </tr>
            </thead>
            <tbody>
              {courses.data.data.map((course) => (
                <tr key={course.id}>
                  <td>
                    <Link
                      href={`/ensenar/${course.id}`}
                      className="row"
                      style={{ flexWrap: "nowrap" }}
                    >
                      <Roundel level={course.level} />
                      <strong>{course.title}</strong>
                    </Link>
                  </td>
                  <td>
                    <span className={statusChip(course.status)}>
                      {COURSE_STATUS[course.status]}
                    </span>
                  </td>
                  <td className="num">{course._count.lessons}</td>
                  <td className="num">
                    {plural(course._count.enrollments, "viajero", "viajeros")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

// Estudiantes que eligieron a este profe: en qué curso va cada uno y qué
// entregas tiene esperando nota.
function StudentList() {
  const students = useApi<EvaluatedStudent[]>("/enrollments/evaluating");

  return (
    <section className="stack">
      <h2>Tus estudiantes</h2>
      <Loading loading={students.loading} error={students.error} />
      {!!students.data?.length && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Curso</th>
                <th>Avance</th>
                <th className="num">Entregas</th>
                <th>Por calificar</th>
              </tr>
            </thead>
            <tbody>
              {students.data.map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong>{row.student.name}</strong>
                    <div className="small muted">{row.student.email}</div>
                  </td>
                  <td>
                    <span className="row" style={{ flexWrap: "nowrap" }}>
                      <Roundel level={row.course.level} />
                      <span>
                        {row.course.title}
                        <div className="small muted">
                          {ENROLLMENT_STATUS[row.status]}
                        </div>
                      </span>
                    </span>
                  </td>
                  <td style={{ minWidth: "9rem" }}>
                    <Meter percent={row.progress.percent} />
                    <span className="small muted">
                      {row.progress.completedLessons} de {row.progress.totalLessons}{" "}
                      estaciones
                    </span>
                  </td>
                  <td className="num">
                    {row.work.submitted} de {row.work.total}
                    <div className="small muted">{row.work.graded} con nota</div>
                  </td>
                  <td>
                    {row.work.pendingReview > 0 ? (
                      <Link href={`/ensenar/${row.course.id}`} className="btn btn-sun">
                        Calificar {row.work.pendingReview}
                      </Link>
                    ) : (
                      <span className="small muted">
                        {row.work.submitted === 0 ? "Aún no entrega nada" : "Al día"}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// Profe: sus estudiantes y los cursos donde lo eligieron para evaluar.
function MyStudents() {
  const courses = useApi<TeachingCourse[]>("/courses/teaching");

  return (
    <>
      <header className="stack">
        <h1>Evaluar</h1>
        <p className="lede">
          Solo ves a los estudiantes que te eligieron. Cuando entregan sus
          ejercicios o su examen final, los calificas aquí.
        </p>
      </header>

      <Loading loading={courses.loading} error={courses.error} />

      {courses.data?.length === 0 && (
        <div className="empty">
          <h2>Todavía nadie te ha elegido</h2>
          <p className="muted">
            Cuando un estudiante se suba a un curso y te elija como profe, lo verás
            aquí.
          </p>
        </div>
      )}

      {!!courses.data?.length && <StudentList />}

      {!!courses.data?.length && <h2>Por curso</h2>}

      {!!courses.data?.length && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Estado</th>
                <th className="num">Tus estudiantes</th>
                <th className="num">Entregas por calificar</th>
              </tr>
            </thead>
            <tbody>
              {courses.data.map((course) => (
                <tr key={course.id}>
                  <td>
                    <Link
                      href={`/ensenar/${course.id}`}
                      className="row"
                      style={{ flexWrap: "nowrap" }}
                    >
                      <Roundel level={course.level} />
                      <strong>{course.title}</strong>
                    </Link>
                  </td>
                  <td>
                    <span className={statusChip(course.status)}>
                      {COURSE_STATUS[course.status]}
                    </span>
                  </td>
                  <td className="num">{course.students}</td>
                  <td className="num">
                    {course.pendingReview > 0 ? (
                      <span className="chip chip-sun">{course.pendingReview}</span>
                    ) : (
                      0
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function Teach() {
  const { user } = useAuth();
  return (
    <main className="shell page stack" style={{ "--gap": "1.75rem" } as CSSProperties}>
      {user?.role === "ADMIN" ? <PlatformCourses /> : <MyStudents />}
    </main>
  );
}

export default function TeachPage() {
  return (
    <Guard roles={["INSTRUCTOR", "ADMIN"]}>
      <Teach />
    </Guard>
  );
}
