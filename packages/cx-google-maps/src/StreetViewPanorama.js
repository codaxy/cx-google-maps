import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';
import { sameLatLng } from './sameLatLng';

const settableProps = {
    links: { structured: true },
    motionTracking: undefined,
    options: { structured: true },
    pano: undefined,
    position: { structured: true },
    pov: { structured: true },
    zoom: undefined,
};

const propSetterMap = standardSetterMap(settableProps);

export class StreetViewPanorama extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, pano } = instance;
        let { rawData } = cached;
        if (!pano || !rawData) return;

        autoUpdate(pano, data, rawData, propSetterMap);
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

        if (widget.position && widget.position.bind) {
            pano.addListener('position_changed', (e) => {
                let pos = pano.getPosition();
                let pd = { lat: pos.lat(), lng: pos.lng() };
                if (!sameLatLng(pd, instance.data.position)) {
                    instance.set('position', pd, true);
                }
            });
        }

        if (widget.pov && widget.pov.bind) {
            pano.addListener('pov_changed', (e) => {
                let pov = pano.getPov();
                if (pov.heading != instance.data.heading || pov.pitch != instance.data.pitch) {
                    instance.set('pov', pov, true);
                }
            });
        }

        if (widget.zoom && widget.zoom.bind) {
            pano.addListener('zoom_changed', (e) => {
                let zoom = pano.getZoom();
                if (zoom != instance.data.zoom) {
                    instance.set('zoom', zoom, true);
                }
            });
        }

        if (widget.pano && widget.pano.bind) {
            pano.addListener('pano_changed', (e) => {
                let p = pano.getPano();
                if (p != instance.data.pano) {
                    instance.set('pano', p, true);
                }
            });
        }

        attachEventCallbacks(pano, instance, {
            closeclick: 'onCloseClick',
            pano_changed: 'onPanoChanged',
            position_changed: 'onPositionChanged',
            pov_changed: 'onPovChanged',
            resize: 'onResize',
            status_changed: 'onStatusChanged',
            visible_changed: 'onVisibleChanged',
            zoom_changed: 'onZoomChanged',
        });

        instance.subscribeOnDestroy(() => {
            pano.setVisible(false);
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
