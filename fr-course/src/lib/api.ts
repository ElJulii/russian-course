const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
const SESSION_HINT = "poyejali.session";

export type Role = "STUDENT" | "ADMIN";
export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type CourseStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export type EnrollmentStatus = "ACTIVE" | "COMPLETED" | "DROPPED";
export type AssessmentType = "QUIZ" | "EXAM";

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
    // Editar el curso y ver las notas de todos (admin).
    canManage: boolean;
    enrollment: {
      id: string;
      status: EnrollmentStatus;
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
  // Con estación, es su test: aprobarlo la completa.
  lessonId: string | null;
  questionCount: number;
}

// Lo que lleva un estudiante en un test. Puede repetirlo sin límite y cuenta
// su mejor nota.
export interface Standing {
  attempts: number;
  bestScore: number | null;
  passed: boolean;
}

// Lo que ve cada quien en el listado: el estudiante, cómo le va; el admin,
// cuántos estudiantes lo respondieron.
export type StudentAssessment = Assessment & Standing;

export interface ManagedAssessment extends Assessment {
  attempted: number;
}

// Pregunta de opción múltiple. `answer` (índice de la opción correcta) y
// `explanation` solo le llegan al admin; el estudiante los recibe al corregir.
export interface Question {
  prompt: string;
  options: string[];
  answer?: number;
  explanation?: string;
}

export interface AssessmentDetail extends Assessment {
  instructions: string | null;
  questions: Question[];
  course: { id: string; title: string; level: Level };
  lesson: { id: string; title: string; order: number } | null;
  viewer: Standing & {
    canManage: boolean;
    lockedReason: string | null;
  };
}

// Corrección de un intento, pregunta por pregunta.
export interface AttemptResult {
  correct: number;
  total: number;
  score: number;
  maxScore: number;
  passed: boolean;
  passingGrade: number;
  results: {
    chosen: number;
    answer: number;
    isCorrect: boolean;
    explanation: string | null;
  }[];
  // Este intento completó la estación del test.
  lessonCompleted: boolean;
  attempts: number;
  bestScore: number | null;
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
  assessments: (StudentAssessment & { lastAttemptAt: string | null })[];
  summary: GradeSummary;
}

export interface Gradebook {
  assessments: Assessment[];
  students: (GradeSummary & {
    rank: number;
    enrollmentId: string;
    status: EnrollmentStatus;
    student: { id: string; name: string; email: string };
    // Mejor nota en cada evaluación; null si no la ha respondido.
    scores: Record<string, number | null>;
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
      "No hay conexión con el servidor. Try again Later.",
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
