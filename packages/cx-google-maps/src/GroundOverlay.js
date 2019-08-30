import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

export class GroundOverlay extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
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

        if (data.url != rawData.url) 
            this.repaint(context, instance);

        if (data.bounds) {
            let old = rawData.bounds || {};
            if (data.bounds.north !== old.north || data.bounds.south !== old.south
                || data.bounds.west != old.west || data.bounds.east !== old.east) 
                this.repaint(context, instance);
        }

        let rawOpacity = (rawData.options || {}).opacity;
        if (data.options && data.options.opacity !== rawOpacity)
            layer.setOpacity(data.options.opacity);
    }

    repaint(context, instance) {
        let layer = instance.layer;
        layer.unbindAll();
        this.initLayer(context, instance);
        layer.setMap(null);
    }

    initLayer(context, instance) {
        let { widget, data } = instance;

        if (context.googleMap)
            instance.googleMap = context.googleMap;

        let opts = data.options || {};
        if (!opts.opacity)
            opts.opacity = data.opacity;

        let layer = (instance.layer = new google.maps.GroundOverlay(
            data.url,
            data.bounds,
            opts
        ));

        layer.setMap(instance.googleMap);

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
