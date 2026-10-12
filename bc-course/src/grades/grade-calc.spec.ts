import { summarizeGrades } from './grade-calc';

const assessments = [
  { id: 'quiz', maxScore: 20, weight: 40 },
  { id: 'exam', maxScore: 100, weight: 60 },
];

describe('summarizeGrades', () => {
  it('pondera cada nota por el peso de su evaluación', () => {
    const result = summarizeGrades(
      assessments,
      new Map([
        ['quiz', 15],
        ['exam', 80],
      ]),
    );
    // 15/20*40 + 80/100*60 = 30 + 48
    expect(result.finalGrade).toBe(78);
    expect(result.currentAverage).toBe(78);
    expect(result.passed).toBe(true);
  });

  it('cuenta como 0 lo no calificado en la nota final, pero no en el promedio actual', () => {
    const result = summarizeGrades(assessments, new Map([['quiz', 18]]));
    expect(result.finalGrade).toBe(36);
    expect(result.currentAverage).toBe(90);
    expect(result.gradedWeight).toBe(40);
    expect(result.passed).toBe(false);
  });

  it('normaliza cuando los pesos aún no suman 100', () => {
    const result = summarizeGrades(
      [{ id: 'quiz', maxScore: 10, weight: 25 }],
      new Map([['quiz', 7]]),
    );
    expect(result.finalGrade).toBe(70);
    expect(result.totalWeight).toBe(25);
  });

  it('no aprueba ni promedia un curso sin evaluaciones o sin notas', () => {
    expect(summarizeGrades([], new Map())).toMatchObject({
      finalGrade: 0,
      currentAverage: null,
      passed: false,
    });
    expect(summarizeGrades(assessments, new Map()).currentAverage).toBeNull();
  });
});
