// Datos del titular que aparecen en el pie y en las páginas legales.
// Lo que va entre corchetes hay que completarlo antes de salir a producción.
export const LEGAL = {
  site: "Поехали",
  owner: "Lara Julian",
  taxId: "1726384595",
  address: "Quito, Ecuador",
  email: "juli2003juli@hotmail.com",
  // País cuyas leyes rigen los términos y ciudad de sus tribunales.
  country: "Ecuador",
  courts: "Quito",
  authority: "https://spdp.gob.ec/",
  // Fecha de la última revisión de los textos; cámbiala cada vez que los edites.
  updated: "14 de octubre de 2026",
  minAge: 18,
};

export const LEGAL_PAGES = [
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/creditos", label: "Créditos" },
];
