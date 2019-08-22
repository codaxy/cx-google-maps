import { VDOM, PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { sameLatLng } from './sameLatLng';
import { autoUpdate } from './autoUpdate';
import { standardSetterMap } from './standardSetterMap';
import MarkerClustererPlus from 'marker-clusterer-plus';
import { Slider, Menu } from 'cx/widgets';

const settableProps = {
    averageCenter: undefined,
    batchSizeIE: undefined,
    calculator: undefined,
    clusterClass: undefined,
    enableRetinaIcons: undefined,
    gridSize: undefined,
    ignoreHidden: undefined,
    imageExtension: undefined,
    imagePath: undefined,
    imageSizes: undefined,
    maxZoom: undefined,
    minimumClusterSize: undefined,
    styles: undefined,
    title: undefined,
    zoomOnClick: undefined
};

const propSetterMap = standardSetterMap(settableProps);

export class MarkerClusterer extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, markerClusterer } = instance;
        let { rawData } = cached;
        if (!markerClusterer || !rawData) return;

        if (data.averageCenter && !sameLatLng(data.averageCenter, rawData.averageCenter))
            markerClusterer.setPosition(data.averageCenter);

        // MarkerClustererPlus set methods will not cause repaint on property
        // change, so we need to perform it manually.
        let redraw = autoUpdate(markerClusterer, data, rawData, propSetterMap, {
            exclude: { "averageCenter": true }
        });

        if (redraw) {
            markerClusterer.repaint();
        }
    }

    initMarkerClusterer(context, instance) {
        let { widget, data } = instance;

        this.map = context.googleMap;
        let markerClusterer = (instance.markerClusterer = new MarkerClustererPlus(context.googleMap, [], data));

        if (widget.pipeInstance) instance.invoke('pipeInstance', markerClusterer, instance);

        attachEventCallbacks(markerClusterer, instance, {
            click: 'onClick',
            clusteringbegin: 'onClusteringBegin',
            clusteringend: 'onClusteringEnd',
            mouseout: 'onMouseOut',
            mouseover: 'onMouseOver',
        });
    }

    explore(context, instance) {
        if (!instance.markerClusterer)
            this.initMarkerClusterer(context, instance);

        context.push('markerClusterer', instance.markerClusterer);

        super.explore(context, instance);
    }

    exploreCleanup(context) {
        context.pop('markerClusterer');
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
