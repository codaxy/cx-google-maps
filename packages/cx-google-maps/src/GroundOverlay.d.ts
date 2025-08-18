import { Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface GroundOverlayProps extends PureContainerProps {
    /**
     * The rectangular bounds where the overlay image will be displayed.
     * Can be a `LatLngBounds` object or a literal with `north`, `south`, `east`, and `west` properties.
     */
    bounds?: Prop<google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral>;

    /**
     * The URL of the image to be used as the overlay.
     */
    url?: StringProp;

    /**
     * Options for the native `google.maps.GroundOverlay`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.GroundOverlayOptions>;

    /**
     * Fired when the overlay is clicked.
     *
     * @param e - Google Maps click event.
     * @param instance - The Cx widget instance.
     * @param overlay - The native `google.maps.GroundOverlay` instance.
     */
    onClick?: (e: any, instance: Instance, overlay: google.maps.GroundOverlay) => void;

    /**
     * Fired when the overlay is double-clicked.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param overlay - The native `google.maps.GroundOverlay` instance.
     */
    onDblClick?: (e: any, instance: Instance, overlay: google.maps.GroundOverlay) => void;

    /**
     * Called after the native `google.maps.GroundOverlay` is created.
     *
     * @param overlay - The native `google.maps.GroundOverlay` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (overlay: google.maps.GroundOverlay, instance: Instance) => void;
}

export class GroundOverlay extends Widget<GroundOverlayProps> {}
