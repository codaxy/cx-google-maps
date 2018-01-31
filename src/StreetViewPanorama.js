import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import {StreetViewPanorama as ReactStreetViewPanorama} from 'react-google-maps';
import {shallowEquals, debounce} from 'cx/util';

class ReactStreetViewPanoramaEnhanced extends ReactStreetViewPanorama {
    componentDidMount() {
        super.componentDidMount();

        let {instance} = this.props;
        let {widget, data} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', null);
    }
}

export class StreetViewPanorama extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            links: {structured: true},
            motionTracking: undefined,
            options: {structured: true},
            pano: undefined,
            position: {structured: true},
            pov: {structured: true},
            zoom: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onCloseClick',
            'onPanoChanged',
            'onPositionChanged',
            'onPovChanged',
            'onResize',
            'onStatusChanged',
            'onVisibleChanged',
            'onZoomChanged'
        ]);

        //if (instance.widget.position && instance.widget.position.bind) {
        //    let oldOnPositionChanged = instance.events['onPositionChanged'];
        //    instance.events['onPositionChanged'] = debounce(function(...args) {
        //        var b = this.getPosition();
        //        let c = {
        //            lat: b.lat(),
        //            lng: b.lng()
        //        };

        //        if (!shallowEquals(c, instance.data.position))
        //            instance.set('position', c);

        //        if (oldOnPositionChanged) oldOnPositionChanged.call(this, ...args);
        //    }, 0);
        //}

        //if (instance.widget.pov && instance.widget.pov.bind) {
        //    let oldOnPovChanged = instance.events['onPovChanged'];
        //    instance.events['onPovChanged'] = debounce(function(...args) {
        //        var b = this.getPov();

        //        if (!shallowEquals(b, instance.data.pov))
        //            instance.set('pov', b);

        //        if (oldOnPovChanged) oldOnPovChanged.call(this, ...args);
        //    }, 50);
        //}

        //if (instance.widget.zoom && instance.widget.zoom.bind) {
        //    let oldOnZoomChanged = instance.events['onZoomChanged'];
        //    instance.events['onZoomChanged'] = debounce(function(...args) {
        //        let zoom = this.getZoom();
        //        if (zoom != instance.data.zoom)
        //            instance.set('zoom', zoom);

        //        if (oldOnZoomChanged) oldOnZoomChanged.call(this, ...args);
        //    }, 50);
        //}
    }

    wireEvents(instance, events) {
        var map = [];
        events.map(name => {
            if (this[name]) {
                map[name] = e => instance.invoke(name, e, instance);
            }
        });
        return map;
    }

    render(context, instance, key) {
        return (
            <ReactStreetViewPanoramaEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                getPixelPositionOffset={this.getPixelPositionOffset}
                key={key}
            >
                {this.renderChildren(context, instance)}
            </ReactStreetViewPanoramaEnhanced>
        );
    }
}

