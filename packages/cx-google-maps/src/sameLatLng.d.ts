export interface LatLngLiteral {
  lat: number;
  lng: number;
}

/**
 * Compares two latitude/longitude objects and returns `true`
 * if both are defined and have the same `lat` and `lng` values,
 * or if both references are strictly equal.
 *
 * @param a - A `LatLngLiteral` object or `undefined`.
 * @param b - A `LatLngLiteral` object or `undefined`.
 * @returns `true` if both represent the same coordinates.
 */
export declare function sameLatLng(
  a?: LatLngLiteral,
  b?: LatLngLiteral
): boolean;
