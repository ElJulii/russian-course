export const PASSING_GRADE = 70;

export interface WeightedAssessment {
  id: string;
  maxScore: number;
  weight: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

// Nota sobre 100 ponderada por el peso de cada evaluación.
// - finalGrade: las evaluaciones sin intentos cuentan como 0.
// - currentAverage: solo considera lo ya respondido (null si no hay notas).
export function summarizeGrades(
  assessments: WeightedAssessment[],
  scores: Map<string, number>,
) {
  let totalWeight = 0;
  let gradedWeight = 0;
  let earned = 0;
  for (const assessment of assessments) {
    totalWeight += assessment.weight;
    const score = scores.get(assessment.id);
    if (score === undefined) continue;
    gradedWeight += assessment.weight;
    earned += (score / assessment.maxScore) * assessment.weight;
  }
  const finalGrade =
    totalWeight === 0 ? 0 : round2((earned / totalWeight) * 100);
  return {
    finalGrade,
    currentAverage:
      gradedWeight === 0 ? null : round2((earned / gradedWeight) * 100),
    gradedWeight: round2(gradedWeight),
    totalWeight: round2(totalWeight),
    passed: totalWeight > 0 && finalGrade >= PASSING_GRADE,
  };
}

// --- Tests de opción múltiple ---

export interface Question {
  prompt: string;
  options: string[];
  // Índice de la opción correcta dentro de `options`.
  answer: number;
  explanation?: string;
}

// Nota de un intento sobre `maxScore`, a partir de sus aciertos.
export const scoreOf = (correct: number, total: number, maxScore: number) =>
  total === 0 ? 0 : round2((correct / total) * maxScore);

// Un test se aprueba con el mismo mínimo que el curso.
export const passes = (correct: number, total: number) =>
  total > 0 && (correct / total) * 100 >= PASSING_GRADE;

// Corrige un intento: `answers[i]` es la opción elegida en `questions[i]`.
export function gradeAttempt(questions: Question[], answers: number[]) {
  const results = questions.map((question, index) => ({
    chosen: answers[index],
    answer: question.answer,
    isCorrect: answers[index] === question.answer,
    explanation: question.explanation ?? null,
  }));
  const correct = results.filter((result) => result.isCorrect).length;
  return { correct, total: questions.length, results };
}

// De todos los intentos de un test cuenta el mejor.
export function bestAttempt<T extends { correct: number; total: number }>(
  attempts: T[],
): T | null {
  let best: T | null = null;
  for (const attempt of attempts) {
    if (attempt.total === 0) continue;
    if (!best || attempt.correct / attempt.total > best.correct / best.total) {
      best = attempt;
    }
  }
  return best;
}
