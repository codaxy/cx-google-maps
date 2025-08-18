import { Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface HeatmapLayerProps extends PureContainerProps {
    /**
     * Optional URL source for heatmap data.
     */
    url?: StringProp;

    /**
     * Options for the native `google.maps.visualization.HeatmapLayer`.
     * Structured/bindable.
     */
    options?: Prop<google.maps.visualization.HeatmapLayerOptions>;

    /**
     * Fired when the heatmap layer is clicked.
     *
     * @param e - Google Maps click event.
     * @param instance - The Cx widget instance.
     * @param layer - The native `google.maps.visualization.HeatmapLayer` instance.
     */
    onClick?: (e: any, instance: Instance, layer: google.maps.visualization.HeatmapLayer) => void;

    /**
     * Called after the native `google.maps.visualization.HeatmapLayer` is created.
     *
     * @param layer - The native `google.maps.visualization.HeatmapLayer` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (layer: google.maps.visualization.HeatmapLayer, instance: Instance) => void;
}

export class HeatmapLayer extends Widget<HeatmapLayerProps> {}
