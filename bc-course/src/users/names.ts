// Nombre completo que se muestra en toda la plataforma.
export const fullName = (firstName: string, lastName: string) =>
  `${firstName} ${lastName}`;

// Contraseña de las cuentas de prueba del seed: nombre y apellido juntos, en
// minúsculas y sin espacios ni tildes ("Ivana Ivanova" → "ivanaivanova").
// Es adivinable a propósito: solo para desarrollo, nunca para cuentas reales.
export function defaultPassword(firstName: string, lastName: string): string {
  return (firstName + lastName)
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]/gu, '');
}
