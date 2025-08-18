import { BooleanProp, NumberProp, PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface CircleProps extends PureContainerProps {
    /**
     * The center of the circle.
     * Can be a static `{ lat, lng }` object or a bound value.
     * When bound, changes in the circle’s center on the map
     * will update the bound value.
     */
    center?: Prop<google.maps.LatLng | google.maps.LatLngLiteral>;

    /**
     * Whether the circle is draggable.
     */
    draggable?: BooleanProp;

    /**
     * Whether the circle is editable.
     */
    editable?: BooleanProp;

    /**
     * Additional circle options passed to the native
     * `google.maps.Circle` constructor.
     */
    options?: Prop<google.maps.CircleOptions>;

    /**
     * The radius of the circle in meters.
     * Can be a static number or a bound value.
     * When bound, changes in the circle’s radius on the map
     * will update the bound value.
     */
    radius?: NumberProp;

    /**
     * Fired when the circle’s center changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onCenterChanged?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the circle is clicked.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onClick?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the circle is double-clicked.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onDblClick?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired repeatedly while the user drags the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onDrag?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the user finishes dragging the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onDragEnd?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the user starts dragging the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onDragStart?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the user presses the mouse button down on the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onMouseDown?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the mouse pointer leaves the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onMouseOut?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the mouse pointer enters the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onMouseOver?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the user releases the mouse button over the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onMouseUp?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the circle’s radius changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onRadiusChanged?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Fired when the user right-clicks on the circle.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param circle - The native `google.maps.Circle` instance.
     */
    onRightClick?: (e: any, instance: Instance, circle: google.maps.Circle) => void;

    /**
     * Called after the native `google.maps.Circle` is created.
     *
     * @param circle - The native `google.maps.Circle` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (circle: google.maps.Circle, instance: Instance) => void;
}

export class Circle extends Widget<CircleProps> {}
