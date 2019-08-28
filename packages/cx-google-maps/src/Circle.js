import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';
import { sameLatLng } from './sameLatLng';

const settableProps = {
    center: { structured: true },
    draggable: undefined,
    editable: undefined,
    options: { structured: true },
    radius: undefined
};

const propSetterMap = standardSetterMap(settableProps);

export class Circle extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, circle } = instance;
        let { rawData } = cached;
        if (!circle || !rawData) return;

        if (data.center && !sameLatLng(data.center, rawData.center))
            circle.setCenter(data.center);

        autoUpdate(circle, data, rawData, propSetterMap, {
            exclude: { "center": true }
        });
    }

    initCircle(context, instance) {
        let { widget, data } = instance;

        let circle = (instance.circle = new google.maps.Circle({
            ...data,
            map: context.googleMap,
        }));

        if (widget.pipeInstance) instance.invoke('pipeInstance', circle, instance);

        if (widget.center && widget.center.bind) {
            circle.addListener('center_changed', e => {
                let pos = circle.getCenter();
                console.log(pos);
                let pd = { lat: pos.lat(), lng: pos.lng() };
                if (!sameLatLng(pd, instance.data.position)) {
                    instance.set('center', pd, true);
                }
            });
        }

        if (widget.radius && widget.radius.bind) {
            circle.addListener('radius_changed', e => {
                let radius = circle.getRadius();
                if (radius !== instance.data.radius) {
                    instance.set('radius', radius, true);
                }
            });
        }

        attachEventCallbacks(circle, instance, {
            center_changed: 'onCenterChanged',
            click: 'onClick',
            dblclick: 'onDblClick',
            drag: 'onDrag',
            dragend: 'onDragEnd',
            dragstart: 'onDragStart',
            mousedown: 'onMouseDown',
            mouseout: 'onMouseOut',
            mouseover: 'onMouseOver',
            mouseup: 'onMouseUp',
            radius_changed: 'onRadiusChanged',
            right_click: 'onRightClick',
        });
    }

    explore(context, instance) {
        if (!instance.circle) this.initCircle(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
