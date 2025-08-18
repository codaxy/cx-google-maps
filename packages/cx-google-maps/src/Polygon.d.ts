import { BooleanProp, Prop, PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from "cx/src/ui/Instance";

export interface PolygonProps extends PureContainerProps {
    /**
     * Whether the polygon can be dragged.
     */
    draggable?: BooleanProp;

    /**
     * Whether the polygon can be edited by the user.
     * When enabled, vertex changes will be reflected in the bound `path`.
     */
    editable?: BooleanProp;

    /**
     * Options for the native `google.maps.Polygon`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.PolygonOptions>;

    /**
     * The path of the polygon as an array of coordinates.
     * Can be bound to automatically reflect user edits.
     */
    path?: Prop<google.maps.LatLngLiteral[]>;

    /**
     * An array of paths for complex polygons (with holes).
     */
    paths?: Prop<Array<google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLngLiteral[]>>;

    /**
     * Fired when the polygon is clicked.
     */
    onClick?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the polygon is double-clicked.
     */
    onDblClick?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired repeatedly while the polygon is dragged.
     */
    onDrag?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the user finishes dragging the polygon.
     */
    onDragEnd?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the user starts dragging the polygon.
     */
    onDragStart?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the user presses the mouse button down on the polygon.
     */
    onMouseDown?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the mouse pointer leaves the polygon.
     */
    onMouseOut?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the mouse pointer enters the polygon.
     */
    onMouseOver?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the user releases the mouse button over the polygon.
     */
    onMouseUp?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Fired when the user right-clicks on the polygon.
     */
    onRightClick?: (e: any, instance: Instance, polygon: google.maps.Polygon) => void;

    /**
     * Called after the native `google.maps.Polygon` is created.
     *
     * @param polygon - The native `google.maps.Polygon` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (polygon: google.maps.Polygon, instance: Instance) => void;
}

export class Polygon extends Widget<PolygonProps> {}
