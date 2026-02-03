export const PARAM_KEY_NODE = 'nid'

/**
 * Encode a node path to a URL-safe string
 */
export function encodeNodePath(path: string[]): string {
  return path.map(segment => encodeURIComponent(segment)).join('/')
}

/**
 * Decode a URL-safe string back to a node path
 */
export function decodeNodePath(encoded: string): string[] {
  return encoded.split('/').map(segment => decodeURIComponent(segment))
}
