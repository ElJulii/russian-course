"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoogleButton } from "@/components/GoogleButton";
import { Notice, PasswordInput, useAction } from "@/components/ui";
import { ApiError, type User } from "@/lib/api";
import { useAuth } from "@/lib/auth";

export function AuthForm({ mode }: { mode: "login" | "registro" }) {
  const { login, register, loginWithGoogle } = useAuth();
  const router = useRouter();
  const { busy, error, run } = useAction();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  // Un solo ojo muestra u oculta las dos casillas de contraseña.
  const [visible, setVisible] = useState(false);
  // Correo que falta confirmar: tras registrarse o al entrar sin haberlo hecho.
  const [pending, setPending] = useState<string | null>(null);
  const isLogin = mode === "login";
  const mismatch = !isLogin && form.confirm !== "" && form.confirm !== form.password;

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [key]: e.target.value }),
  });

  const enter = (user: User) =>
    router.push(user.role === "STUDENT" ? "/mi-ruta" : "/ensenar");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const { confirm, ...account } = form;
    void run(async () => {
      if (!isLogin && confirm !== account.password) {
        throw new Error("Las contraseñas no coinciden. Escríbelas de nuevo.");
      }
      if (!isLogin) {
        setPending(await register(account));
        return;
      }
      try {
        enter(await login(account.email, account.password));
      } catch (e) {
        if (e instanceof ApiError && e.code === "EMAIL_NOT_VERIFIED") {
          setPending(account.email.trim());
          return;
        }
        throw e;
      }
    });
  };

  const withGoogle = (credential: string) =>
    void run(async () => enter(await loginWithGoogle(credential)));

  if (pending) return <CheckEmail email={pending} onBack={() => setPending(null)} />;

  return (
    <main className="shell page">
      <div className="auth">
        <div className="stack">
          <h1>{isLogin ? "Привет de nuevo" : "Súbete al vagón"}</h1>
          <p className="muted">
            {isLogin
              ? "Entra para seguir tu ruta donde la dejaste."
              : "Crea tu cuenta y elige tu primera línea. Es gratis."}
          </p>
        </div>
        <form className="panel stack" onSubmit={submit}>
          {!isLogin && (
            <div className="form-grid">
              <label className="field">
                <span>Nombre</span>
                <input
                  className="input"
                  required
                  minLength={2}
                  maxLength={40}
                  autoComplete="given-name"
                  {...field("firstName")}
                />
              </label>
              <label className="field">
                <span>Apellido</span>
                <input
                  className="input"
                  required
                  minLength={2}
                  maxLength={40}
                  autoComplete="family-name"
                  {...field("lastName")}
                />
              </label>
            </div>
          )}
          <label className="field">
            <span>Correo</span>
            <input className="input" type="email" required autoComplete="email" {...field("email")} />
          </label>
          <label className="field">
            <span>Contraseña</span>
            <PasswordInput
              visible={visible}
              onToggle={() => setVisible(!visible)}
              required
              minLength={isLogin ? undefined : 8}
              autoComplete={isLogin ? "current-password" : "new-password"}
              {...field("password")}
            />
            {!isLogin && <small className="muted">Mínimo 8 caracteres.</small>}
          </label>
          {!isLogin && (
            <label className="field">
              <span>Repite la contraseña</span>
              <PasswordInput
                visible={visible}
                onToggle={() => setVisible(!visible)}
                required
                autoComplete="new-password"
                aria-invalid={mismatch}
                {...field("confirm")}
              />
              {mismatch && (
                <small className="field-error">Todavía no coincide con la de arriba.</small>
              )}
            </label>
          )}
          <Notice>{error}</Notice>
          <button className="btn btn-primary" disabled={busy}>
            {isLogin ? "Entrar" : "Crear cuenta"}
          </button>
          <GoogleButton mode={mode} onCredential={withGoogle} />
          {/* Con Google también se crea la cuenta desde la pantalla de entrar. */}
          <p className="muted small">
            {isLogin ? "Al continuar aceptas los " : "Al crear tu cuenta aceptas los "}
            <Link href="/terminos">Términos y condiciones</Link> y la{" "}
            <Link href="/privacidad">Política de privacidad</Link>.
          </p>
        </form>
        <p>
          {isLogin ? "¿Primera vez por aquí? " : "¿Ya tienes cuenta? "}
          <Link href={isLogin ? "/registro" : "/login"}>
            {isLogin ? "Crea tu cuenta" : "Entra"}
          </Link>
        </p>
      </div>
    </main>
  );
}

// La cuenta no se puede usar hasta abrir el enlace que llega por correo.
function CheckEmail({ email, onBack }: { email: string; onBack: () => void }) {
  const { resendVerification } = useAuth();
  const { busy, error, run } = useAction();
  const [resent, setResent] = useState(false);

  const resend = () => {
    setResent(false);
    void run(async () => {
      await resendVerification(email);
      setResent(true);
    });
  };

  return (
    <main className="shell page">
      <div className="auth">
        <div className="stack">
          <h1>Revisa tu correo</h1>
          <p className="muted">
            Enviamos un enlace de confirmación a <strong>{email}</strong>. Ábrelo para
            activar tu cuenta; vence en 24 horas.
          </p>
        </div>
        {/* Se envía desde una cuenta de correo personal, no desde un servidor
            de envíos: es fácil que el filtro lo mande a spam. */}
        <p className="notice notice-warn" role="note">
          <strong>Revisa también la carpeta de spam</strong> (o «Correo no deseado»):
          es muy probable que llegue ahí. Busca el asunto «Confirma tu correo en
          Поехали» y, si está en spam, márcalo como «No es spam» para que los
          próximos lleguen bien.
        </p>
        <div className="panel stack">
          <p>¿Tampoco está en spam? Espera un par de minutos o pide otro enlace.</p>
          <Notice>{error}</Notice>
          {resent && (
            <Notice ok>
              Listo. Si la cuenta sigue sin confirmar, va otro enlace en camino. Entre
              un envío y otro hay que esperar un minuto.
            </Notice>
          )}
          <button type="button" className="btn btn-sun" disabled={busy} onClick={resend}>
            Reenviar el correo
          </button>
        </div>
        <p>
          <button type="button" className="btn btn-quiet" onClick={onBack}>
            Volver
          </button>
        </p>
      </div>
    </main>
  );
}
