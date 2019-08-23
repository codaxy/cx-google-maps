
import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    links: { structured: true },
    motionTracking: undefined,
    options: { structured: true },
    pano: undefined,
    position: { structured: true },
    pov: { structured: true },
    zoom: undefined
};

const propSetterMap = standardSetterMap(settableProps);

export class StreetViewPanorama extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);
        console.log("BEFORECHANGES", changes);

        let { data, cached, pano } = instance;
        let { rawData } = cached;
        if (!pano || !rawData) return;

        let changes = autoUpdate(pano, data, rawData, propSetterMap);
        console.log("CHANGES", changes);
    }

    initPanorama(context, instance) {
        let { widget, data } = instance;

        let pano = (instance.pano = context.googleMap.getStreetView());
        if (pano) {
            pano.setVisible(true);
            // We need to set props for an existing object
            // manually, we're not using constructor with arguments.
            autoUpdate(pano, data, {}, propSetterMap);
        }

        if (widget.pipeInstance) instance.invoke('pipeInstance', pano, instance);

        // TODO: position, pov, zoom two-way binding?

        attachEventCallbacks(pano, instance, {
            closeclick: 'onCloseClick',
            pano_changed: 'onPanoChanged',
            position_changed: 'onPositionChanged',
            pov_changed: 'onPovChanged',
            resize: 'onResize',
            status_changed: 'onStatusChanged',
            visible_changed: 'onVisibleChanged',
            zoom_changed: 'onZoomChanged'
        });
    }

    explore(context, instance) {
        if (!instance.pano) this.initPanorama(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
