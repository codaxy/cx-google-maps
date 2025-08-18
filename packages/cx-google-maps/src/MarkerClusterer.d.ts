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

export interface MarkerClustererProps extends PureContainerProps {
    /**
     * Whether the cluster’s center should be the average of its markers’ positions.
     */
    averageCenter?: BooleanProp;

    /**
     * Batch size for Internet Explorer when adding markers.
     */
    batchSizeIE?: NumberProp;

    /**
     * Function used to determine the text and style of a cluster icon.
     */
    calculator?: any;

    /**
     * The CSS class for the cluster.
     */
    clusterClass?: ClassProp;

    /**
     * Whether to enable retina icons.
     */
    enableRetinaIcons?: BooleanProp;

    /**
     * The grid size (in pixels) for clustering markers.
     */
    gridSize?: NumberProp;

    /**
     * Whether to ignore hidden markers when clustering.
     */
    ignoreHidden?: BooleanProp;

    /**
     * File extension for cluster images (e.g. `"png"`).
     */
    imageExtension?: StringProp;

    /**
     * The image path for cluster icons.
     */
    imagePath?: Prop<string>;

    /**
     * The sizes of the cluster icons.
     */
    imageSizes?: Prop<number[]>;

    /**
     * The maximum zoom level at which clustering is enabled.
     */
    maxZoom?: NumberProp;

    /**
     * The minimum number of markers to form a cluster.
     */
    minimumClusterSize?: NumberProp;

    /**
     * An array of styles for cluster icons.
     */
    styles?: Prop<any[]>;

    /**
     * The tooltip for cluster icons.
     */
    title?: StringProp;

    /**
     * Whether to zoom into the cluster bounds when a cluster is clicked.
     */
    zoomOnClick?: BooleanProp;

    /**
     * Fired when a cluster is clicked.
     *
     * @param e - Cluster click event.
     * @param instance - The Cx widget instance.
     * @param clusterer - The native `MarkerClustererPlus` instance.
     */
    onClick?: (e: any, instance: Instance, clusterer: any) => void;

    /**
     * Fired when clustering begins.
     *
     * @param e - Event object.
     * @param instance - The Cx widget instance.
     * @param clusterer - The native `MarkerClustererPlus` instance.
     */
    onClusteringBegin?: (e: any, instance: Instance, clusterer: any) => void;

    /**
     * Fired when clustering ends.
     *
     * @param e - Event object.
     * @param instance - The Cx widget instance.
     * @param clusterer - The native `MarkerClustererPlus` instance.
     */
    onClusteringEnd?: (e: any, instance: Instance, clusterer: any) => void;

    /**
     * Fired when the mouse pointer leaves a cluster icon.
     *
     * @param e - Event object.
     * @param instance - The Cx widget instance.
     * @param clusterer - The native `MarkerClustererPlus` instance.
     */
    onMouseOut?: (e: any, instance: Instance, clusterer: any) => void;

    /**
     * Fired when the mouse pointer enters a cluster icon.
     *
     * @param e - Event object.
     * @param instance - The Cx widget instance.
     * @param clusterer - The native `MarkerClustererPlus` instance.
     */
    onMouseOver?: (e: any, instance: Instance, clusterer: any) => void;

    /**
     * Called after the native `MarkerClustererPlus` is created.
     *
     * @param clusterer - The native `MarkerClustererPlus` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (clusterer: any, instance: Instance) => void;
}

export class MarkerClusterer extends Widget<MarkerClustererProps> {}
