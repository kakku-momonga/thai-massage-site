/**
 * Resolves the absolute path for an image based on the base URL.
 * Handles cases where the app is deployed in a subdirectory.
 * 
 * @param path - The absolute path to the image (e.g., "/image/foot.jpg")
 * @returns The resolved path including the base URL (e.g., "/thai-massage-site/image/foot.jpg")
 */
export const resolveImagePath = (path: string): string => {
    const baseUrl = import.meta.env.BASE_URL;

    // If base URL is just root, return path as is (assuming path starts with /)
    if (baseUrl === '/') {
        return path;
    }

    // Remove leading slash from path to avoid double slashes if needed,
    // but usually joining baseUrl (ending with /) and path (starting with /) works fine in browsers.
    // However, to be cleaner:
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // baseUrl usually ends with /
    return `${baseUrl}${cleanPath}`;
};
