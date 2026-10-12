-- AlterTable: nombre y apellido por separado. Las cuentas existentes se
-- reparten por el primer espacio de su nombre completo.
ALTER TABLE "User" ADD COLUMN "firstName" TEXT,
ADD COLUMN "lastName" TEXT;

UPDATE "User"
SET "firstName" = split_part("name", ' ', 1),
    "lastName" = COALESCE(NULLIF(btrim(substr("name", length(split_part("name", ' ', 1)) + 1)), ''), '');

ALTER TABLE "User" ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL;

-- CreateIndex
CREATE INDEX "User_lastName_idx" ON "User"("lastName");
