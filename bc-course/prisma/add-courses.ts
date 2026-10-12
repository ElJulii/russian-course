import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { COURSES, createCourse } from './courses';

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

  for (const { content, ...data } of COURSES) {
    const exists = await prisma.course.findUnique({
      where: { slug: data.slug },
      select: { id: true },
    });
    if (exists) {
      console.log(`Ya existe: ${data.title}`);
      continue;
    }
    await createCourse(prisma, data, content);
    console.log(`Creado: ${data.title} (${content.lessons.length} lecciones)`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
