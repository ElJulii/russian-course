import type { Metadata } from "next";

// La página es de cliente y no puede exportar metadata: el título va aquí.
export const metadata: Metadata = {
  title: "Vocabulario — Поехали",
  description: "Las 1000 palabras más usadas del ruso, con acento, traducción y pronunciación.",
};

export default function VocabularyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
