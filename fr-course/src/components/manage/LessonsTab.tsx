"use client";

import { useState } from "react";
import { Notice, useAction } from "@/components/ui";
import { api, type Lesson, type LessonOutline } from "@/lib/api";

const EMPTY = { title: "", content: "", durationMinutes: 15 };

function LessonForm({
  courseId,
  lesson,
  onDone,
}: {
  courseId: string;
  lesson?: Lesson;
  onDone: () => void;
}) {
  const action = useAction();
  const [form, setForm] = useState(
    lesson
      ? {
          title: lesson.title,
          content: lesson.content,
          durationMinutes: lesson.durationMinutes,
        }
      : EMPTY,
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    void action.run(async () => {
      await api(
        lesson
          ? `/courses/${courseId}/lessons/${lesson.id}`
          : `/courses/${courseId}/lessons`,
        { method: lesson ? "PATCH" : "POST", body: form },
      );
      onDone();
    });
  };

  return (
    <form className="panel stack" onSubmit={submit}>
      <h3>{lesson ? `Editar estación ${lesson.order}` : "Nueva estación"}</h3>
      <div className="form-grid">
        <label className="field" style={{ gridColumn: "span 2" }}>
          <span>Título</span>
          <input
            className="input"
            required
            minLength={3}
            maxLength={120}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Duración en minutos</span>
          <input
            className="input"
            type="number"
            min={0}
            max={600}
            value={form.durationMinutes}
            onChange={(e) =>
              setForm({ ...form, durationMinutes: Number(e.target.value) })
            }
          />
        </label>
      </div>
      <label className="field">
        <span>Contenido</span>
        <textarea
          className="input"
          required
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
      </label>
      <Notice>{action.error}</Notice>
      <div className="row">
        <button className="btn btn-primary" disabled={action.busy}>
          {lesson ? "Guardar cambios" : "Añadir estación"}
        </button>
        <button type="button" className="btn btn-quiet" onClick={onDone}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export function LessonsTab({
  courseId,
  lessons,
  reload,
}: {
  courseId: string;
  lessons: LessonOutline[];
  reload: () => void;
}) {
  const action = useAction();
  // "new" abre el formulario vacío; una lección abre el de edición.
  const [editing, setEditing] = useState<Lesson | "new" | null>(null);

  const move = (index: number, delta: number) => {
    const ids = lessons.map((l) => l.id);
    [ids[index], ids[index + delta]] = [ids[index + delta], ids[index]];
    void action.run(async () => {
      await api(`/courses/${courseId}/lessons/order`, {
        method: "PUT",
        body: { lessonIds: ids },
      });
      reload();
    });
  };

  const edit = (lessonId: string) =>
    action.run(async () => {
      setEditing(await api<Lesson>(`/courses/${courseId}/lessons/${lessonId}`));
    });

  const remove = (lessonId: string) =>
    action.run(async () => {
      await api(`/courses/${courseId}/lessons/${lessonId}`, { method: "DELETE" });
      reload();
    });

  const closeForm = () => {
    setEditing(null);
    reload();
  };

  return (
    <div className="stack">
      <Notice>{action.error}</Notice>

      {lessons.length === 0 && editing !== "new" && (
        <p className="muted">
          Esta línea no tiene estaciones. Añade al menos una para poder publicarla.
        </p>
      )}

      <ol className="journey">
        {lessons.map((lesson, index) => (
          <li key={lesson.id} className="station">
            <span className="station-dot" aria-hidden>
              {lesson.order}
            </span>
            <span>
              <span className="station-title">{lesson.title}</span>{" "}
              <span className="small muted">{lesson.durationMinutes} min</span>
            </span>
            <span className="row">
              <button
                className="btn btn-quiet"
                aria-label={`Subir ${lesson.title}`}
                disabled={index === 0 || action.busy}
                onClick={() => move(index, -1)}
              >
                ↑
              </button>
              <button
                className="btn btn-quiet"
                aria-label={`Bajar ${lesson.title}`}
                disabled={index === lessons.length - 1 || action.busy}
                onClick={() => move(index, 1)}
              >
                ↓
              </button>
              <button
                className="btn btn-quiet"
                disabled={action.busy}
                onClick={() => edit(lesson.id)}
              >
                Editar
              </button>
              <button
                className="btn btn-quiet btn-danger"
                disabled={action.busy}
                onClick={() => remove(lesson.id)}
              >
                Quitar
              </button>
            </span>
          </li>
        ))}
      </ol>

      {editing ? (
        <LessonForm
          key={editing === "new" ? "new" : editing.id}
          courseId={courseId}
          lesson={editing === "new" ? undefined : editing}
          onDone={closeForm}
        />
      ) : (
        <button className="btn btn-sun" onClick={() => setEditing("new")}>
          Añadir estación
        </button>
      )}
    </div>
  );
}
