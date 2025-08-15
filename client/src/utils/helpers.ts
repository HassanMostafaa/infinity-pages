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
  if (!slug || slug?.length === 0) {
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
  if (typeof window === "undefined") return false; // SSR guard
  try {
    if (!/^https?:\/\//i.test(url)) return false;
    return new URL(url).origin !== window.location.origin;
  } catch {
    return false;
  }
};

export const getCMSMediaURL = (mediaUrl: string | null | undefined): string => {
  if (!mediaUrl) {
    console.warn("No media URL provided", { mediaUrl });
    return "";
  }
  if (isExternalUrl(mediaUrl)) {
    return mediaUrl;
  }
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!strapiUrl) {
    console.error("Strapi URL is not defined in environment variables");
    return mediaUrl;
  }
  return strapiUrl + mediaUrl;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<F extends (...args: any[]) => void>(
  func: F,
  wait: number
) {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<F>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
