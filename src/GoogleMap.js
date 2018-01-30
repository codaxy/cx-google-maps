import {Widget, VDOM} from 'cx/ui';
import {shallowEquals, debounce} from 'cx/util';
import {PureContainer, HtmlElement} from 'cx/widgets';
import {GoogleMap as ReactGoogleMap, withGoogleMap} from 'react-google-maps';
import MarkerClusterer from 'react-google-maps';

class ReactGoogleMapEnhanced extends ReactGoogleMap {
    componentDidMount() {
        super.componentDidMount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', this);
    }

    componentDidUpdate() {
        super.componentDidUpdate(...arguments);

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', null);
    }
}

const GoogleMapWrapper = withGoogleMap(props => (
    <ReactGoogleMapEnhanced
        {...props.instance.data}
        {...props.instance.events}
        instance={props.instance}>
        {props.children}
    </ReactGoogleMapEnhanced>
));

export class GoogleMap extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            defaultCenter: {structured: true},
            defaultZoom: undefined,
            center: {structured: true},
            heading: undefined,
            mapTypeId: undefined,
            options: {structured: true},
            streetView: {structured: true},
            tilt: undefined,
            zoom: undefined,
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onBoundsChanged',
            'onCenterChanged',
            'onClick',
            'onDblClick',
            'onDrag',
            'onDragEnd',
            'onDragStart',
            'onHeadingChanged',
            'onIdle',
            'onMapTypeIdChanged',
            'onMouseMove',
            'onMouseOut',
            'onMouseOver',
            'onProjectionChanged',
            'onResize',
            'onRightClick',
            'onTilesLoaded',
            'onTiltChanged',
            'onZoomChanged',
        ]);

        if (instance.widget.center && instance.widget.center.bind) {
            let oldOnCenterChanged = instance.events['onCenterChanged'];
            instance.events['onCenterChanged'] = debounce(function(...args) {
                let c = {
                    lat: this.getCenter().lat(),
                    lng: this.getCenter().lng(),
                };

                if (!shallowEquals(c, instance.data.center))
                    instance.set('center', c);

                if (oldOnCenterChanged) oldOnCenterChanged.call(this, ...args);
            }, 50);
        }

        if (instance.widget.zoom && instance.widget.zoom.bind) {
            let oldOnZoomChanged = instance.events['onZoomChanged'];
            instance.events['onZoomChanged'] = debounce(function(...args) {
                instance.set('zoom', this.getZoom());

                if (oldOnZoomChanged) oldOnZoomChanged.call(this, ...args);
            }, 50);
        }
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
            <GoogleMapWrapper
                containerElement={this.containerElement}
                mapElement={this.mapElement}
                key={key}
                instance={instance}>
                {this.renderChildren(context, instance)}
            </GoogleMapWrapper>
        );
    }
}
