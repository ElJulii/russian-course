import type {
  AssessmentType,
  CourseStatus,
  EnrollmentStatus,
  PartOfSpeech,
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
  QUIZ: "Test",
  EXAM: "Examen",
};

export const PARTS_OF_SPEECH: Record<PartOfSpeech, string> = {
  noun: "sustantivo",
  verb: "verbo",
  adj: "adjetivo",
  adv: "adverbio",
  pron: "pronombre",
  prep: "preposición",
  conj: "conjunción",
  part: "partícula",
  num: "numeral",
  interj: "interjección",
  pred: "predicativo",
};

export const ASPECTS = {
  imperf: "imperfectivo",
  perf: "perfectivo",
  both: "ambos aspectos",
} as const;

// Estado de una evaluación para el estudiante: su mejor nota hasta ahora.
export function assessmentState(a: { maxScore: number; bestScore: number | null }) {
  return a.bestScore === null ? "Sin responder" : `${a.bestScore} / ${a.maxScore}`;
}

export const plural = (n: number, one: string, many: string) =>
  `${n} ${n === 1 ? one : many}`;
