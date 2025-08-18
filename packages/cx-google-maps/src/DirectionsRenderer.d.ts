import {
    BooleanProp,
    HtmlElementProps,
    NumberProp,
    Prop,
    PureContainerProps,
    Widget,
} from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface DirectionsRendererProps extends PureContainerProps {
    /**
     * Directions data to render (`google.maps.DirectionsResult`).
     * Structured/bindable; updates are propagated to the native renderer.
     */
    directions?: Prop<google.maps.DirectionsResult>;

    /**
     * Options passed to the native `google.maps.DirectionsRenderer`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.DirectionsRendererOptions>;

    /**
     * Panel element used by the directions renderer for textual output.
     * Structured/bindable.
     */
    panel?: Prop<HtmlElement>;

    /**
     * Zero-based index of the route to display.
     */
    routeIndex?: NumberProp;

    /**
     * Fired when the displayed directions change.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param renderer - The native `google.maps.DirectionsRenderer` instance.
     */
    onDirectionsChanged?: (e: any, instance: Instance, renderer: google.maps.DirectionsRenderer) => void;

    /**
     * Called after the native `google.maps.DirectionsRenderer` is created.
     *
     * @param renderer - The native `google.maps.DirectionsRenderer` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (renderer: google.maps.DirectionsRenderer, instance: Instance) => void;
}

export class DirectionsRenderer extends Widget<DirectionsRendererProps> {}
