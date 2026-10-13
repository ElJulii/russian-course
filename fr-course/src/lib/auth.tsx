"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { api, sessionHint, type User } from "./api";

// El token no llega al navegador: va en una cookie httpOnly que pone la API.
interface Session {
  user: User;
}

interface AuthValue {
  user: User | null;
  // true mientras se comprueba si hay una sesión guardada
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  // No inicia sesión: devuelve el correo al que se envió el enlace de confirmación.
  register: (account: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => Promise<string>;
  verifyEmail: (token: string) => Promise<User>;
  resendVerification: (email: string) => Promise<void>;
  // Entra o crea la cuenta con el ID token del botón de Google.
  loginWithGoogle: (credential: string) => Promise<User>;
  logout: () => void;
  // Olvida la sesión sin avisar a la API: la cuenta ya no existe.
  forget: () => void;
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ user: User | null; loading: boolean }>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    void (async () => {
      const user = sessionHint.has()
        ? await api<User>("/users/me").catch(() => null)
        : null;
      if (!user) sessionHint.clear();
      setState({ user, loading: false });
    })();
  }, []);

  const start = (session: Session) => {
    sessionHint.set();
    setState({ user: session.user, loading: false });
    return session.user;
  };

  const value: AuthValue = {
    ...state,
    login: async (email, password) =>
      start(
        await api<Session>("/auth/login", {
          method: "POST",
          body: { email, password },
        }),
      ),
    register: async (account) =>
      (await api<{ email: string }>("/auth/register", { method: "POST", body: account }))
        .email,
    verifyEmail: async (token) =>
      start(await api<Session>("/auth/verify-email", { method: "POST", body: { token } })),
    resendVerification: async (email) => {
      await api("/auth/resend-verification", { method: "POST", body: { email } });
    },
    loginWithGoogle: async (credential) =>
      start(await api<Session>("/auth/google", { method: "POST", body: { credential } })),
    logout: () => {
      sessionHint.clear();
      setState({ user: null, loading: false });
      // La cookie solo la puede borrar la API.
      void api("/auth/logout", { method: "POST" }).catch(() => undefined);
    },
    forget: () => {
      sessionHint.clear();
      setState({ user: null, loading: false });
    },
    setUser: (user) => setState({ user, loading: false }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return value;
}

export const isAdmin = (user: User | null) => user?.role === "ADMIN";
