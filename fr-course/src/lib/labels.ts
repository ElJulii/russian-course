import type {
  AssessmentType,
  CourseStatus,
  EnrollmentStatus,
  Level,
  Role,
} from "./api";

// Cada nivel es una línea de metro con su color.
export const LEVELS: Record<Level, { name: string; color: string }> = {
  A1: { name: "Desde cero", color: "#E5243B" },
  A2: { name: "Básico", color: "#1FA84A" },
  B1: { name: "Intermedio", color: "#1B6FE0" },
  B2: { name: "Intermedio alto", color: "#F07F1A" },
  C1: { name: "Avanzado", color: "#8A46B0" },
  C2: { name: "Maestría", color: "#7A4B2E" },
};
export const LEVEL_KEYS = Object.keys(LEVELS) as Level[];

export const ROLES: Record<Role, string> = {
  STUDENT: "Estudiante",
  INSTRUCTOR: "Profe",
  ADMIN: "Admin",
};

export const COURSE_STATUS: Record<CourseStatus, string> = {
  DRAFT: "Borrador",
  PUBLISHED: "Publicado",
  ARCHIVED: "Archivado",
};

export const ENROLLMENT_STATUS: Record<EnrollmentStatus, string> = {
  ACTIVE: "En ruta",
  COMPLETED: "Terminado",
  DROPPED: "De baja",
};

export const ASSESSMENT_TYPES: Record<AssessmentType, string> = {
  QUIZ: "Quiz",
  ASSIGNMENT: "Tarea",
  EXAM: "Examen",
};

// Estado de una evaluación para el estudiante: la nota solo existe cuando el
// profe revisa la entrega.
export function assessmentState(a: {
  questionCount: number;
  maxScore: number;
  submittedAt: string | null;
  score: number | null;
}) {
  if (a.score !== null) return `${a.score} / ${a.maxScore}`;
  if (a.submittedAt) return "Entregado, esperando nota";
  return a.questionCount > 0 ? "Sin entregar" : "Pendiente";
}

export const plural = (n: number, one: string, many: string) =>
  `${n} ${n === 1 ? one : many}`;
