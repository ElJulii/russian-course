import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { COURSES, createCourse, examData, lessonTestData } from './courses';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// Añade los cursos del catálogo que falten sin tocar usuarios, inscripciones
// ni notas. A diferencia del seed, no borra nada que tenga actividad.
async function main() {
  // Borradores vacíos y sin inscritos de un nivel que el catálogo ya cubre.
  const stale = await prisma.course.deleteMany({
    where: {
      status: 'DRAFT',
      slug: { notIn: COURSES.map((c) => c.slug) },
      level: { in: COURSES.map((c) => c.level) },
      lessons: { none: {} },
      enrollments: { none: {} },
    },
  });
  if (stale.count) console.log(`Borradores vacíos eliminados: ${stale.count}`);

  for (const { lessons, tests, ...data } of COURSES) {
    const exists = await prisma.course.findUnique({
      where: { slug: data.slug },
      select: {
        lessons: { select: { id: true, order: true, title: true } },
        assessments: {
          select: { id: true, lessonId: true, type: true, questions: true },
        },
      },
    });
    if (exists) {
      // Tests que quedaron sin preguntas al pasar a opción múltiple: se
      // rellenan con los del catálogo. Los que ya tienen no se tocan.
      let filled = 0;
      for (const test of exists.assessments) {
        if ((test.questions as unknown[]).length > 0) continue;
        const lesson = exists.lessons.find((l) => l.id === test.lessonId);
        const questions = lesson && tests.lessons[lesson.order - 1];
        const fill = questions
          ? lessonTestData(lesson, questions, exists.lessons.length)
          : test.type === 'EXAM'
            ? examData(tests.exam)
            : null;
        if (!fill) continue;
        await prisma.assessment.update({ where: { id: test.id }, data: fill });
        filled++;
      }
      console.log(
        filled
          ? `Ya existe: ${data.title} (${filled} tests rellenados)`
          : `Ya existe: ${data.title}`,
      );
      continue;
    }
    await createCourse(prisma, data, lessons, tests);
    console.log(`Creado: ${data.title} (${lessons.length} lecciones)`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
