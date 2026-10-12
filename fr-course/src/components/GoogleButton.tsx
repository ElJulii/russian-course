"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize(options: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }): void;
          renderButton(parent: HTMLElement, options: Record<string, string | number>): void;
        };
      };
    };
  }
}

// Botón oficial de Google. Entrega un ID token que la API verifica y cambia
// por una sesión; no aparece si falta NEXT_PUBLIC_GOOGLE_CLIENT_ID.
export function GoogleButton({
  mode,
  onCredential,
}: {
  mode: "login" | "registro";
  onCredential: (credential: string) => void;
}) {
  const slot = useRef<HTMLDivElement>(null);
  const handler = useRef(onCredential);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    handler.current = onCredential;
  });

  useEffect(() => {
    if (!ready || !CLIENT_ID || !slot.current || !window.google) return;
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: (response) => handler.current(response.credential),
    });
    window.google.accounts.id.renderButton(slot.current, {
      theme: "outline",
      size: "large",
      shape: "pill",
      locale: "es",
      text: mode === "login" ? "signin_with" : "signup_with",
      // Google admite entre 200 y 400 px.
      width: Math.max(200, Math.min(400, slot.current.offsetWidth)),
    });
  }, [ready, mode]);

  if (!CLIENT_ID) return null;

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" onReady={() => setReady(true)} />
      <p className="auth-divider muted small">o</p>
      <div ref={slot} className="google-slot" />
    </>
  );
}
