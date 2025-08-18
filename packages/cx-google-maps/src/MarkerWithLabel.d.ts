import {
    BooleanProp,
    ClassProp,
    NumberProp,
    Prop,
    PureContainerProps,
    StringProp,
    Widget,
} from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface MarkerWithLabelProps extends PureContainerProps {
    /**
     * The animation to play when the marker is added to the map.
     */
    animation?: Prop<google.maps.Animation>;

    /**
     * Attribution information for the marker.
     */
    attribution?: any;

    /**
     * Whether the marker is clickable.
     */
    clickable?: BooleanProp;

    /**
     * The mouse cursor to show on hover.
     */
    cursor?: StringProp;

    /**
     * Whether the marker is draggable.
     */
    draggable?: BooleanProp;

    /**
     * The icon for the marker. Can be a URL string, `Icon`, or `Symbol`.
     */
    icon?: Prop<string | google.maps.Icon | google.maps.Symbol>;

    /**
     * The label for the marker. Can be a string or a `MarkerLabel`.
     */
    label?: Prop<string | google.maps.MarkerLabel>;

    /**
     * The anchor point for the label, relative to the marker’s position.
     */
    labelAnchor?: Prop<google.maps.Point>;

    /**
     * The CSS class applied to the label content container.
     */
    labelClass?: StringProp;

    /**
     * The CSS styles applied to the label.
     */
    labelStyle?: Prop<Partial<CSSStyleDeclaration> | Record<string, string | number>>;

    /**
     * Whether the label is visible.
     */
    labelVisible?: BooleanProp;

    /**
     * The opacity of the marker, from 0.0 (transparent) to 1.0 (opaque).
     */
    opacity?: NumberProp;

    /**
     * Additional options for the native `MarkerWithLabel`.
     */
    options?: Prop<google.maps.MarkerOptions>;

    /**
     * The associated `google.maps.Place`.
     */
    place?: Prop<google.maps.Place>;

    /**
     * The position of the marker on the map.
     * Can be a `LatLng` object or a literal `{ lat, lng }`.
     */
    position?: Prop<google.maps.LatLng | google.maps.LatLngLiteral>;

    /**
     * The clickable region of the marker icon.
     */
    shape?: Prop<google.maps.MarkerShape>;

    /**
     * The tooltip text to display when hovering over the marker.
     */
    title?: StringProp;

    /**
     * The z-index of the marker.
     */
    zIndex?: NumberProp;

    /**
     * Fired when the marker’s animation changes.
     */
    onAnimationChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker is clicked.
     */
    onClick?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s clickable state changes.
     */
    onClickableChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s cursor property changes.
     */
    onCursorChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker is double-clicked.
     */
    onDblClick?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired repeatedly while the marker is dragged.
     */
    onDrag?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the user finishes dragging the marker.
     */
    onDragEnd?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s draggable state changes.
     */
    onDraggableChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the user starts dragging the marker.
     */
    onDragStart?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s flat property changes.
     */
    onFlatChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s icon changes.
     */
    onIconChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the user presses the mouse button down on the marker.
     */
    onMouseDown?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the mouse pointer leaves the marker.
     */
    onMouseOut?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the mouse pointer enters the marker.
     */
    onMouseOver?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the user releases the mouse button over the marker.
     */
    onMouseUp?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s position changes.
     */
    onPositionChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the user right-clicks the marker.
     */
    onRightClick?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s shape changes.
     */
    onShapeChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s title changes.
     */
    onTitleChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s visible property changes.
     */
    onVisibleChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Fired when the marker’s z-index changes.
     */
    onZindexChanged?: (e: any, instance: Instance, marker: any) => void;

    /**
     * Called after the native `MarkerWithLabel` is created.
     *
     * @param marker - The native `MarkerWithLabel` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (marker: any, instance: Instance) => void;
}

export class MarkerWithLabel extends Widget<MarkerWithLabelProps> {}
