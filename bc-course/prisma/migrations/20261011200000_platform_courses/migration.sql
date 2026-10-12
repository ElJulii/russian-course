-- AlterEnum
BEGIN;
CREATE TYPE "AssessmentType_new" AS ENUM ('QUIZ', 'ASSIGNMENT', 'EXAM');
ALTER TABLE "Assessment" ALTER COLUMN "type" TYPE "AssessmentType_new" USING ("type"::text::"AssessmentType_new");
ALTER TYPE "AssessmentType" RENAME TO "AssessmentType_old";
ALTER TYPE "AssessmentType_new" RENAME TO "AssessmentType";
DROP TYPE "public"."AssessmentType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_instructorId_fkey";

-- DropIndex
DROP INDEX "Course_instructorId_idx";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "instructorId";

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "evaluatorId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Enrollment_evaluatorId_idx" ON "Enrollment"("evaluatorId");

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_evaluatorId_fkey" FOREIGN KEY ("evaluatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

