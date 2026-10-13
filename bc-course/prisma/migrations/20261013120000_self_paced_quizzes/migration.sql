-- La plataforma deja de tener profes: los tests son de opción múltiple y se
-- califican solos. Las entregas y notas puestas a mano se descartan, y los
-- ejercicios de respuesta abierta también (hay que volver a cargar el catálogo).

-- DropTable
DROP TABLE "Grade";

-- DropTable
DROP TABLE "Submission";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_evaluatorId_fkey";

-- DropIndex
DROP INDEX "Enrollment_evaluatorId_idx";

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "evaluatorId";

-- AlterEnum: los profes pasan a ser estudiantes.
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE TEXT;
UPDATE "User" SET "role" = 'STUDENT' WHERE "role" = 'INSTRUCTOR';
DROP TYPE "Role";
CREATE TYPE "Role" AS ENUM ('STUDENT', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role" USING ("role"::"Role");
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'STUDENT';

-- AlterEnum: las tareas pasan a ser tests.
ALTER TABLE "Assessment" ALTER COLUMN "type" TYPE TEXT;
UPDATE "Assessment" SET "type" = 'QUIZ' WHERE "type" = 'ASSIGNMENT';
DROP TYPE "AssessmentType";
CREATE TYPE "AssessmentType" AS ENUM ('QUIZ', 'EXAM');
ALTER TABLE "Assessment" ALTER COLUMN "type" TYPE "AssessmentType" USING ("type"::"AssessmentType");

-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "questions",
ADD COLUMN     "questions" JSONB NOT NULL DEFAULT '[]';

-- CreateTable
CREATE TABLE "Attempt" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    "answers" INTEGER[],
    "correct" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Attempt_assessmentId_enrollmentId_idx" ON "Attempt"("assessmentId", "enrollmentId");

-- CreateIndex
CREATE INDEX "Attempt_enrollmentId_idx" ON "Attempt"("enrollmentId");

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
