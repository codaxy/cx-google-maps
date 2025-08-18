import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { autoUpdate } from './autoUpdate';
import { standardSetterMap } from './standardSetterMap';

const settableProps = {
    directions: { structured: true },
    options: { structured: true },
    panel: { structured: true },
    routeIndex: undefined,
};

const propSetterMap = standardSetterMap(settableProps);

export class DirectionsRenderer extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, layer } = instance;
        let { rawData } = cached;
        if (!layer || !rawData) return;

        autoUpdate(layer, data, rawData, propSetterMap);
    }

    initLayer(context, instance) {
        let { widget, data } = instance;

        let layer = (instance.layer = new google.maps.DirectionsRenderer({
            ...data,
            map: context.googleMap,
        }));

        if (widget.pipeInstance) instance.invoke('pipeInstance', layer, instance);

        attachEventCallbacks(layer, instance, {
            directions_changed: 'onDirectionsChanged',
        });

        instance.subscribeOnDestroy(() => {
            layer.setMap(null);
        });
    }

    explore(context, instance) {
        if (!instance.layer) this.initLayer(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
