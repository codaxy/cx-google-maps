import { BooleanProp, PureContainerProps, Widget } from 'cx/src/core';

export interface TrafficLayerProps extends PureContainerProps {
    /**
     * If true, the traffic layer automatically refreshes with the latest traffic data.
     */
    autoRefresh?: BooleanProp;

    /**
     * Fired when the user clicks on the traffic layer.
     */
    onClick?: (event: google.maps.MapMouseEvent) => void;
}

/**
 * Wraps a Google Maps TrafficLayer and binds its properties/events to CxJS widgets.
 */
export class TrafficLayer extends Widget<TrafficLayerProps> {}
