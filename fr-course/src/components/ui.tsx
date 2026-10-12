"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { errorMessage, type Level, type Role } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { LEVELS } from "@/lib/labels";

// Fija el color de línea del nivel para todo lo que se dibuje dentro.
export const lineStyle = (level: Level) =>
  ({ "--line": LEVELS[level].color }) as CSSProperties;

export function Roundel({ level, large }: { level: Level; large?: boolean }) {
  return (
    <span
      className={large ? "roundel roundel-lg" : "roundel"}
      style={lineStyle(level)}
      title={`Nivel ${level}: ${LEVELS[level].name}`}
    >
      {level}
    </span>
  );
}

export function Meter({ percent }: { percent: number }) {
  return (
    <div
      className="meter"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${percent}%` }} />
    </div>
  );
}

export function Notice({ children, ok }: { children: React.ReactNode; ok?: boolean }) {
  if (!children) return null;
  return (
    <p className={ok ? "notice notice-ok" : "notice"} role={ok ? "status" : "alert"}>
      {children}
    </p>
  );
}

// Casilla de contraseña con un ojo para verla mientras se escribe.
export function PasswordInput({
  visible,
  onToggle,
  ...props
}: Omit<React.ComponentProps<"input">, "type" | "className"> & {
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <span className="password">
      <input className="input" type={visible ? "text" : "password"} {...props} />
      <button
        type="button"
        className="password-eye"
        onClick={onToggle}
        aria-pressed={visible}
        aria-label={visible ? "Ocultar la contraseña" : "Ver la contraseña"}
        title={visible ? "Ocultar la contraseña" : "Ver la contraseña"}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
          {/* Tachado mientras la contraseña está oculta. */}
          {!visible && <path d="M4 4l16 16" />}
        </svg>
      </button>
    </span>
  );
}

// Estados de carga y error de una pantalla que depende de una consulta.
export function Loading({ loading, error }: { loading: boolean; error: string | null }) {
  if (error) return <Notice>{error}</Notice>;
  if (loading) return <p className="muted">Cargando…</p>;
  return null;
}

// Ejecuta una acción contra la API y expone su estado para el botón y el aviso.
export function useAction() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const run = async (action: () => Promise<unknown>) => {
    setBusy(true);
    setError(null);
    try {
      await action();
      return true;
    } catch (e) {
      setError(errorMessage(e));
      return false;
    } finally {
      setBusy(false);
    }
  };
  return { busy, error, run };
}

// Redirige al login si no hay sesión; avisa si el rol no alcanza.
export function Guard({
  roles,
  children,
}: {
  roles?: Role[];
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <main className="shell page">
        <p className="muted">Cargando…</p>
      </main>
    );
  }
  if (roles && !roles.includes(user.role)) {
    return (
      <main className="shell page">
        <div className="empty">
          <h2>Esta parada no es para tu cuenta</h2>
          <p className="muted">Tu rol no tiene acceso a esta página.</p>
          <Link href="/" className="btn">
            Volver a las líneas
          </Link>
        </div>
      </main>
    );
  }
  return <>{children}</>;
}
