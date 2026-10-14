import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcryptjs';
import { PrismaClient } from '../src/generated/prisma/client';
import type { Question } from '../src/grades/grade-calc';
import { defaultPassword, fullName } from '../src/users/names';
import { COURSES, createCourse } from './courses';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  // El seed borra toda la base y crea cuentas con contraseñas adivinables:
  // jamás debe correr contra producción. No crea admin: lo es quien entra con
  // Google con un correo de ADMIN_EMAILS.
  if (process.env.NODE_ENV === 'production') {
    throw new Error('El seed es solo para desarrollo (NODE_ENV=production).');
  }
  await prisma.attempt.deleteMany();
  await prisma.assessment.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  // La contraseña de cada cuenta es su nombre y apellido juntos, en
  // minúsculas y sin tildes (solo para desarrollo).
  const user = async (email: string, firstName: string, lastName: string) =>
    prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        name: fullName(firstName, lastName),
        emailVerifiedAt: new Date(),
        passwordHash: await bcrypt.hash(
          defaultPassword(firstName, lastName),
          10,
        ),
      },
    });

  const ana = await user('ana@ruso.dev', 'Ana', 'Torres');
  const luis = await user('luis@ruso.dev', 'Luis', 'Méndez');
  const sofia = await user('sofia@ruso.dev', 'Sofía', 'Rojas');

  // Los seis cursos de la plataforma, de A1 a C2.
  const courses: Awaited<ReturnType<typeof createCourse>>[] = [];
  for (const { lessons, tests, ...data } of COURSES) {
    courses.push(await createCourse(prisma, data, lessons, tests));
  }
  const [a1, a2] = courses;

  const enroll = (
    studentId: string,
    courseId: string,
    completedLessons: string[] = [],
  ) =>
    prisma.enrollment.create({
      data: {
        studentId,
        courseId,
        progress: {
          create: completedLessons.map((lessonId) => ({ lessonId })),
        },
      },
    });

  // Un intento de muestra que falla las primeras `misses` preguntas.
  const attempt = (
    enrollmentId: string,
    test: { id: string; questions: Question[] },
    misses: number,
  ) =>
    prisma.attempt.create({
      data: {
        assessmentId: test.id,
        enrollmentId,
        answers: test.questions.map((question, index) =>
          index < misses
            ? (question.answer + 1) % question.options.length
            : question.answer,
        ),
        correct: test.questions.length - misses,
        total: test.questions.length,
      },
    });

  const lessonIds = a1.lessons.map((l) => l.id);

  // Ana terminó el A1: aprobó los doce tests y el examen, y empieza el A2.
  const anaA1 = await enroll(ana.id, a1.id, lessonIds);
  await prisma.enrollment.update({
    where: { id: anaA1.id },
    data: { status: 'COMPLETED', completedAt: new Date() },
  });
  for (const [index, test] of a1.tests.entries()) {
    // En el tercero falló la primera vez y lo repitió.
    if (index === 2) await attempt(anaA1.id, test, 5);
    await attempt(anaA1.id, test, index % 3);
  }
  await attempt(anaA1.id, a1.exam, 2);
  await enroll(ana.id, a2.id);

  // Luis va por la tercera estación: su test todavía no le sale.
  const luisA1 = await enroll(luis.id, a1.id, lessonIds.slice(0, 2));
  await attempt(luisA1.id, a1.tests[0], 3);
  await attempt(luisA1.id, a1.tests[1], 2);
  await attempt(luisA1.id, a1.tests[2], 4);

  // Sofía acaba de subirse.
  await enroll(sofia.id, a1.id);

  console.log('Seed listo. La contraseña es nombre y apellido juntos:');
  console.table(
    [ana, luis, sofia].map((u) => ({
      email: u.email,
      contraseña: defaultPassword(u.firstName, u.lastName),
    })),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
