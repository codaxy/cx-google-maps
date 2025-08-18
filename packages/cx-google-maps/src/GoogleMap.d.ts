import { NumberProp, Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface GoogleMapProps extends PureContainerProps {
    /**
     * The map center coordinates.
     * Can be a static `{ lat, lng }` object or a bound value.
     * When bound, updates from user interaction are propagated back.
     */
    center?: Prop<google.maps.LatLng | google.maps.LatLngLiteral>;

    /**
     * The heading for aerial imagery in degrees.
     */
    heading?: NumberProp;

    /**
     * The map type ID (e.g. `"roadmap"`, `"satellite"`, `"hybrid"`, `"terrain"`).
     */
    mapTypeId?: StringProp;

    /**
     * Options for the native `google.maps.Map`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.MapOptions>;

    /**
     * The associated `google.maps.StreetViewPanorama`.
     */
    streetView?: Prop<google.maps.StreetViewPanorama>;

    /**
     * The tilt angle of the map.
     */
    tilt?: NumberProp;

    /**
     * The zoom level of the map.
     * Can be static or bound; when bound, user zoom changes
     * will update the bound value.
     */
    zoom?: NumberProp;

    /**
     * Fired when the user clicks on the map.
     *
     * @param e - Google Maps click event.
     * @param instance - The Cx widget instance.
     * @param map - The native `google.maps.Map` instance.
     */
    onClick?: (e: any, instance: Instance, map: google.maps.Map) => void;

    /**
     * Fired when the map center changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param map - The native `google.maps.Map` instance.
     */
    onCenterChanged?: (e: any, instance: Instance, map: google.maps.Map) => void;

    /**
     * Fired when the zoom level changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param map - The native `google.maps.Map` instance.
     */
    onZoomChanged?: (e: any, instance: Instance, map: google.maps.Map) => void;

    /**
     * Called after the native `google.maps.Map` is created.
     *
     * @param map - The native `google.maps.Map` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (map: google.maps.Map, instance: Instance) => void;
}

export class GoogleMap extends Widget<GoogleMapProps> {}
