import { PureContainerProps, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface BicyclingLayerProps extends PureContainerProps {
    /**
     * Called when the bicycling layer is clicked.
     *
     * @param e - Google Maps click event (e.g. `google.maps.MapMouseEvent`).
     * @param instance - The Cx widget instance.
     * @param layer - The native `google.maps.BicyclingLayer` instance.
     */
    onClick?: (e: any, instance: Instance, layer: google.maps.BicyclingLayer) => void;

    /**
     * Called after the native `google.maps.BicyclingLayer` is created.
     *
     * @param layer - The native `google.maps.BicyclingLayer` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (layer: google.maps.BicyclingLayer, instance: Instance) => void;
}

export class BicyclingLayer extends Widget<BicyclingLayerProps> {}
