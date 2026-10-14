import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";
const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
// Con NEXT_PUBLIC_API_URL="/api" la API se sirve desde este mismo dominio (ver
// rewrites): la conexión ya entra en 'self'.
const apiOrigin = apiUrl.startsWith("/") ? "" : new URL(apiUrl).origin;
// Dirección real de la API cuando el frontend la reenvía, p. ej.
// https://mi-api.up.railway.app. Así la cookie de sesión es del mismo sitio que
// la web y ningún navegador la bloquea como cookie de terceros.
const apiProxyTarget = process.env.API_PROXY_TARGET?.replace(/\/+$/, "");
const google = "https://accounts.google.com";

// Política de contenido: el navegador solo carga código de este sitio y del
// botón de Google, y solo habla con la API. Limita el daño de un XSS aunque
// la sesión vaya en una cookie httpOnly que el JavaScript no puede leer.
const csp = [
  "default-src 'self'",
  // Next inyecta scripts en línea; en desarrollo además necesita eval.
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}${google}/gsi/client`,
  `style-src 'self' 'unsafe-inline' ${google}/gsi/style`,
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  ["connect-src 'self'", apiOrigin, `${google}/gsi/`].filter(Boolean).join(" "),
  `frame-src ${google}/gsi/`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Nadie puede incrustar el sitio en un iframe (clickjacking).
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // El enlace de confirmación lleva un token en la URL: fuera del sitio solo
  // se comparte el origen, nunca la ruta.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ...(isDev
    ? []
    : [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]),
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async rewrites() {
    return apiProxyTarget
      ? [{ source: "/api/:path*", destination: `${apiProxyTarget}/api/:path*` }]
      : [];
  },
};

export default nextConfig;
