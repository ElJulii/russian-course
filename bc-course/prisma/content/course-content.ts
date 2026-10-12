// Contenido de un curso para el seed. Cada lección trae sus ejercicios y el
// curso cierra con un examen final; todo lo califica el profe a mano.
export interface LessonContent {
  title: string;
  durationMinutes: number;
  content: string;
  exercises: string[];
}

export interface CourseContent {
  lessons: LessonContent[];
  exam: { title: string; instructions: string; questions: string[] };
}
