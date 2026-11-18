export const SITE_TITLE = "Lumen Notes"
export const SITE_DESCRIPTION =
  "Product updates and engineering notes from the Lumen team."

// Prefix a root-relative path with the configured `base`.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")
  return `${base}/${path.replace(/^\//, "")}`
}
