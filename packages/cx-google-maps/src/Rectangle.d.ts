import { BooleanProp, Prop, PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from "cx/src/ui/Instance";

export interface RectangleProps extends PureContainerProps {
    /**
     * The geographic bounds of the rectangle.
     * Can be a `LatLngBounds` object or a literal with
     * `{ north, south, east, west }`.
     */
    bounds: Prop<google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral>;

    /**
     * Whether the rectangle can be dragged.
     */
    draggable?: BooleanProp;

    /**
     * Whether the rectangle can be edited by the user.
     * When enabled, bound values will update when the user resizes the rectangle.
     */
    editable?: BooleanProp;

    /**
     * Options for the native `google.maps.Rectangle`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.RectangleOptions>;

    /**
     * Fired when the rectangle is clicked.
     */
    onClick?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the rectangle is double-clicked.
     */
    onDblClick?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired repeatedly while the rectangle is dragged.
     */
    onDrag?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the user finishes dragging the rectangle.
     */
    onDragEnd?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the user starts dragging the rectangle.
     */
    onDragStart?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the user presses the mouse button down on the rectangle.
     */
    onMouseDown?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the mouse pointer leaves the rectangle.
     */
    onMouseOut?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the mouse pointer enters the rectangle.
     */
    onMouseOver?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the user releases the mouse button over the rectangle.
     */
    onMouseUp?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the rectangle’s bounds change.
     */
    onBoundsChanged?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Fired when the user right-clicks on the rectangle.
     */
    onRightClick?: (e: any, instance: Instance, rectangle: google.maps.Rectangle) => void;

    /**
     * Called after the native `google.maps.Rectangle` is created.
     *
     * @param rectangle - The native `google.maps.Rectangle` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (rectangle: google.maps.Rectangle, instance: Instance) => void;
}

export class Rectangle extends Widget<RectangleProps> {}
