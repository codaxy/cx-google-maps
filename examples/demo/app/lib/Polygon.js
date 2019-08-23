import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    draggable: undefined,
    editable: undefined,
    options: { structured: true },
    path: undefined,
    paths: undefined
};

const propSetterMap = standardSetterMap(settableProps);

export class Polygon extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, poly } = instance;
        let { rawData } = cached;
        if (!poly || !rawData) return;

        autoUpdate(poly, data, rawData, propSetterMap);
    }

    initPolygon(context, instance) {
        let { widget, data } = instance;

        let poly = (instance.poly = new google.maps.Polygon({
            ...data,
            map: context.googleMap,
        }));

        if (widget.pipeInstance) instance.invoke('pipeInstance', poly, instance);

        // TODO: Monitor path changes

        attachEventCallbacks(poly, instance, {
            click: 'onClick',
            dblclick: 'onDblClick',
            drag: 'onDrag',
            dragend: 'onDragEnd',
            dragstart: 'onDragStart',
            mousedown: 'onMouseDown',
            mouseout: 'onMouseOut',
            mouseover: 'onMouseOver',
            mouseup: 'onMouseUp',
            right_click: 'onRightClick',
        });
    }

    explore(context, instance) {
        if (!instance.poly) this.initPolygon(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
