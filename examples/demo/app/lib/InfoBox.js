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

        let infoBox = (instance.infoBox = new GoogleMapsInfoBox({
            ...data,
            map: context.googleMap
        }));

        infoBox.setMap(context.googleMap); // Why is this needed? Why data does not work either?

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
        if (!instance.infoBox) this.initInfoBox(context, instance);

        super.explore(context, instance);
    }

    attach(el, instance) {
        if (!instance.infoBox || instance.contentEl)
            return;

        instance.infoBox.setContent(instance.contentEl = el);
        open(instance.infoBox, instance.marker);
    }

    render(context, instance, key) {
        return <div key={key}
            ref={el => this.attach(el, instance)}>
            {this.renderChildren(context, instance)}
        </div>
    }
}
