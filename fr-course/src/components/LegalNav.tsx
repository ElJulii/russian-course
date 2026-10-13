"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LEGAL_PAGES } from "@/lib/legal";

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="tabs" aria-label="Documentos legales">
      {LEGAL_PAGES.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="chip filter"
          aria-current={pathname === page.href ? "page" : undefined}
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
}
