import { Prop, PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface DrawingManagerProps extends PureContainerProps {
    /**
     * Current drawing mode (`"marker"`, `"circle"`, `"polygon"`, `"polyline"`, `"rectangle"`, or `null`).
     */
    drawingMode?: google.maps.drawing.OverlayType;

    /**
     * Options for the native `google.maps.drawing.DrawingManager`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.drawing.DrawingManagerOptions>;

    /**
     * Fired when the user completes drawing a circle.
     *
     * @param e - Google Maps event object containing the circle overlay.
     * @param instance - The Cx widget instance.
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     */
    onCircleComplete?: (e: any, instance: Instance, manager: google.maps.drawing.DrawingManager) => void;

    /**
     * Fired when the user completes drawing a marker.
     *
     * @param e - Google Maps event object containing the marker overlay.
     * @param instance - The Cx widget instance.
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     */
    onMarkerComplete?: (e: any, instance: Instance, manager: google.maps.drawing.DrawingManager) => void;

    /**
     * Fired when the user completes drawing any overlay.
     *
     * @param e - Google Maps event object containing the overlay.
     * @param instance - The Cx widget instance.
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     */
    onOverlayComplete?: (
        e: any,
        instance: Instance,
        manager: google.maps.drawing.DrawingManager,
    ) => void;

    /**
     * Fired when the user completes drawing a polygon.
     *
     * @param e - Google Maps event object containing the polygon overlay.
     * @param instance - The Cx widget instance.
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     */
    onPolygonComplete?: (
        e: any,
        instance: Instance,
        manager: google.maps.drawing.DrawingManager,
    ) => void;

    /**
     * Fired when the user completes drawing a polyline.
     *
     * @param e - Google Maps event object containing the polyline overlay.
     * @param instance - The Cx widget instance.
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     */
    onPolylineComplete?: (
        e: any,
        instance: Instance,
        manager: google.maps.drawing.DrawingManager,
    ) => void;

    /**
     * Fired when the user completes drawing a rectangle.
     *
     * @param e - Google Maps event object containing the rectangle overlay.
     * @param instance - The Cx widget instance.
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     */
    onRectangleComplete?: (
        e: any,
        instance: Instance,
        manager: google.maps.drawing.DrawingManager,
    ) => void;

    /**
     * Called after the native `google.maps.drawing.DrawingManager` is created.
     *
     * @param manager - The native `google.maps.drawing.DrawingManager` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (manager: google.maps.drawing.DrawingManager, instance: Instance) => void;
}

export class DrawingManager extends Widget<DrawingManagerProps> {}
