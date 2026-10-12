"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { canTeach, useAuth } from "@/lib/auth";

export function Nav() {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/", label: "Líneas", show: true },
    { href: "/mi-ruta", label: "Mi ruta", show: user?.role === "STUDENT" },
    { href: "/notas", label: "Mis notas", show: user?.role === "STUDENT" },
    {
      href: "/ensenar",
      label: user?.role === "ADMIN" ? "Cursos" : "Evaluar",
      show: canTeach(user),
    },
    { href: "/admin", label: "Usuarios", show: user?.role === "ADMIN" },
  ].filter((link) => link.show);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="shell nav-inner">
        <Link href="/" className="brand" lang="ru" aria-label="Поехали, inicio">
          <span className="brand-mark" aria-hidden>
            П
          </span>
          Поехали
        </Link>
        <nav className="nav-links" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={isCurrent(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {!loading &&
          (user ? (
            <div className="row">
              <Link href="/perfil" className="nav-link">
                {user.name.split(" ")[0]}
              </Link>
              <button
                className="btn btn-quiet"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                Salir
              </button>
            </div>
          ) : (
            <div className="row">
              <Link href="/login" className="nav-link">
                Entrar
              </Link>
              <Link href="/registro" className="btn btn-quiet">
                Crear cuenta
              </Link>
            </div>
          ))}
      </div>
    </header>
  );
}
