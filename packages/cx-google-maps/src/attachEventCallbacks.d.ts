import { Instance } from 'cx/src/ui/Instance';

/**
 * Registers event listeners on a target based on a map of
 * `eventName -> handlerPropName`. For each entry, if `instance.widget[handlerPropName]`
 * is defined, it attaches a listener via `target.addListener(eventName, cb)` that invokes:
 * `instance.invoke(handlerPropName, event, instance, target)`.
 *
 * @typeParam E - Type of the event object passed to callbacks (defaults to `any`).
 * @typeParam H - Type returned by `addListener` (e.g., MapsEventListener) (defaults to `any`).
 *
 * @param target - Object exposing `addListener(event, callback) => H`.
 * @param instance - Cx instance whose `widget` may define handler props.
 * @param eventMap - Map of native event names to widget handler prop names.
 *
 * @returns Array of listener handles returned by `addListener`, in the order attached.
 */
export declare function attachEventCallbacks<E = any, H = any>(
    target: { addListener(event: string, cb: (e: E) => void): H },
    instance: Instance,
    eventMap: Record<string, string>,
): H[];
