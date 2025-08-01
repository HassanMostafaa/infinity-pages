/**
 * Builds a URL slug from an array of strings
 * @param slug - An array of strings which will be joined by "/"
 * @returns A string representing the URL slug
 * @example
 * buildSlug(['about', 'team']) // returns "about/team"
 * buildSlug(undefined) // returns "home"
 */
export const slugBuilder = async (
  slug: string[] | undefined
): Promise<string> => {
  if (!slug || slug.length === 0) {
    return "/home";
  }
  return "/" + slug.join("/");
};
