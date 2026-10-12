-- AlterTable: versión de las sesiones; sube al cambiar la contraseña y deja
-- sin efecto los tokens emitidos antes.
ALTER TABLE "User" ADD COLUMN "tokenVersion" INTEGER NOT NULL DEFAULT 0;
