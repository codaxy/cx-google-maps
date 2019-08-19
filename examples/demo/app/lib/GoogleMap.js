import { Container, VDOM } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { debounce } from 'cx/util';
import { sameLatLng } from './sameLatLng';

export class GoogleMap extends Container {
  declareData(...args) {
    super.declareData(...args, {
      defaultCenter: { structured: true },
      defaultZoom: undefined,
      center: { structured: true },
      heading: undefined,
      mapTypeId: undefined,
      options: { structured: true },
      streetView: { structured: true },
      tilt: undefined,
      zoom: undefined,
    });
  }

  explore(context, instance) {
    context.push('googleMap', instance.map);
    if (!instance.map) return;
    super.explore(context, instance);
  }

  exploreCleanup(context, instance) {
    context.pop('googleMap');
  }

  prepareData(context, instance) {
    super.prepareData(context, instance);
    let { data, cached, map } = instance;
    if (!map) return;

    let { rawData } = cached;

    if (!sameLatLng(data.center, rawData.center)) map.setCenter(data.center);

    if (data.zoom != rawData.zoom) map.setZoom(data.zoom);
  }

  render(context, instance, key) {
    let { data } = instance;
    return (
      <div
        key={key}
        ref={el => this.attach(el, instance)}
        className={data.classNames}
        style={data.style}
      >
        {instance.map && this.renderChildren(context, instance)}
      </div>
    );
  }

  attach(el, instance) {
    if (el === instance.el) return;

    if (instance.el) {
      //instance.map.destroy ();
    }

    if (el) {
      let { widget, data } = instance;

      let map = (instance.map = new google.maps.Map(el, {
        center: data.center || data.defaultCenter,
        zoom: data.zoom || data.defaultZoom,
      }));

      if (widget.pipeInstance) {
        instance.invoke('pipeInstance', map, instance);
      }

      if (widget.center && widget.center.bind) {
        map.addListener('center_changed', () => {
          let center = map.getCenter();
          let cdata = { lat: center.lat(), lng: center.lng() };
          if (sameLatLng(cdata, instance.data.center)) return;
          instance.set('center', cdata, true);
        });
      }

      if (widget.zoom && widget.zoom.bind) {
        map.addListener('zoom_changed', () => {
          let zoom = map.getZoom();
          if (instance.data.center == zoom) return;
          instance.set('zoom', zoom, true);
        });
      }

      attachEventCallbacks(map, instance, {
        click: 'onClick',
        center_changed: 'onCenterChanged',
        zoom_changed: 'onZoomChanged',
      });

      instance.el = el;

      instance.setState({ map });
    }
  }
}

GoogleMap.prototype.styled = true;
GoogleMap.prototype.baseClass = 'googlemap';
GoogleMap.prototype.defaultCenter = { lat: -34.397, lng: 150.644 };
GoogleMap.prototype.defaultZoom = 8;
