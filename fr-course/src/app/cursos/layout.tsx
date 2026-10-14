import type { Metadata } from "next";

// La página es de cliente y no puede exportar metadata: el título va aquí.
export const metadata: Metadata = { title: "Curso — Поехали" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
