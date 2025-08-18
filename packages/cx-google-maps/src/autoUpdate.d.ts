/**
 * Updates a component by invoking conventional setter methods for properties whose values changed.
 *
 * Compares `data` vs `rawData` and, for each changed property (not excluded),
 * calls the corresponding setter on `component` as defined in `setterMap`.
 *
 * @typeParam T - Component type that exposes setter methods (e.g., `{ setZoom(n: number): void }`).
 * @typeParam K - Keys considered for change detection and mapping to setters.
 *
 * @param component - Target instance on which setter methods will be invoked.
 * @param data - Current property values (source of truth after changes).
 * @param rawData - Previous property values used for comparison.
 * @param setterMap - Map from property key to the name of a setter method on `component`.
 * @param options - Optional behavior flags.
 * @param options.exclude - Properties to skip from change detection and updates.
 *
 * @returns A map of properties that were updated (`true` for each changed key).
 *
 * @throws {Error} If a mapped setter name is missing or not a function on `component`.
 */
export declare function autoUpdate<T extends object, K extends keyof any = keyof any>(
    component: T,
    data: Record<K, any>,
    rawData: Record<K, any>,
    setterMap: Record<K, keyof T>,
    options?: {
        exclude?: Partial<Record<K, boolean>>;
    },
): Partial<Record<K, boolean>>;
