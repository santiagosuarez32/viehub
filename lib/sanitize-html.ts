/**
 * Sanitiza HTML de forma segura en servidor (Vercel/serverless).
 * Usa DOMPurify cuando está disponible; si falla (p. ej. en edge), hace un strip básico.
 */
function stripScripts(html: string): string {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
}

export function sanitizeHtml(html: string): string {
  if (typeof html !== "string") return ""
  try {
    const DOMPurify = require("isomorphic-dompurify") as { sanitize: (s: string) => string; clearWindow?: () => void }
    const out = DOMPurify.sanitize(html)
    if (typeof DOMPurify.clearWindow === "function") DOMPurify.clearWindow()
    return out
  } catch {
    return stripScripts(html)
  }
}
