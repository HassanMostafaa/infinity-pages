/**
 * Builds a URL slug from an array of strings
 * @param slug - An array of strings which will be joined by "/"
 * @returns A string representing the URL slug
 * @example
 * buildSlug(['about', 'team']) // returns "about/team"
 * buildSlug(undefined) // returns "home"
 */
export const buildPageSlug = (slug: string[] | undefined): string => {
  if (!slug || slug.length === 0) {
    return "home";
  }
  return slug.join("/");
};
