"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Notice } from "@/components/ui";
import { errorMessage } from "@/lib/api";
import { useAuth } from "@/lib/auth";

// Destino del enlace del correo: confirma la cuenta y deja la sesión iniciada.
export function VerifyEmail({ token }: { token: string | null }) {
  const { verifyEmail } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(
    token ? null : "A este enlace le falta el código de confirmación.",
  );
  // El enlace sirve una sola vez: no se repite aunque el efecto se relance.
  const started = useRef(false);

  useEffect(() => {
    if (!token || started.current) return;
    started.current = true;
    verifyEmail(token).then(
      (user) => router.replace(user.role === "STUDENT" ? "/mi-ruta" : "/ensenar"),
      (e) => setError(errorMessage(e)),
    );
  }, [token, verifyEmail, router]);

  return (
    <main className="shell page">
      <div className="auth">
        <div className="stack">
          <h1>{error ? "No pudimos confirmar tu correo" : "Confirmando tu correo…"}</h1>
          {!error && <p className="muted">Un momento, ya casi sales de la estación.</p>}
        </div>
        {error && (
          <div className="panel stack">
            <Notice>{error}</Notice>
            <p>
              Entra con tu correo y contraseña: si la cuenta sigue sin confirmar, ahí
              mismo puedes pedir otro enlace.
            </p>
            <Link className="btn btn-primary" href="/login">
              Ir a entrar
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
