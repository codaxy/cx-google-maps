import { VDOM, PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';
import { InfoBox as GoogleMapsInfoBox } from 'google-maps-infobox';

const settableProps = {
    options: { structured: true },
    zIndex: { structured: true },
};

const propSetterMap = standardSetterMap(settableProps);

const open = (infoBox, anchor) => {
    if (anchor) {
        infoBox.open(infoBox.getMap(), anchor)
    } else if (infoBox.getPosition()) {
        infoBox.open(infoBox.getMap())
    } else {
        throw Error(`You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoBox>.`);
    }
}

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
            exclude: { "position": true }
        });
    }

    initInfoBox(context, instance) {
        let { widget, data } = instance;

        let infoBox = (instance.infoBox = new GoogleMapsInfoBox(data.options || {}));

        infoBox.setMap(context.googleMap);

        if (widget.pipeInstance) instance.invoke('pipeInstance', infoBox, instance);

        instance.marker = context.marker;

        attachEventCallbacks(infoBox, instance, {
            closeclick: 'onCloseClick',
            domready: 'onDomReady',
            content_changed: 'onContentChanged',
            position_changed: 'onPositionChanged',
            zindex_changed: 'onZindexChanged',
        });
    }

    explore(context, instance) {
        if (!instance.infoBox)
            this.initInfoBox(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        return <ReactInfoBox key={key}
            instance={instance}>
            {this.renderChildren(context, instance)}
        </ReactInfoBox>
    }
}

class ReactInfoBox extends VDOM.Component {
    attach(el, instance) {
        if (!instance.infoBox || this.contentEl)
            return;

        this.infoBox = instance.infoBox;

        instance.infoBox.setContent(this.contentEl = el);
        open(instance.infoBox, instance.marker);
    }

    componentWillUnmount() {
        // TODO: What should we do here in order for it to work?
        if (!this.infoBox)
            return;

        this.infoBox.setMap(null);
    }

    render() {
        return <div
            ref={el => this.attach(el, this.props.instance)}
        >
            {this.props.children}
        </div>
    }
}
