"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Guard, Notice, useAction } from "@/components/ui";
import { api, type User } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { ROLES } from "@/lib/labels";

// Baja de la propia cuenta. Pide confirmar antes: no tiene vuelta atrás.
function DeleteAccount({ noPassword }: { noPassword: boolean }) {
  const { forget } = useAuth();
  const router = useRouter();
  const action = useAction();
  const [confirming, setConfirming] = useState(false);
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    void action.run(async () => {
      await api("/users/me", {
        method: "DELETE",
        body: noPassword ? {} : { currentPassword: password },
      });
      router.replace("/");
      forget();
    });
  };

  return (
    <form className="panel stack" onSubmit={submit}>
      <h2>Eliminar tu cuenta</h2>
      <p className="small muted">
        Se borran para siempre tus datos, tus inscripciones, tu avance y tus
        notas. No se puede deshacer. Más detalle en la{" "}
        <Link href="/privacidad#derechos">Política de privacidad</Link>.
      </p>
      {confirming && !noPassword && (
        <label className="field">
          <span>Escribe tu contraseña para confirmar</span>
          <input
            className="input"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      )}
      <Notice>{action.error}</Notice>
      {confirming ? (
        <div className="row">
          <button className="btn btn-danger" disabled={action.busy}>
            Sí, eliminar mi cuenta
          </button>
          <button
            type="button"
            className="btn btn-quiet"
            disabled={action.busy}
            onClick={() => {
              setConfirming(false);
              setPassword("");
            }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <div className="row">
          <button
            type="button"
            className="btn btn-quiet btn-danger"
            onClick={() => setConfirming(true)}
          >
            Eliminar mi cuenta
          </button>
        </div>
      )}
    </form>
  );
}

function Profile() {
  const { user, setUser } = useAuth();
  const action = useAction();
  const [saved, setSaved] = useState(false);
  // Las cuentas creadas con Google no tienen contraseña que confirmar.
  const noPassword = user!.hasPassword === false;
  const [form, setForm] = useState({
    firstName: user!.firstName,
    lastName: user!.lastName,
    currentPassword: "",
    newPassword: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(false);
    void action.run(async () => {
      const updated = await api<User>("/users/me", {
        method: "PATCH",
        body: {
          firstName: form.firstName,
          lastName: form.lastName,
          ...(form.newPassword && {
            ...(!noPassword && { currentPassword: form.currentPassword }),
            newPassword: form.newPassword,
          }),
        },
      });
      setUser(updated);
      setForm({ ...form, currentPassword: "", newPassword: "" });
      setSaved(true);
    });
  };

  return (
    <main className="shell page">
      <div className="page-narrow stack" style={{ ["--gap" as string]: "1.5rem" }}>
        <header className="stack">
          <h1>Tu cuenta</h1>
          <p className="muted">
            {user!.email}, {ROLES[user!.role].toLowerCase()}
          </p>
        </header>
        <form className="panel stack" onSubmit={submit}>
          <div className="form-grid">
            <label className="field">
              <span>Nombre</span>
              <input
                className="input"
                required
                minLength={2}
                maxLength={40}
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
            </label>
            <label className="field">
              <span>Apellido</span>
              <input
                className="input"
                required
                minLength={2}
                maxLength={40}
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </label>
          </div>
          <label className="field">
            <span>
              {noPassword
                ? "Crea una contraseña (opcional: ya entras con Google)"
                : "Contraseña nueva (déjala vacía para no cambiarla)"}
            </span>
            <input
              className="input"
              type="password"
              minLength={8}
              autoComplete="new-password"
              value={form.newPassword}
              onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
            />
          </label>
          {form.newPassword && !noPassword && (
            <label className="field">
              <span>Contraseña actual</span>
              <input
                className="input"
                type="password"
                required
                autoComplete="current-password"
                value={form.currentPassword}
                onChange={(e) => setForm({ ...form, currentPassword: e.target.value })}
              />
            </label>
          )}
          <Notice>{action.error}</Notice>
          {saved && <Notice ok>Cambios guardados.</Notice>}
          <button className="btn btn-primary" disabled={action.busy}>
            Guardar cambios
          </button>
        </form>
        {user!.role === "STUDENT" && <DeleteAccount noPassword={noPassword} />}
      </div>
    </main>
  );
}

export default function ProfilePage() {
  return (
    <Guard>
      <Profile />
    </Guard>
  );
}
