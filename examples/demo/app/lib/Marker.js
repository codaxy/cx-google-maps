import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { sameLatLng } from './sameLatLng';
import { autoUpdate } from './autoUpdate';
import { generateDefaultSetters } from './generateDefaultSetters';

export class Marker extends PureContainer {
    static bindableProps = {
        animation: { structured: true },
        attribution: { structured: true },
        clickable: undefined,
        cursor: { structured: true },
        draggable: undefined,
        icon: { structured: true },
        label: { structured: true },
        opacity: undefined,
        options: { structured: true },
        position: { structured: true },
        shape: { structured: true },
        title: { structured: true },
        zIndex: undefined,
        noRedraw: undefined,
    }

    static propSetters = generateDefaultSetters(Marker.bindableProps)

    declareData() {
        super.declareData(...arguments, Marker.bindableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, marker } = instance;
        let { rawData } = cached;
        if (!marker || !rawData) return;

        if (data.position && !sameLatLng(data.position, rawData.position))
            marker.setPosition(data.position);

        autoUpdate(marker, data, rawData, Marker.bindableProps, Marker.propSetters, { 
            exclude: {"position": true } 
        });
    }

    initMarker(context, instance) {
        let { widget, data } = instance;

        let marker = (instance.marker = new google.maps.Marker({
            ...data,
            map: context.googleMap,
        }));

        if (widget.pipeInstance) instance.invoke('pipeInstance', marker, instance);

        if (widget.position && widget.position.bind) {
            marker.addListener('position_changed', e => {
                let pos = marker.getPosition();
                let pd = { lat: pos.lat(), lng: pos.lng() };
                if (!sameLatLng(pd, instance.data.position)) {
                    instance.set('position', pd, true);
                }
            });
        }

        attachEventCallbacks(marker, instance, {
            animation_changed: 'onAnimationChanged',
            click: 'onClick',
            clickable_changed: 'onClickableChanged',
            cursor_changed: 'onCursorChanged',
            dblclick: 'onDblClick',
            drag: 'onDrag',
            dragend: 'onDragEnd',
            draggable_changed: 'onDraggableChanged',
            dragstart: 'onDragStart',
            flat_changed: 'onFlatChanged',
            icon_changed: 'onIconChanged',
            mousedown: 'onMouseDown',
            mouseout: 'onMouseOut',
            mouseover: 'onMouseOver',
            mouseup: 'onMouseUp',
            position_changed: 'onPositionChanged',
            right_click: 'onRightClick',
            shape_changed: 'onShapeChanged',
            title_changed: 'onTitleChanged',
            visible_changed: 'onVisibleChanged',
            zindex_changed: 'onZindexChanged',
        });
    }

    explore(context, instance) {
        if (!instance.marker) this.initMarker(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
