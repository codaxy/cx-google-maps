import { BooleanProp, NumberProp, Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';

export interface StreetViewPanoramaProps extends PureContainerProps {
    /**
     * Array of navigational links to adjacent Street View panoramas.
     */
    links?: Prop<google.maps.StreetViewLink[]>;

    /**
     * Options that control Street View motion tracking behavior.
     */
    motionTracking?: Prop<google.maps.MotionTrackingControlOptions>;

    /**
     * Street View panorama initialization options.
     */
    options?: Prop<google.maps.StreetViewPanoramaOptions>;

    /**
     * The panorama ID for the Street View location.
     */
    pano?: StringProp;

    /**
     * The position (LatLng or LatLngLiteral) of the panorama.
     */
    position?: Prop<google.maps.LatLng | google.maps.LatLngLiteral>;

    /**
     * The point of view for the panorama, including heading and pitch.
     */
    pov?: Prop<google.maps.StreetViewPov>;

    /**
     * The zoom level for the panorama.
     */
    zoom?: NumberProp;

    /**
     * Fired when the close button is clicked.
     */
    onCloseClick?: (event: google.maps.MapMouseEvent) => void;

    /**
     * Fired when the panorama ID changes.
     */
    onPanoChanged?: () => void;

    /**
     * Fired when the panorama position changes.
     */
    onPositionChanged?: () => void;

    /**
     * Fired when the panorama POV changes.
     */
    onPovChanged?: () => void;

    /**
     * Fired when the panorama is resized.
     */
    onResize?: () => void;

    /**
     * Fired when the panorama status changes.
     */
    onStatusChanged?: () => void;

    /**
     * Fired when the panorama visibility changes.
     */
    onVisibleChanged?: () => void;

    /**
     * Fired when the panorama zoom level changes.
     */
    onZoomChanged?: () => void;
}

/**
 * Wraps a Google Maps StreetViewPanorama and binds its properties/events to CxJS widgets.
 */
export class StreetViewPanorama extends Widget<StreetViewPanoramaProps> {}
