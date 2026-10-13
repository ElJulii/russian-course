import { Prisma } from '../generated/prisma/client';
import { EnrollmentStatus } from '../generated/prisma/enums';
import { passes, Question } from '../grades/grade-calc';

export function progressOf(completed: number, total: number) {
  return {
    completedLessons: completed,
    totalLessons: total,
    percent: total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}

interface EnrollmentRef {
  id: string;
  courseId: string;
  status: EnrollmentStatus;
}

// Tests de la estación (los que tienen preguntas) y cuáles le falta aprobar al
// estudiante. Una estación con tests se completa aprobándolos; sin tests, se
// marca a mano.
export async function lessonTests(
  tx: Prisma.TransactionClient,
  enrollmentId: string,
  lessonId: string,
) {
  const tests = await tx.assessment.findMany({
    where: { lessonId },
    select: {
      id: true,
      title: true,
      questions: true,
      attempts: {
        where: { enrollmentId },
        select: { correct: true, total: true },
      },
    },
    orderBy: { createdAt: 'asc' },
  });
  const answerable = tests.filter(
    (test) => (test.questions as unknown as Question[]).length > 0,
  );
  return {
    total: answerable.length,
    pending: answerable.filter(
      (test) => !test.attempts.some((a) => passes(a.correct, a.total)),
    ),
  };
}

// Marca la estación como completada y, si era la última, cierra el curso.
export async function recordLessonCompleted(
  tx: Prisma.TransactionClient,
  enrollment: EnrollmentRef,
  lessonId: string,
) {
  const enrollmentId = enrollment.id;
  await tx.lessonProgress.upsert({
    where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
    create: { enrollmentId, lessonId },
    update: {},
  });
  const [completed, total] = await Promise.all([
    tx.lessonProgress.count({ where: { enrollmentId } }),
    tx.lesson.count({ where: { courseId: enrollment.courseId } }),
  ]);
  let status = enrollment.status;
  if (completed === total && status === EnrollmentStatus.ACTIVE) {
    status = EnrollmentStatus.COMPLETED;
    await tx.enrollment.update({
      where: { id: enrollmentId },
      data: { status, completedAt: new Date() },
    });
  }
  return { enrollmentId, status, progress: progressOf(completed, total) };
}
