import {
  bestAttempt,
  gradeAttempt,
  passes,
  scoreOf,
  summarizeGrades,
} from './grade-calc';

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

  it('cuenta como 0 lo no respondido en la nota final, pero no en el promedio actual', () => {
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

const questions = [
  { prompt: '¿да?', options: ['sí', 'no'], answer: 0, explanation: 'да = sí' },
  { prompt: '¿нет?', options: ['sí', 'no'], answer: 1 },
  { prompt: '¿кот?', options: ['perro', 'gato', 'casa'], answer: 1 },
  { prompt: '¿дом?', options: ['perro', 'gato', 'casa'], answer: 2 },
];

describe('gradeAttempt', () => {
  it('cuenta los aciertos y devuelve la corrección de cada pregunta', () => {
    const result = gradeAttempt(questions, [0, 0, 1, 2]);
    expect(result.correct).toBe(3);
    expect(result.total).toBe(4);
    expect(result.results[0]).toEqual({
      chosen: 0,
      answer: 0,
      isCorrect: true,
      explanation: 'да = sí',
    });
    expect(result.results[1]).toEqual({
      chosen: 0,
      answer: 1,
      isCorrect: false,
      explanation: null,
    });
  });
});

describe('scoreOf y passes', () => {
  it('convierte los aciertos a la escala de la evaluación', () => {
    expect(scoreOf(3, 4, 10)).toBe(7.5);
    expect(scoreOf(2, 3, 100)).toBe(66.67);
    expect(scoreOf(0, 0, 10)).toBe(0);
  });

  it('aprueba desde el 70 % de aciertos', () => {
    expect(passes(7, 10)).toBe(true);
    expect(passes(6, 10)).toBe(false);
    expect(passes(0, 0)).toBe(false);
  });
});

describe('bestAttempt', () => {
  it('se queda con el intento de mayor proporción de aciertos', () => {
    const attempts = [
      { correct: 4, total: 10 },
      { correct: 4, total: 5 },
      { correct: 7, total: 10 },
    ];
    expect(bestAttempt(attempts)).toBe(attempts[1]);
    expect(bestAttempt([])).toBeNull();
  });
});
