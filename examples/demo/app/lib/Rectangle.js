import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { sameLatLng } from './sameLatLng';

export class Rectangle extends PureContainer {
  declareData() {
    super.declareData(...arguments, {
      bounds: { structured: true },
      draggable: undefined,
      editable: undefined,
      options: { structured: true }
    });
  }

  prepareData(context, instance) {
    super.prepareData(context, instance);

    let { data, cached, rectangle } = instance;
    let { rawData } = cached;
    if (!rectangle || !rawData) return;

    if (data.position && !sameLatLng(data.position, rawData.position))
      instance.rectangle.setPosition(data.position);
  }

  initRectangle(context, instance) {
    let { widget, data } = instance;

    let marker = (instance.marker = new google.maps.Rectangle({
      ...data,
      map: context.googleMap,
    }));

    if (widget.pipeInstance)
      instance.invoke('pipeInstance', marker, instance);

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
    if (!instance.marker) this.initRectangle(context, instance);

    super.explore(context, instance);
  }

  render(context, instance, key) {
    return this.renderChildren(context, instance);
  }
}
