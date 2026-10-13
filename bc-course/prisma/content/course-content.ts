import type { Question } from '../../src/grades/grade-calc';

// Texto de una estación. Sus preguntas van aparte, en el archivo `.tests.ts`
// del mismo nivel.
export interface LessonContent {
  title: string;
  durationMinutes: number;
  content: string;
}

// Tests de un curso: uno por estación, en el mismo orden que las lecciones, y
// el examen final. Todo es de opción múltiple y se califica solo.
export interface CourseTests {
  lessons: Question[][];
  exam: { title: string; instructions: string; questions: Question[] };
}

// Pregunta de opción múltiple. La opción correcta se escribe primero para que
// no haya forma de marcar otra por error; su posición final se decide con un
// hash del enunciado, así queda repartida y no cambia entre cargas.
export function q(
  prompt: string,
  correct: string,
  wrong: string[],
  explanation: string,
): Question {
  let hash = 0;
  for (const char of prompt) hash = (hash * 31 + char.codePointAt(0)!) >>> 0;
  const answer = hash % (wrong.length + 1);
  const options = [...wrong];
  options.splice(answer, 0, correct);
  return { prompt, options, answer, explanation };
}
