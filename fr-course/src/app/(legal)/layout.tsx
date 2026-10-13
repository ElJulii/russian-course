import { LegalNav } from "@/components/LegalNav";
import { LEGAL } from "@/lib/legal";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="shell page">
      <div className="legal">
        <LegalNav />
        <article>{children}</article>
        <p className="muted small legal-updated">
          Última actualización: {LEGAL.updated}.
        </p>
      </div>
    </main>
  );
}
