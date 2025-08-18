import { VDOM, PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    options: { structured: true },
    zIndex: { structured: true },
    position: { structured: true },
};

const propSetterMap = standardSetterMap(settableProps);

const open = (infoWindow, anchor) => {
    if (anchor) {
        infoWindow.open(infoWindow.getMap(), anchor);
    } else if (infoWindow.getPosition()) {
        infoWindow.open(infoWindow.getMap());
    } else {
        throw Error(
            `You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`,
        );
    }
};

export class InfoWindow extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, infoWindow } = instance;
        let { rawData } = cached;
        if (!infoWindow || !rawData) return;

        if (data.position && !sameLatLng(data.position, rawData.position))
            infoWindow.setPosition(data.position);

        autoUpdate(infoWindow, data, rawData, propSetterMap, {
            exclude: { position: true },
        });
    }

    initInfoWindow(context, instance) {
        let { widget, data } = instance;

        let infoWindow = (instance.infoWindow = new google.maps.InfoWindow(data.options || {}));

        infoWindow.setMap(context.googleMap);

        if (widget.pipeInstance) instance.invoke('pipeInstance', infoWindow, instance);

        // If the InfoWindow is anchored, we should remember the anchor
        instance.marker = context.marker;

        if (widget.position && widget.position.bind) {
            infoWindow.addListener('position_changed', (e) => {
                let pos = infoWindow.getPosition();
                if (!pos) return;

                let pd = { lat: pos.lat(), lng: pos.lng() };
                if (!sameLatLng(pd, instance.data.position)) {
                    instance.set('position', pd, true);
                }
            });
        }

        if (widget.visible && widget.visible.bind) {
            infoWindow.addListener('closeclick', (e) => {
                instance.set('visible', false);
            });
        }

        attachEventCallbacks(infoWindow, instance, {
            closeclick: 'onCloseClick',
            domready: 'onDomReady',
            content_changed: 'onContentChanged',
            position_changed: 'onPositionChanged',
            zindex_changed: 'onZindexChanged',
        });
    }

    explore(context, instance) {
        if (!instance.infoWindow) this.initInfoWindow(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return (
            <ReactInfoWindow key={key} instance={instance}>
                {this.renderChildren(context, instance)}
            </ReactInfoWindow>
        );
    }
}

class ReactInfoWindow extends VDOM.Component {
    attach(el, instance) {
        if (!instance.infoWindow || this.contentEl) return;
        instance.infoWindow.setContent((this.contentEl = el));
        open(instance.infoWindow, instance.marker); // instance.marker will be set if the InfoWindow is anchored to a Marker
    }

    componentWillUnmount() {
        this.props.instance.infoWindow.setMap(null);
        this.props.instance.infoWindow = null;
    }

    //two divs are required as hitting the close button on the info box
    //removes the DOM element which causes problems for React
    render() {
        return (
            <div>
                <div ref={(el) => this.attach(el, this.props.instance)}>{this.props.children}</div>
            </div>
        );
    }
}
