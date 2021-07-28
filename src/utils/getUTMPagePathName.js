/**
 * use-case: to be used in UTM data for page
 * @param {String} pathname - location.pathname
 * @returns {String} pathNameString - stripped of '/' and replace '/' with '_'
 * @example getUTMPagePathName('/events/workshop/hasura-typescript')
 * => events_workshop_hasura-typescript
 */
export const getUTMPagePathName = (pathname) => {
  if (!pathname) return "";
  if (pathname === "/") return "learn";

  let pathNameString = pathname;

  if (pathname.startsWith("/")) {
    pathNameString = pathNameString.slice(1);
  }

  if (pathname.endsWith("/")) {
    pathNameString = pathNameString.slice(0, -1);
  }

  return pathNameString.replace(/\//ig, "_");
}