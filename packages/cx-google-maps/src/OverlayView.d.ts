import { Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface OverlayViewProps extends PureContainerProps {
    /**
     * The name of the map pane into which the overlay will be inserted.
     * Must be one of the pane names returned by `google.maps.OverlayView.getPanes()`,
     * such as `"mapPane"`, `"overlayLayer"`, `"overlayShadow"`, `"overlayImage"`, or `"floatPane"`.
     */
    mapPaneName: StringProp;

    /**
     * The geographic position where the overlay should be anchored.
     * Can be a numeric array, a `LatLngLiteral`, or a `LatLng` object.
     */
    position?: Prop<number | google.maps.LatLngLiteral | google.maps.LatLng>;

    /**
     * Called after the overlay is initialized and attached to the map.
     *
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (instance: Instance) => void;
}

export class OverlayView extends Widget<OverlayViewProps> {}
