import type { PrismaClient } from '../src/generated/prisma/client';
import { A1 } from './content/a1';
import { A2 } from './content/a2';
import { B1 } from './content/b1';
import { B2 } from './content/b2';
import { C1 } from './content/c1';
import { C2 } from './content/c2';
import type { CourseContent } from './content/course-content';

// Peso conjunto de los ejercicios de las lecciones; el resto es del examen final.
const EXERCISES_WEIGHT = 60;

interface CourseData {
  title: string;
  slug: string;
  description: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

// Catálogo de la plataforma. El contenido de cada nivel está en ./content.
export const COURSES: (CourseData & { content: CourseContent })[] = [
  {
    title: 'Ruso desde cero (A1)',
    slug: 'ruso-desde-cero-a1',
    description:
      'Del alfabeto cirílico a tu primera conversación: presentarte, hablar de tu familia, tu ciudad, la comida y tu rutina en presente y pasado. Doce estaciones con ejercicios y examen final.',
    level: 'A1',
    content: A1,
  },
  {
    title: 'Ruso básico (A2)',
    slug: 'ruso-basico-a2',
    description:
      'Los seis casos en singular y plural, el aspecto verbal, el futuro y los verbos de movimiento, aplicados a compras, salud, viajes y planes. Doce estaciones con ejercicios y examen final.',
    level: 'A2',
    content: A2,
  },
  {
    title: 'Ruso intermedio (B1)',
    slug: 'ruso-intermedio-b1',
    description:
      'El plural de todos los casos, los verbos de movimiento con prefijos, participios y gerundios, el condicional, la oración compuesta y los textos formales. Prepara para el ТРКИ-1.',
    level: 'B1',
    content: B1,
  },
  {
    title: 'Ruso intermedio alto (B2)',
    slug: 'ruso-intermedio-alto-b2',
    description:
      'Matices del aspecto, prefijos verbales, rección, sintaxis del texto escrito, modalidad, formación de palabras, registros y ensayo argumentativo. Prepara para el ТРКИ-2.',
    level: 'B2',
    content: B2,
  },
  {
    title: 'Ruso avanzado (C1)',
    slug: 'ruso-avanzado-c1',
    description:
      'Precisión léxica, estilos científico, oficial y periodístico, orden de palabras, norma culta, fraseología, lectura de los clásicos y discurso público. Prepara para el ТРКИ-3.',
    level: 'C1',
    content: C1,
  },
  {
    title: 'Ruso de maestría (C2)',
    slug: 'ruso-de-maestria-c2',
    description:
      'Estilística, historia de la lengua, variedades sociales, análisis de poesía y prosa, traducción, edición de textos, discurso académico y ensayo crítico. Prepara para el ТРКИ-4.',
    level: 'C2',
    content: C2,
  },
];

// Crea el curso publicado con sus lecciones, un bloque de ejercicios por
// lección y el examen final. Los ejercicios pesan 60 % entre todos y el
// examen 40 %.
export async function createCourse(
  prisma: PrismaClient,
  data: CourseData,
  content: CourseContent,
) {
  const course = await prisma.course.create({
    data: {
      ...data,
      status: 'PUBLISHED',
      publishedAt: new Date(),
      lessons: {
        create: content.lessons.map(
          ({ title, durationMinutes, content }, index) => ({
            order: index + 1,
            title,
            durationMinutes,
            content,
          }),
        ),
      },
    },
    include: { lessons: { orderBy: { order: 'asc' } } },
  });
  const weight = EXERCISES_WEIGHT / content.lessons.length;
  // Uno a uno para que el orden de creación sea determinista.
  const exercises: { id: string }[] = [];
  for (const lesson of course.lessons) {
    exercises.push(
      await prisma.assessment.create({
        data: {
          courseId: course.id,
          lessonId: lesson.id,
          title: `Ejercicios ${lesson.order}: ${lesson.title}`,
          type: 'ASSIGNMENT',
          instructions:
            'Responde en ruso, en cirílico, salvo que el ejercicio pida otra cosa. Puedes corregir tu entrega mientras el profe no la haya calificado.',
          questions: content.lessons[lesson.order - 1].exercises,
          maxScore: 10,
          weight,
        },
      }),
    );
  }
  await prisma.assessment.create({
    data: {
      courseId: course.id,
      type: 'EXAM',
      maxScore: 100,
      weight: 100 - EXERCISES_WEIGHT,
      ...content.exam,
    },
  });
  return { ...course, exercises };
}
