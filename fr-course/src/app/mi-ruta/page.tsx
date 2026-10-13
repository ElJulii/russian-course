"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Guard, Loading, Meter, Roundel, lineStyle } from "@/components/ui";
import type { MyEnrollment } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { ENROLLMENT_STATUS } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

function MyRoute() {
  const { user } = useAuth();
  const enrollments = useApi<MyEnrollment[]>("/enrollments/me");

  return (
    <main className="shell page stack" style={{ "--gap": "1.75rem" } as CSSProperties}>
      <header className="stack">
        <h1>Mi ruta</h1>
        <p className="lede">
          {user?.name.split(" ")[0]}, estas son las líneas en las que vas montado.
        </p>
      </header>

      <Loading loading={enrollments.loading} error={enrollments.error} />

      {enrollments.data?.length === 0 && (
        <div className="empty">
          <h2>Todavía no te has subido a ninguna línea</h2>
          <p className="muted">Elige un curso y empieza por la primera estación.</p>
          <Link href="/#lineas" className="btn btn-primary">
            Ver las líneas
          </Link>
        </div>
      )}

      {enrollments.data?.map((enrollment) => (
        <article
          key={enrollment.id}
          className="panel stack"
          style={lineStyle(enrollment.course.level)}
        >
          <div className="row">
            <Roundel level={enrollment.course.level} />
            <div style={{ flex: 1, minWidth: "12rem" }}>
              <h3>{enrollment.course.title}</h3>
            </div>
            <span
              className={
                enrollment.status === "COMPLETED"
                  ? "chip chip-sun"
                  : enrollment.status === "DROPPED"
                    ? "chip chip-faded"
                    : "chip"
              }
            >
              {ENROLLMENT_STATUS[enrollment.status]}
            </span>
          </div>
          <Meter percent={enrollment.progress.percent} />
          <div className="row spread">
            <span className="small">
              {enrollment.progress.completedLessons} de{" "}
              {enrollment.progress.totalLessons} estaciones
            </span>
            <Link href={`/cursos/${enrollment.course.id}`} className="btn btn-quiet">
              {enrollment.status === "ACTIVE" ? "Seguir el viaje" : "Ver el curso"}
            </Link>
          </div>
        </article>
      ))}
    </main>
  );
}

export default function MyRoutePage() {
  return (
    <Guard roles={["STUDENT"]}>
      <MyRoute />
    </Guard>
  );
}
