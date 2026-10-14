import type { Metadata } from "next";
import { VerifyEmail } from "@/components/VerifyEmail";

export const metadata: Metadata = { title: "Confirmar correo — Поехали" };

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  return <VerifyEmail token={token ?? null} />;
}
