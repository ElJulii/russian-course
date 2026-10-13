"use client";

import { useState, type CSSProperties } from "react";
import { Guard, Loading, Notice, useAction } from "@/components/ui";
import { api, type Page, type Role, type User } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { ROLES } from "@/lib/labels";
import { useApi } from "@/lib/useApi";

interface PlatformStats {
  usersByRole: Partial<Record<Role, number>>;
  coursesByStatus: Partial<Record<string, number>>;
  enrollmentsByStatus: Partial<Record<string, number>>;
}

type UserRow = User & {
  isActive: boolean;
  _count: { enrollments: number };
};

// Alta de cuentas por un admin. La API genera una contraseña inicial
// aleatoria y la devuelve una sola vez para mostrarla.
function NewUser({ onCreated }: { onCreated: () => void }) {
  const action = useAction();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT" as Role,
  });
  const [created, setCreated] = useState<(User & { initialPassword: string }) | null>(
    null,
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCreated(null);
    void action.run(async () => {
      setCreated(
        await api<User & { initialPassword: string }>("/users", {
          method: "POST",
          body: form,
        }),
      );
      setForm({ ...form, firstName: "", lastName: "", email: "" });
      onCreated();
    });
  };

  return (
    <form className="panel stack" onSubmit={submit}>
      <h2>Crear una cuenta</h2>
      <div className="form-grid">
        <label className="field">
          <span>Nombre</span>
          <input
            className="input"
            required
            minLength={2}
            maxLength={40}
            placeholder="Ivana"
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
            placeholder="Ivanova"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Correo</span>
          <input
            className="input"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Rol</span>
          <select
            className="input"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value as Role })}
          >
            {Object.entries(ROLES).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="small muted">
        Al crear la cuenta verás su contraseña inicial una sola vez: cópiala y
        entrégasela a la persona, que podrá cambiarla en su perfil.
      </p>
      <Notice>{action.error}</Notice>
      <Notice ok>
        {created &&
          `Cuenta creada para ${created.name}. Su contraseña inicial es ${created.initialPassword} (no se volverá a mostrar).`}
      </Notice>
      <button className="btn btn-primary" disabled={action.busy}>
        Crear cuenta
      </button>
    </form>
  );
}

function Admin() {
  const { user: me } = useAuth();
  const [role, setRole] = useState<Role | "">("");
  const [search, setSearch] = useState("");
  const query = new URLSearchParams({ limit: "100" });
  if (role) query.set("role", role);
  if (search.trim()) query.set("search", search.trim());

  const users = useApi<Page<UserRow>>(`/users?${query}`);
  const stats = useApi<PlatformStats>("/users/stats");
  const action = useAction();

  const update = (id: string, path: "role" | "status", body: object) =>
    action.run(async () => {
      await api(`/users/${id}/${path}`, { method: "PATCH", body });
      users.reload();
      stats.reload();
    });

  // Cuenta cuyo borrado está pendiente de confirmar.
  const [confirming, setConfirming] = useState<string | null>(null);
  const remove = (id: string) =>
    action.run(async () => {
      await api(`/users/${id}`, { method: "DELETE" });
      setConfirming(null);
      users.reload();
      stats.reload();
    });

  return (
    <main className="shell page stack" style={{ "--gap": "1.75rem" } as CSSProperties}>
      <h1>Usuarios</h1>

      {stats.data && (
        <dl className="figures">
          <div>
            <dt>Estudiantes</dt>
            <dd>{stats.data.usersByRole.STUDENT ?? 0}</dd>
          </div>
          <div>
            <dt>Admins</dt>
            <dd>{stats.data.usersByRole.ADMIN ?? 0}</dd>
          </div>
          <div>
            <dt>Cursos publicados</dt>
            <dd>{stats.data.coursesByStatus.PUBLISHED ?? 0}</dd>
          </div>
          <div>
            <dt>Viajes en curso</dt>
            <dd>{stats.data.enrollmentsByStatus.ACTIVE ?? 0}</dd>
          </div>
        </dl>
      )}

      <NewUser
        onCreated={() => {
          users.reload();
          stats.reload();
        }}
      />

      <div className="row">
        <input
          className="input"
          style={{ maxWidth: "18rem" }}
          type="search"
          placeholder="Buscar por nombre o correo"
          aria-label="Buscar por nombre o correo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="input"
          style={{ maxWidth: "12rem" }}
          aria-label="Filtrar por rol"
          value={role}
          onChange={(e) => setRole(e.target.value as Role | "")}
        >
          <option value="">Todos los roles</option>
          {Object.entries(ROLES).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <Notice>{action.error}</Notice>
      <Loading loading={users.loading} error={users.error} />

      {users.data && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Persona</th>
                <th>Rol</th>
                <th className="num">Inscripciones</th>
                <th>Acceso</th>
              </tr>
            </thead>
            <tbody>
              {users.data.data.map((user) => {
                const isMe = user.id === me?.id;
                return (
                  <tr key={user.id}>
                    <td>
                      <strong>
                        {user.lastName}, {user.firstName}
                      </strong>
                      {isMe && " (tú)"}
                      <div className="small muted">{user.email}</div>
                    </td>
                    <td>
                      <select
                        className="input"
                        style={{ padding: "0.3rem 0.5rem", width: "auto" }}
                        aria-label={`Rol de ${user.name}`}
                        value={user.role}
                        disabled={isMe || action.busy}
                        onChange={(e) => update(user.id, "role", { role: e.target.value })}
                      >
                        {Object.entries(ROLES).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="num">{user._count.enrollments}</td>
                    <td>
                      {confirming === user.id ? (
                        <div className="row">
                          <span className="small">¿Eliminar con todo su avance?</span>
                          <button
                            className="btn btn-quiet btn-danger"
                            disabled={action.busy}
                            onClick={() => remove(user.id)}
                          >
                            Sí, eliminar
                          </button>
                          <button
                            className="btn btn-quiet"
                            disabled={action.busy}
                            onClick={() => setConfirming(null)}
                          >
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        <div className="row">
                          <button
                            className={
                              user.isActive ? "btn btn-quiet btn-danger" : "btn btn-quiet"
                            }
                            disabled={isMe || action.busy}
                            onClick={() =>
                              update(user.id, "status", { isActive: !user.isActive })
                            }
                          >
                            {user.isActive ? "Bloquear" : "Desbloquear"}
                          </button>
                          {user.role === "STUDENT" && (
                            <button
                              className="btn btn-quiet btn-danger"
                              disabled={action.busy}
                              onClick={() => setConfirming(user.id)}
                            >
                              Eliminar
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default function AdminPage() {
  return (
    <Guard roles={["ADMIN"]}>
      <Admin />
    </Guard>
  );
}
