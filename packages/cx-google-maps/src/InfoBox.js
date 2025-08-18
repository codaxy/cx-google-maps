import { VDOM, PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';
import { InfoBox as GoogleMapsInfoBox } from 'google-maps-infobox';

const settableProps = {
    options: { structured: true },
    zIndex: { structured: true },
    position: { structured: true },
};

const propSetterMap = standardSetterMap(settableProps);

const open = (infoBox, anchor) => {
    if (anchor) {
        infoBox.open(infoBox.getMap(), anchor);
    } else if (infoBox.getPosition()) {
        infoBox.open(infoBox.getMap());
    } else {
        throw Error(
            `You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoBox>.`,
        );
    }
};

export class InfoBox extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, infoBox } = instance;
        let { rawData } = cached;
        if (!infoBox || !rawData) return;

        if (data.position && !sameLatLng(data.position, rawData.position))
            infoBox.setPosition(data.position);

        autoUpdate(infoBox, data, rawData, propSetterMap, {
            exclude: { position: true },
        });
    }

    initInfoBox(context, instance) {
        let { widget, data } = instance;

        let infoBox = (instance.infoBox = new GoogleMapsInfoBox(data.options || {}));

        infoBox.setMap(context.googleMap);

        if (widget.pipeInstance) instance.invoke('pipeInstance', infoBox, instance);

        // If the InfoBox is anchored, we should remember the anchor
        instance.marker = context.marker;

        if (widget.position && widget.position.bind) {
            infoBox.addListener('position_changed', (e) => {
                let pos = infoBox.getPosition();
                if (!pos) return;

                let pd = { lat: pos.lat(), lng: pos.lng() };
                if (!sameLatLng(pd, instance.data.position)) {
                    instance.set('position', pd, true);
                }
            });
        }

        if (widget.visible && widget.visible.bind) {
            infoBox.addListener('closeclick', (e) => {
                instance.set('visible', false);
            });
        }

        attachEventCallbacks(infoBox, instance, {
            closeclick: 'onCloseClick',
            domready: 'onDomReady',
            content_changed: 'onContentChanged',
            position_changed: 'onPositionChanged',
            zindex_changed: 'onZindexChanged',
        });
    }

    explore(context, instance) {
        if (!instance.infoBox) this.initInfoBox(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return (
            <ReactInfoBox key={key} instance={instance}>
                {this.renderChildren(context, instance)}
            </ReactInfoBox>
        );
    }
}

class ReactInfoBox extends VDOM.Component {
    attach(el, instance) {
        if (!instance.infoBox || this.contentEl) return;
        instance.infoBox.setContent((this.contentEl = el));
        open(instance.infoBox, instance.marker); // instance.marker will be set if the InfoBox is anchored to a Marker
    }

    componentWillUnmount() {
        this.props.instance.infoBox.setMap(null);
        this.props.instance.infoBox = null;
    }

    render() {
        return (
            <div>
                <div ref={(el) => this.attach(el, this.props.instance)}>{this.props.children}</div>{' '}
            </div>
        );
    }
}
