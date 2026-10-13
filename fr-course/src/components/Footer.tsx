"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { LEGAL, LEGAL_PAGES } from "@/lib/legal";

export function Footer() {
  const { user } = useAuth();

  const platform = user
    ? [
        { href: "/#lineas", label: "Líneas" },
        { href: "/perfil", label: "Tu cuenta" },
      ]
    : [
        { href: "/#lineas", label: "Líneas" },
        { href: "/registro", label: "Crear cuenta" },
        { href: "/login", label: "Entrar" },
      ];

  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-about">
          <Link href="/" className="brand" lang="ru" aria-label="Поехали, inicio">
            <span className="brand-mark" aria-hidden>
              П
            </span>
            Поехали
          </Link>
          <p>
            Cursos de ruso en español. Cada curso es una línea de metro y cada
            lección, una estación.
          </p>
        </div>

        <nav aria-label="Plataforma">
          <h2 className="footer-title">Plataforma</h2>
          <ul className="footer-list">
            {platform.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="footer-title">Legal</h2>
          <ul className="footer-list">
            {LEGAL_PAGES.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Contacto</h2>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
            </li>
            <li>
              <Link href="/privacidad#derechos">Ejercer tus derechos sobre tus datos</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell footer-end">
        <p>
          © {new Date().getFullYear()} {LEGAL.owner}. Todos los derechos reservados.
        </p>
        <p>
          <span lang="ru" className="cyr">
            Конечная
          </span>{" "}
          · fin de la línea
        </p>
      </div>
    </footer>
  );
}
