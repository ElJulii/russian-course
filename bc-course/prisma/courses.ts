import type { Prisma, PrismaClient } from '../src/generated/prisma/client';
import type { Question } from '../src/grades/grade-calc';
import { A1 } from './content/a1';
import { A1_TESTS } from './content/a1.tests';
import { A2 } from './content/a2';
import { A2_TESTS } from './content/a2.tests';
import { B1 } from './content/b1';
import { B1_TESTS } from './content/b1.tests';
import { B2 } from './content/b2';
import { B2_TESTS } from './content/b2.tests';
import { C1 } from './content/c1';
import { C1_TESTS } from './content/c1.tests';
import { C2 } from './content/c2';
import { C2_TESTS } from './content/c2.tests';
import type { CourseTests, LessonContent } from './content/course-content';

// Peso conjunto de los tests de las estaciones; el resto es del examen final.
const TESTS_WEIGHT = 60;

interface CourseData {
  title: string;
  slug: string;
  description: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

// Catálogo de la plataforma. El contenido de cada nivel está en ./content.
export const COURSES: (CourseData & {
  lessons: LessonContent[];
  tests: CourseTests;
})[] = [
  {
    title: 'Ruso desde cero (A1)',
    slug: 'ruso-desde-cero-a1',
    description:
      'Del alfabeto cirílico a tu primera conversación: presentarte, hablar de tu familia, tu ciudad, la comida y tu rutina en presente y pasado. Doce estaciones con test y examen final.',
    level: 'A1',
    lessons: A1,
    tests: A1_TESTS,
  },
  {
    title: 'Ruso básico (A2)',
    slug: 'ruso-basico-a2',
    description:
      'Los seis casos en singular y plural, el aspecto verbal, el futuro y los verbos de movimiento, aplicados a compras, salud, viajes y planes. Doce estaciones con test y examen final.',
    level: 'A2',
    lessons: A2,
    tests: A2_TESTS,
  },
  {
    title: 'Ruso intermedio (B1)',
    slug: 'ruso-intermedio-b1',
    description:
      'El plural de todos los casos, los verbos de movimiento con prefijos, participios y gerundios, el condicional, la oración compuesta y los textos formales. Prepara para el ТРКИ-1.',
    level: 'B1',
    lessons: B1,
    tests: B1_TESTS,
  },
  {
    title: 'Ruso intermedio alto (B2)',
    slug: 'ruso-intermedio-alto-b2',
    description:
      'Matices del aspecto, prefijos verbales, rección, sintaxis del texto escrito, modalidad, formación de palabras, registros y ensayo argumentativo. Prepara para el ТРКИ-2.',
    level: 'B2',
    lessons: B2,
    tests: B2_TESTS,
  },
  {
    title: 'Ruso avanzado (C1)',
    slug: 'ruso-avanzado-c1',
    description:
      'Precisión léxica, estilos científico, oficial y periodístico, orden de palabras, norma culta, fraseología, lectura de los clásicos y discurso público. Prepara para el ТРКИ-3.',
    level: 'C1',
    lessons: C1,
    tests: C1_TESTS,
  },
  {
    title: 'Ruso de maestría (C2)',
    slug: 'ruso-de-maestria-c2',
    description:
      'Estilística, historia de la lengua, variedades sociales, análisis de poesía y prosa, traducción, edición de textos, discurso académico y ensayo crítico. Prepara para el ТРКИ-4.',
    level: 'C2',
    lessons: C2,
    tests: C2_TESTS,
  },
];

// Datos del test de una estación; `lessons` es cuántas tiene el curso.
export const lessonTestData = (
  lesson: { order: number; title: string },
  questions: Question[],
  lessons: number,
) => ({
  title: `Test ${lesson.order}: ${lesson.title}`,
  type: 'QUIZ' as const,
  instructions:
    'Elige la opción correcta en cada pregunta. Apruebas con 70 % y puedes repetir el test las veces que quieras: cuenta tu mejor nota.',
  questions: questions as unknown as Prisma.InputJsonValue,
  maxScore: 10,
  weight: TESTS_WEIGHT / lessons,
});

export const examData = (exam: CourseTests['exam']) => ({
  type: 'EXAM' as const,
  maxScore: 100,
  weight: 100 - TESTS_WEIGHT,
  ...exam,
  questions: exam.questions as unknown as Prisma.InputJsonValue,
});

// Crea el curso publicado con sus lecciones, el test de cada estación y el
// examen final. Los tests pesan 60 % entre todos y el examen 40 %.
export async function createCourse(
  prisma: PrismaClient,
  data: CourseData,
  lessons: LessonContent[],
  tests: CourseTests,
) {
  if (tests.lessons.length !== lessons.length) {
    throw new Error(
      `${data.slug}: hay ${lessons.length} lecciones y ${tests.lessons.length} tests`,
    );
  }
  const course = await prisma.course.create({
    data: {
      ...data,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      lessons: {
        create: lessons.map((lesson, index) => ({
          order: index + 1,
          ...lesson,
        })),
      },
    },
    include: { lessons: { orderBy: { order: 'asc' } } },
  });
  // Uno a uno para que el orden de creación sea determinista.
  const lessonTests: { id: string; questions: Question[] }[] = [];
  for (const lesson of course.lessons) {
    const questions = tests.lessons[lesson.order - 1];
    const test = await prisma.assessment.create({
      data: {
        courseId: course.id,
        lessonId: lesson.id,
        ...lessonTestData(lesson, questions, lessons.length),
      },
    });
    lessonTests.push({ id: test.id, questions });
  }
  const exam = await prisma.assessment.create({
    data: { courseId: course.id, ...examData(tests.exam) },
  });
  return {
    ...course,
    tests: lessonTests,
    exam: { id: exam.id, questions: tests.exam.questions },
  };
}
