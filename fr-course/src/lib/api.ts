const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
const SESSION_HINT = "poyejali.session";

export type Role = "STUDENT" | "INSTRUCTOR" | "ADMIN";
export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type CourseStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export type EnrollmentStatus = "ACTIVE" | "COMPLETED" | "DROPPED";
export type AssessmentType = "QUIZ" | "ASSIGNMENT" | "EXAM";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  // Nombre completo para mostrar.
  name: string;
  role: Role;
  isActive?: boolean;
  // false en las cuentas que solo entran con Google; solo viene en la sesión propia.
  hasPassword?: boolean;
}

export interface Page<T> {
  data: T[];
  meta: { total: number; page: number; limit: number; totalPages: number };
}

export interface CourseSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: Level;
  status: CourseStatus;
  _count: { lessons: number; enrollments: number };
}

export interface Instructor {
  id: string;
  name: string;
}

// Curso en el que un profe tiene estudiantes que evaluar.
export interface TeachingCourse {
  id: string;
  title: string;
  level: Level;
  status: CourseStatus;
  students: number;
  pendingReview: number;
}

export interface LessonOutline {
  id: string;
  title: string;
  order: number;
  durationMinutes: number;
}

export interface Lesson extends LessonOutline {
  content: string;
}

export interface CourseDetail extends CourseSummary {
  lessons: LessonOutline[];
  viewer: {
    // Editar el curso (admin) y revisar entregas (profe o admin).
    canManage: boolean;
    canGrade: boolean;
    enrollment: {
      id: string;
      status: EnrollmentStatus;
      // Profe que el estudiante eligió para que lo evalúe.
      evaluator: Instructor;
      completedLessonIds: string[];
    } | null;
  };
}

export interface Progress {
  completedLessons: number;
  totalLessons: number;
  percent: number;
}

export interface MyEnrollment {
  id: string;
  status: EnrollmentStatus;
  evaluator: string;
  course: {
    id: string;
    title: string;
    level: Level;
    status: CourseStatus;
  };
  progress: Progress;
}

export interface Assessment {
  id: string;
  title: string;
  type: AssessmentType;
  maxScore: number;
  weight: number;
  dueDate: string | null;
  lessonId: string | null;
  // Ejercicios que se responden en la plataforma; 0 si se evalúa por fuera.
  questionCount: number;
}

// Lo que ve cada quien en el listado: el estudiante, el estado de su entrega;
// el profe, cuántas entregas esperan nota.
export interface StudentAssessment extends Assessment {
  submittedAt: string | null;
  score: number | null;
}

export interface ManagedAssessment extends Assessment {
  submitted: number;
  pendingReview: number;
}

export interface Submission {
  answers: string[];
  submittedAt: string;
}

export interface GradeResult {
  score: number;
  feedback: string | null;
  gradedAt: string;
}

export interface AssessmentDetail extends Assessment {
  instructions: string | null;
  questions: string[];
  course: { id: string; title: string; level: Level };
  lesson: { id: string; title: string; order: number } | null;
  viewer: {
    canGrade: boolean;
    lockedReason: string | null;
    submission: Submission | null;
    grade: GradeResult | null;
  };
}

export interface SubmissionInbox {
  assessment: {
    id: string;
    title: string;
    type: AssessmentType;
    maxScore: number;
    instructions: string | null;
    questions: string[];
  };
  entries: {
    enrollmentId: string;
    student: { id: string; name: string; email: string };
    submission: Submission | null;
    grade: GradeResult | null;
  }[];
}

export interface GradeSummary {
  finalGrade: number;
  currentAverage: number | null;
  gradedWeight: number;
  totalWeight: number;
  passed: boolean;
}

export interface ReportCard {
  enrollmentId: string;
  status: EnrollmentStatus;
  course: { id: string; title: string; level: Level };
  assessments: (Assessment & {
    score: number | null;
    feedback: string | null;
    submittedAt: string | null;
  })[];
  summary: GradeSummary;
}

export interface Gradebook {
  assessments: Assessment[];
  students: (GradeSummary & {
    rank: number;
    enrollmentId: string;
    status: EnrollmentStatus;
    student: { id: string; name: string; email: string };
    evaluator: Instructor;
    scores: Record<string, number | null>;
    // Evaluaciones que el estudiante ya entregó.
    submitted: string[];
  })[];
  classSummary: {
    students: number;
    averageFinalGrade: number | null;
    passed: number;
    passingGrade: number;
  };
}

export interface CourseStats {
  enrollments: {
    active: number;
    completed: number;
    dropped: number;
    completionRate: number | null;
  };
  totalLessons: number;
  lessonCompletion: { id: string; title: string; order: number; completedBy: number }[];
  assessments: {
    id: string;
    title: string;
    graded: number;
    avgPercent: number | null;
    minPercent: number | null;
    maxPercent: number | null;
    passRate: number | null;
  }[];
}

// Un estudiante que el profe evalúa, en uno de sus cursos.
export interface EvaluatedStudent {
  id: string;
  status: EnrollmentStatus;
  student: { id: string; name: string; email: string };
  evaluator: Instructor;
  course: { id: string; title: string; level: Level };
  progress: Progress;
  // Ejercicios y exámenes: cuántos hay, cuántos entregó y cuántos esperan nota.
  work: { total: number; submitted: number; graded: number; pendingReview: number };
}

export interface RosterEntry {
  id: string;
  status: EnrollmentStatus;
  student: { id: string; name: string; email: string };
  progress: Progress;
}

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    // Código de la API para los errores que la interfaz trata aparte.
    readonly code?: string,
  ) {
    super(message);
  }
}

// La sesión vive en una cookie httpOnly que JavaScript no puede leer. Esta
// marca solo recuerda si vale la pena preguntarle a la API quién ha entrado;
// no da acceso a nada.
export const sessionHint = {
  has: () => typeof window !== "undefined" && localStorage.getItem(SESSION_HINT) === "1",
  set: () => localStorage.setItem(SESSION_HINT, "1"),
  clear: () => {
    localStorage.removeItem(SESSION_HINT);
    // Token que versiones anteriores guardaban aquí.
    localStorage.removeItem("poyejali.token");
  },
};

export async function api<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(API_URL + path, {
      method: options.method ?? "GET",
      // Envía y recibe la cookie de sesión aunque la API esté en otro puerto.
      credentials: "include",
      headers: {
        ...(options.body !== undefined && { "Content-Type": "application/json" }),
      },
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });
  } catch {
    throw new ApiError(
      "No hay conexión con el servidor. Revisa que la API esté encendida.",
      0,
    );
  }
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = Array.isArray(data?.message)
      ? data.message.join(". ")
      : (data?.message ?? "Algo falló. Intenta de nuevo.");
    throw new ApiError(message, response.status, data?.code);
  }
  return data as T;
}

export const errorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Algo falló. Intenta de nuevo.";
