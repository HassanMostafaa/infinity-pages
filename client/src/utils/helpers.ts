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

/**
 * Checks whether a given URL is an external URL, i.e., whether its origin
 * differs from the origin of the current page.
 *
 * @param url - The URL to check
 * @returns `true` if the URL is external, `false` otherwise
 *
 * @example
 * isExternalUrl('https://example.com') // true
 * isExternalUrl('https://myapp.com/about') // false
 * isExternalUrl('about') // false
 * isExternalUrl('') // false
 */
export const isExternalUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.origin !== window.location.origin;
  } catch (error) {
    console.error("Invalid URL:", url, error);
    return false;
  }
};
