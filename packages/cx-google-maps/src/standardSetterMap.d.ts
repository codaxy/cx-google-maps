/**
 * Converts a string to PascalCase by uppercasing the first character and keeping the rest intact.
 *
 * @param str - Input string (e.g., `"zIndex"`).
 * @returns The string with the first character uppercased (e.g., `"ZIndex"`).
 */
export declare function pascalCase(str: string): string;

/**
 * A mapping from property names to their conventional setter method names.
 * For a key `"zIndex"`, the mapped value will be a string literal like `"setZIndex"`.
 */
type SetterMap<T extends object> = {
    /** For each string key K of T, produce a setter name of the form "set" + Capitalize<K>. */
    [K in Extract<keyof T, string>]: `set${Capitalize<K>}`;
};

/**
 * Creates a convention-based setter name map from an object whose keys are settable properties.
 * Each key `k` in `props` becomes a value `"set" + PascalCase(k)` in the returned map.
 *
 * @typeParam T - An object type whose string keys represent settable property names.
 * @param props - Object whose keys are the names of settable properties.
 * @returns A map from each property key to its setter method name (e.g., `{ zIndex: "setZIndex" }`).
 *
 * @example
 * ```ts
 * const map = standardSetterMap({ zIndex: true, center: { structured: true } });
 * // map = { zIndex: "setZIndex", center: "setCenter" }
 * ```
 */
export declare function standardSetterMap<T extends Record<string, unknown>>(
    props: T,
): SetterMap<T>;
