import { BooleanProp, Prop, PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from "cx/src/ui/Instance";

export interface PolylineProps extends PureContainerProps {
  /**
   * Whether the polyline can be dragged.
   */
  draggable?: BooleanProp;

  /**
   * Whether the polyline can be edited by the user.
   * When enabled, vertex changes will be reflected in the bound `path`.
   */
  editable?: BooleanProp;

  /**
   * Options for the native `google.maps.Polyline`.
   * Structured/bindable.
   */
  options?: Prop<google.maps.PolylineOptions>;

  /**
   * The path of the polyline as an array of coordinates.
   * Can be bound to automatically reflect user edits.
   */
  path: Prop<google.maps.LatLngLiteral[]>;

  /**
   * Fired when the polyline is clicked.
   */
  onClick?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the polyline is double-clicked.
   */
  onDblClick?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired repeatedly while the polyline is dragged.
   */
  onDrag?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the user finishes dragging the polyline.
   */
  onDragEnd?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the user starts dragging the polyline.
   */
  onDragStart?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the user presses the mouse button down on the polyline.
   */
  onMouseDown?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the mouse pointer leaves the polyline.
   */
  onMouseOut?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the mouse pointer enters the polyline.
   */
  onMouseOver?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the user releases the mouse button over the polyline.
   */
  onMouseUp?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Fired when the user right-clicks on the polyline.
   */
  onRightClick?: (e: any, instance: Instance, polyline: google.maps.Polyline) => void;

  /**
   * Called after the native `google.maps.Polyline` is created.
   *
   * @param polyline - The native `google.maps.Polyline` instance.
   * @param instance - The Cx widget instance.
   */
  pipeInstance?: (polyline: google.maps.Polyline, instance: Instance) => void;
}

export class Polyline extends Widget<PolylineProps> {}
