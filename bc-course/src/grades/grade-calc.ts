export const PASSING_GRADE = 70;

export interface WeightedAssessment {
  id: string;
  maxScore: number;
  weight: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

// Nota sobre 100 ponderada por el peso de cada evaluación.
// - finalGrade: las evaluaciones sin calificar cuentan como 0.
// - currentAverage: solo considera lo ya calificado (null si no hay notas).
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
