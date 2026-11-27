/** Turn a product name into a URL slug, e.g. "Canvas Tote Bag" -> "canvas-tote-bag". */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
