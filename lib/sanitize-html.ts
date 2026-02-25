/**
 * Sanitiza HTML de forma segura en servidor (Vercel/serverless).
 * Usa DOMPurify cuando está disponible; si falla (p. ej. en edge), hace un strip básico.
 */
function stripScripts(html: string): string {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
}

function addBuilderClass(html: string): string {
  return html.replace(/<(h1|h2|h3|h4|h5|h6|p|li|ul|ol|span|strong|em|a|blockquote)([^>]*)>/gi, (full, tag, attrs) => {
    const hasClass = /\bclass\s*=/.test(attrs)
    const hasBuilder = /\bbuilder-\b/.test(attrs)

    if (hasClass && !hasBuilder) {
      const updatedAttrs = attrs.replace(
        /\bclass\s*=\s*(["'])([^"']*)\1/i,
        (_m: string, quote: string, cls: string) => ` class=${quote}${cls} builder-${quote}`
      )
      return `<${tag}${updatedAttrs}>`
    }

    if (!hasClass) {
      return `<${tag} class="builder-"${attrs}>`
    }

    return `<${tag}${attrs}>`
  })
}

export function sanitizeHtml(html: string): string {
  if (typeof html !== "string") return ""
  try {
    const DOMPurify = require("isomorphic-dompurify") as { sanitize: (s: string) => string; clearWindow?: () => void }
    const out = addBuilderClass(DOMPurify.sanitize(html))
    if (typeof DOMPurify.clearWindow === "function") DOMPurify.clearWindow()
    return out
  } catch {
    return addBuilderClass(stripScripts(html))
  }
}
