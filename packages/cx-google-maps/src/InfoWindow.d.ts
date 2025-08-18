import { NumberProp, Prop, PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface InfoWindowProps extends PureContainerProps {
    /**
     * Options for the native `google.maps.InfoWindow`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.InfoWindowOptions>;

    /**
     * The z-index of the info window.
     */
    zIndex?: NumberProp;

    /**
     * The geographic position where the info window should be anchored.
     * Can be a static `{ lat, lng }` object or a bound value.
     */
    position?: Prop<{ lat: number; lng: number }>;

    /**
     * Fired when the close button is clicked.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoWindow - The native `google.maps.InfoWindow` instance.
     */
    onCloseClick?: (e: any, instance: Instance, infoWindow: google.maps.InfoWindow) => void;

    /**
     * Fired when the info window DOM is ready.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoWindow - The native `google.maps.InfoWindow` instance.
     */
    onDomReady?: (e: any, instance: Instance, infoWindow: google.maps.InfoWindow) => void;

    /**
     * Fired when the info window content changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoWindow - The native `google.maps.InfoWindow` instance.
     */
    onContentChanged?: (e: any, instance: Instance, infoWindow: google.maps.InfoWindow) => void;

    /**
     * Fired when the info window position changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoWindow - The native `google.maps.InfoWindow` instance.
     */
    onPositionChanged?: (e: any, instance: Instance, infoWindow: google.maps.InfoWindow) => void;

    /**
     * Fired when the info window z-index changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoWindow - The native `google.maps.InfoWindow` instance.
     */
    onZindexChanged?: (e: any, instance: Instance, infoWindow: google.maps.InfoWindow) => void;

    /**
     * Called after the native `google.maps.InfoWindow` is created.
     *
     * @param infoWindow - The native `google.maps.InfoWindow` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (infoWindow: google.maps.InfoWindow, instance: Instance) => void;
}

export class InfoWindow extends Widget<InfoWindowProps> {}
