import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    // Apparently, no settable props here
};

const propSetterMap = standardSetterMap(settableProps);

export class BicyclingLayer extends PureContainer {
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

        let layer = (instance.layer = new google.maps.BicyclingLayer());
        layer.setMap(context.googleMap);

        if (widget.pipeInstance) instance.invoke('pipeInstance', layer, instance);

        attachEventCallbacks(layer, instance, {
            click: 'onClick',
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
