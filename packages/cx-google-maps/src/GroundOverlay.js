import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    opacity: undefined,
};

const propSetterMap = standardSetterMap(settableProps);

export class GroundOverlay extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            ...settableProps,
            // url, bounds and options don't have setters.
            // TODO: make re-rendering possible
            bounds: { structured: true },
            url: undefined,
            options: { structured: true },
        });
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

        let layer = (instance.layer = new google.maps.GroundOverlay(
            data.url,
            data.bounds,
            data.options || {},
        ));
        layer.setMap(context.googleMap);

        if (widget.pipeInstance) instance.invoke('pipeInstance', layer, instance);

        attachEventCallbacks(layer, instance, {
            click: 'onClick',
            dbl_click: 'onDblClick',
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
