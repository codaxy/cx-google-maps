import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals, debounce } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    draggable: undefined,
    editable: undefined,
    options: { structured: true },
    path: undefined,
    paths: undefined,
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

        instance.subscribeOnDestroy(() => {
            poly.setMap(null);
        });
    }

    explore(context, instance) {
        if (!instance.poly) this.initPolygon(context, instance);
        let { data } = instance;
        if (data.editable) {
            let path = instance.poly.getPath();
            if (path != instance.pathWithEvents) {
                const updatePath = debounce(() => {
                    let pts = [];
                    path.forEach(p => {
                        pts.push({
                            lat: p.lat(),
                            lng: p.lng(),
                        });
                    });
                    instance.set('path', pts);
                }, 50);
                path.addListener('insert_at', updatePath);
                path.addListener('set_at', updatePath);
                path.addListener('remove_at', updatePath);
                instance.pathWithEvents = path;
            }
        }
        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
