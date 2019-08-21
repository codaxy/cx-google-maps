import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';

export class Rectangle extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            bounds: { structured: true },
            draggable: undefined,
            editable: undefined,
            options: { structured: true },
        });
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, rect } = instance;
        let { rawData } = cached;
        if (!rect || !rawData) return;

        let ob = rawData.bounds || {};

        if (
            data.bounds &&
            (data.bounds.north !== ob.north ||
                data.bounds.south !== ob.south ||
                data.bounds.east !== ob.east ||
                data.bounds.west !== ob.west)
        ) {
            rect.setBounds(
                new google.maps.LatLngBounds(
                    {
                        lat: data.bounds.south || 0.0,
                        lng: data.bounds.west || 0.0,
                    },
                    {
                        lat: data.bounds.north || 0.0,
                        lng: data.bounds.east || 0.0,
                    },
                ),
            );
        }
    }

    initRectangle(context, instance) {
        let { widget, data } = instance;

        let rect = (instance.rect = new google.maps.Rectangle({
            ...data,
            map: context.googleMap,
        }));

        if (widget.pipeInstance) instance.invoke('pipeInstance', rect, instance);

        if (widget.bounds && widget.bounds.bind) {
            rect.addListener('bounds_changed', e => {
                let res = rect.getBounds(),
                    sw = res.getSouthWest(),
                    ne = res.getNorthEast();
                let b = instance.data.bounds || {};

                let old = new google.maps.LatLngBounds(
                    {
                        lat: b.south || 0.0,
                        lng: b.west || 0.0,
                    },
                    {
                        lat: b.north || 0.0,
                        lng: b.east || 0.0,
                    },
                );

                if (!res.equals(old))
                    instance.set('bounds', {
                        south: sw.lat(),
                        west: sw.lng(),
                        north: ne.lat(),
                        east: ne.lng(),
                    });
            });
        }

        attachEventCallbacks(rect, instance, {
            click: 'onClick',
            dblclick: 'onDblClick',
            drag: 'onDrag',
            dragend: 'onDragEnd',
            dragstart: 'onDragStart',
            mousedown: 'onMouseDown',
            mouseout: 'onMouseOut',
            mouseover: 'onMouseOver',
            mouseup: 'onMouseUp',
            bounds_changed: 'onBoundsChanged',
            right_click: 'onRightClick',
        });
    }

    explore(context, instance) {
        if (!instance.rect) this.initRectangle(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
