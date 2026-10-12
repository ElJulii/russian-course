"use client";

import { useState } from "react";
import { Loading, Meter, Notice, useAction } from "@/components/ui";
import {
  api,
  type AssessmentDetail,
  type AssessmentType,
  type LessonOutline,
  type ManagedAssessment,
} from "@/lib/api";
import { ASSESSMENT_TYPES } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

const EMPTY = {
  title: "",
  type: "QUIZ" as AssessmentType,
  maxScore: 100,
  weight: 20,
  lessonId: "",
  instructions: "",
  // Un ejercicio por línea.
  questions: "",
};

export function AssessmentsTab({
  courseId,
  lessons,
}: {
  courseId: string;
  lessons: LessonOutline[];
}) {
  const assessments = useApi<ManagedAssessment[]>(`/courses/${courseId}/assessments`);
  const action = useAction();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY);

  const used = assessments.data?.reduce((sum, a) => sum + a.weight, 0) ?? 0;

  // El listado no trae los enunciados; se piden al abrir la edición.
  const startEdit = (id: string) =>
    action.run(async () => {
      const a = await api<AssessmentDetail>(`/assessments/${id}`);
      setEditingId(a.id);
      setForm({
        title: a.title,
        type: a.type,
        maxScore: a.maxScore,
        weight: a.weight,
        lessonId: a.lessonId ?? "",
        instructions: a.instructions ?? "",
        questions: a.questions.join("\n"),
      });
    });

  const reset = () => {
    setEditingId(null);
    setForm(EMPTY);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const { lessonId, instructions, questions, ...rest } = form;
    void action.run(async () => {
      await api(
        editingId ? `/assessments/${editingId}` : `/courses/${courseId}/assessments`,
        {
          method: editingId ? "PATCH" : "POST",
          body: {
            ...rest,
            ...(lessonId && { lessonId }),
            ...(instructions.trim() && { instructions: instructions.trim() }),
            questions: questions
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean),
          },
        },
      );
      reset();
      assessments.reload();
    });
  };

  const remove = (id: string) =>
    action.run(async () => {
      await api(`/assessments/${id}`, { method: "DELETE" });
      assessments.reload();
    });

  return (
    <div className="stack" style={{ ["--gap" as string]: "1.5rem" }}>
      <div className="stack" style={{ ["--gap" as string]: "0.4rem" }}>
        <div className="row spread">
          <strong>Peso repartido: {used} de 100</strong>
          <span className="small muted">
            {used === 100
              ? "Completo. Así se puede publicar."
              : "Para publicar, los pesos deben sumar 100."}
          </span>
        </div>
        <Meter percent={Math.min(used, 100)} />
      </div>

      <Loading loading={assessments.loading} error={assessments.error} />
      <Notice>{action.error}</Notice>

      {!!assessments.data?.length && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Evaluación</th>
                <th>Tipo</th>
                <th className="num">Ejercicios</th>
                <th className="num">Nota máxima</th>
                <th className="num">Peso</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {assessments.data.map((a) => (
                <tr key={a.id}>
                  <td style={{ whiteSpace: "normal" }}>{a.title}</td>
                  <td>{ASSESSMENT_TYPES[a.type]}</td>
                  <td className="num">{a.questionCount || "—"}</td>
                  <td className="num">{a.maxScore}</td>
                  <td className="num">{a.weight}%</td>
                  <td>
                    <span className="row" style={{ justifyContent: "flex-end" }}>
                      <button
                        className="btn btn-quiet"
                        disabled={action.busy}
                        onClick={() => startEdit(a.id)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-quiet btn-danger"
                        disabled={action.busy}
                        onClick={() => remove(a.id)}
                      >
                        Quitar
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <form className="panel stack" onSubmit={submit}>
        <h3>{editingId ? "Editar evaluación" : "Nueva evaluación"}</h3>
        <div className="form-grid">
          <label className="field">
            <span>Título</span>
            <input
              className="input"
              required
              minLength={3}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </label>
          <label className="field">
            <span>Tipo</span>
            <select
              className="input"
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value as AssessmentType })
              }
            >
              {Object.entries(ASSESSMENT_TYPES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Nota máxima</span>
            <input
              className="input"
              type="number"
              required
              min={1}
              max={1000}
              step="0.01"
              value={form.maxScore}
              onChange={(e) => setForm({ ...form, maxScore: Number(e.target.value) })}
            />
          </label>
          <label className="field">
            <span>Peso en la nota final (%)</span>
            <input
              className="input"
              type="number"
              required
              min={1}
              max={100}
              step="0.01"
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })}
            />
          </label>
          <label className="field">
            <span>Estación relacionada (opcional)</span>
            <select
              className="input"
              value={form.lessonId}
              onChange={(e) => setForm({ ...form, lessonId: e.target.value })}
            >
              <option value="">Todo el curso</option>
              {lessons.map((lesson) => (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.order}. {lesson.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="field">
          <span>Instrucciones o texto de lectura (opcional)</span>
          <textarea
            className="input"
            maxLength={5000}
            value={form.instructions}
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Ejercicios, uno por línea</span>
          <textarea
            className="input"
            required
            value={form.questions}
            onChange={(e) => setForm({ ...form, questions: e.target.value })}
          />
          <span className="small muted" style={{ fontWeight: 400 }}>
            El estudiante responde cada ejercicio en la plataforma y el profe que
            eligió califica su entrega en la pestaña Entregas.
          </span>
        </label>
        <div className="row">
          <button className="btn btn-primary" disabled={action.busy}>
            {editingId ? "Guardar cambios" : "Añadir evaluación"}
          </button>
          {editingId && (
            <button type="button" className="btn btn-quiet" onClick={reset}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
