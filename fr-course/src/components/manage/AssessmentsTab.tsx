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

const MAX_OPTIONS = 6;

interface QuestionDraft {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

const newQuestion = (): QuestionDraft => ({
  prompt: "",
  options: ["", "", "", ""],
  answer: 0,
  explanation: "",
});

const EMPTY = {
  title: "",
  type: "QUIZ" as AssessmentType,
  maxScore: 10,
  weight: 5,
  lessonId: "",
  instructions: "",
  questions: [newQuestion()],
};

// Editor de una pregunta de opción múltiple: enunciado, opciones (se marca la
// correcta) y la explicación que ve el estudiante al corregir.
function QuestionEditor({
  index,
  question,
  onChange,
  onRemove,
}: {
  index: number;
  question: QuestionDraft;
  onChange: (question: QuestionDraft) => void;
  onRemove?: () => void;
}) {
  const setOption = (i: number, value: string) =>
    onChange({
      ...question,
      options: question.options.map((option, j) => (j === i ? value : option)),
    });
  const removeOption = (i: number) =>
    onChange({
      ...question,
      options: question.options.filter((_, j) => j !== i),
      // La correcta sigue siendo la misma opción aunque cambie de posición.
      answer:
        question.answer === i ? 0 : question.answer > i ? question.answer - 1 : question.answer,
    });

  return (
    <fieldset className="question-editor stack">
      <legend className="row spread">
        <strong>Pregunta {index + 1}</strong>
        {onRemove && (
          <button type="button" className="btn btn-quiet btn-danger" onClick={onRemove}>
            Quitar pregunta
          </button>
        )}
      </legend>
      <label className="field">
        <span>Enunciado</span>
        <textarea
          className="input"
          required
          maxLength={1000}
          style={{ minHeight: "4rem" }}
          value={question.prompt}
          onChange={(e) => onChange({ ...question, prompt: e.target.value })}
        />
      </label>
      <div className="field">
        <span>Opciones (marca la correcta)</span>
        {question.options.map((option, i) => (
          <div key={i} className="option-row">
            <input
              type="radio"
              name={`correct-${index}`}
              checked={question.answer === i}
              onChange={() => onChange({ ...question, answer: i })}
              aria-label={`La opción ${i + 1} es la correcta`}
            />
            <input
              className="input"
              required
              maxLength={300}
              value={option}
              onChange={(e) => setOption(i, e.target.value)}
              aria-label={`Opción ${i + 1} de la pregunta ${index + 1}`}
            />
            {question.options.length > 2 && (
              <button
                type="button"
                className="btn btn-quiet"
                onClick={() => removeOption(i)}
                aria-label={`Quitar la opción ${i + 1}`}
              >
                Quitar
              </button>
            )}
          </div>
        ))}
        {question.options.length < MAX_OPTIONS && (
          <button
            type="button"
            className="btn btn-quiet"
            style={{ justifySelf: "start" }}
            onClick={() => onChange({ ...question, options: [...question.options, ""] })}
          >
            Añadir opción
          </button>
        )}
      </div>
      <label className="field">
        <span>Explicación (opcional)</span>
        <input
          className="input"
          maxLength={1000}
          value={question.explanation}
          onChange={(e) => onChange({ ...question, explanation: e.target.value })}
        />
      </label>
    </fieldset>
  );
}

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

  // El listado no trae las preguntas; se piden al abrir la edición.
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
        questions: a.questions.length
          ? a.questions.map((q) => ({
              prompt: q.prompt,
              options: q.options,
              answer: q.answer ?? 0,
              explanation: q.explanation ?? "",
            }))
          : [newQuestion()],
      });
    });

  const reset = () => {
    setEditingId(null);
    setForm(EMPTY);
  };

  const setQuestion = (index: number, question: QuestionDraft) =>
    setForm({
      ...form,
      questions: form.questions.map((q, i) => (i === index ? question : q)),
    });

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
            questions: questions.map(({ explanation, ...question }) => ({
              ...question,
              ...(explanation.trim() && { explanation: explanation.trim() }),
            })),
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
                <th className="num">Preguntas</th>
                <th className="num">Nota máxima</th>
                <th className="num">Peso</th>
                <th className="num">Respondieron</th>
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
                  <td className="num">{a.attempted}</td>
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
        <p className="small muted">
          Todo es de opción múltiple y se corrige solo. El test de una estación la
          completa cuando el estudiante lo aprueba con 70 %; el examen se abre al
          completar todas las estaciones.
        </p>
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
            <span>Estación de la que es test (opcional)</span>
            <select
              className="input"
              value={form.lessonId}
              onChange={(e) => setForm({ ...form, lessonId: e.target.value })}
            >
              <option value="">Ninguna: todo el curso</option>
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

        {form.questions.map((question, index) => (
          <QuestionEditor
            key={index}
            index={index}
            question={question}
            onChange={(q) => setQuestion(index, q)}
            onRemove={
              form.questions.length > 1
                ? () =>
                    setForm({
                      ...form,
                      questions: form.questions.filter((_, i) => i !== index),
                    })
                : undefined
            }
          />
        ))}
        <button
          type="button"
          className="btn"
          onClick={() => setForm({ ...form, questions: [...form.questions, newQuestion()] })}
        >
          Añadir pregunta
        </button>

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
