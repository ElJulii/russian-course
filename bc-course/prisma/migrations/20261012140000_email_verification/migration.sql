-- AlterTable: una cuenta solo se puede usar con el correo confirmado.
ALTER TABLE "User" ADD COLUMN "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN "verificationSentAt" TIMESTAMP(3);

-- Las cuentas que ya existían se dan por confirmadas.
UPDATE "User" SET "emailVerifiedAt" = "createdAt";
