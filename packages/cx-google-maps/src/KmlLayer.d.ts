import { NumberProp, Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface KmlLayerProps extends PureContainerProps {
    /**
     * Options for the native `google.maps.KmlLayer`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.KmlLayerOptions>;

    /**
     * The default viewport defined in the KML layer.
     */
    defaultViewport?: Prop<google.maps.LatLngBounds>;

    /**
     * Metadata associated with the KML layer.
     */
    metadata?: Prop<google.maps.KmlLayerMetadata>;

    /**
     * The URL of the KML document to load.
     */
    url?: StringProp;

    /**
     * The z-index of the KML layer.
     */
    zIndex?: NumberProp;

    /**
     * Fired when a feature in the KML layer is clicked.
     *
     * @param e - Google Maps KML click event.
     * @param instance - The Cx widget instance.
     * @param layer - The native `google.maps.KmlLayer` instance.
     */
    onClick?: (e: any, instance: Instance, layer: google.maps.KmlLayer) => void;

    /**
     * Fired when the default viewport changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param layer - The native `google.maps.KmlLayer` instance.
     */
    onDefaultViewportChanged?: (e: any, instance: Instance, layer: google.maps.KmlLayer) => void;

    /**
     * Fired when the status of the KML layer changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param layer - The native `google.maps.KmlLayer` instance.
     */
    onStatusChanged?: (e: any, instance: Instance, layer: google.maps.KmlLayer) => void;

    /**
     * Called after the native `google.maps.KmlLayer` is created.
     *
     * @param layer - The native `google.maps.KmlLayer` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (layer: google.maps.KmlLayer, instance: Instance) => void;
}

export class KmlLayer extends Widget<KmlLayerProps> {}
