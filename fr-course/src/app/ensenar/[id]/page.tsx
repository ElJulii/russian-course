"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { AssessmentsTab } from "@/components/manage/AssessmentsTab";
import { GradebookTab } from "@/components/manage/GradebookTab";
import { LessonsTab } from "@/components/manage/LessonsTab";
import { StatsTab } from "@/components/manage/StatsTab";
import { Guard, Loading, Notice, Roundel, lineStyle, useAction } from "@/components/ui";
import { api, type CourseDetail } from "@/lib/api";
import { COURSE_STATUS, plural } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

const TABS = ["Estaciones", "Evaluaciones", "Notas", "Cifras"] as const;

function Manage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const course = useApi<CourseDetail>(`/courses/${id}`);
  const action = useAction();
  const [tab, setTab] = useState<(typeof TABS)[number]>("Estaciones");
  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!course.data) {
    return (
      <main className="shell page">
        <Loading loading={course.loading} error={course.error} />
      </main>
    );
  }
  if (!course.data.viewer.canManage) {
    return (
      <main className="shell page">
        <Notice>Solo la administración gestiona los cursos.</Notice>
      </main>
    );
  }

  const { status, level, title, lessons, _count } = course.data;

  const change = (path: string, method = "POST") =>
    action.run(async () => {
      await api(`/courses/${id}${path}`, { method });
      course.reload();
    });

  const remove = () =>
    action.run(async () => {
      await api(`/courses/${id}`, { method: "DELETE" });
      router.push("/ensenar");
    });

  return (
    <main
      className="shell page stack"
      style={{ ...lineStyle(level), "--gap": "1.75rem" } as CSSProperties}
    >
      <Link href="/ensenar" className="small">
        Cursos
      </Link>

      <header className="course-head">
        <Roundel level={level} large />
        <div className="stack">
          <div className="row">
            <span className={status === "PUBLISHED" ? "chip chip-solid" : "chip chip-sun"}>
              {COURSE_STATUS[status]}
            </span>
            <span className="small muted">
              {plural(_count.enrollments, "viajero", "viajeros")}
            </span>
          </div>
          <h1>{title}</h1>
          <div className="row">
            {status === "PUBLISHED" ? (
              <button
                className="btn"
                disabled={action.busy}
                onClick={() => change("/archive")}
              >
                Archivar
              </button>
            ) : (
              <button
                className="btn btn-primary"
                disabled={action.busy}
                onClick={() => change("/publish")}
              >
                {status === "ARCHIVED" ? "Volver a publicar" : "Publicar"}
              </button>
            )}
            <Link href={`/cursos/${id}`} className="btn btn-quiet">
              Ver como estudiante
            </Link>
            {confirmDelete ? (
              <>
                <button
                  className="btn btn-quiet btn-danger"
                  disabled={action.busy}
                  onClick={remove}
                >
                  Sí, eliminar el curso
                </button>
                <button className="btn btn-quiet" onClick={() => setConfirmDelete(false)}>
                  Conservarlo
                </button>
              </>
            ) : (
              <button
                className="btn btn-quiet btn-danger"
                onClick={() => setConfirmDelete(true)}
              >
                Eliminar
              </button>
            )}
          </div>
        </div>
      </header>

      <Notice>{action.error}</Notice>

      <div className="tabs" role="group" aria-label="Secciones del curso">
        {TABS.map((name) => (
          <button
            key={name}
            aria-pressed={tab === name}
            className="chip filter"
            onClick={() => setTab(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {tab === "Estaciones" && (
        <LessonsTab courseId={id} lessons={lessons} reload={course.reload} />
      )}
      {tab === "Evaluaciones" && <AssessmentsTab courseId={id} lessons={lessons} />}
      {tab === "Notas" && <GradebookTab courseId={id} />}
      {tab === "Cifras" && <StatsTab courseId={id} />}
    </main>
  );
}

export default function ManagePage() {
  return (
    <Guard roles={["ADMIN"]}>
      <Manage />
    </Guard>
  );
}
