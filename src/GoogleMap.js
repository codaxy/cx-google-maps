import { Widget, VDOM } from "cx/ui";
import { PureContainer, HtmlElement } from "cx/widgets";
import { GoogleMap as ReactGoogleMap, withGoogleMap } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/addons/MarkerClusterer";

class ReactGoogleMapEnhanced extends ReactGoogleMap {
    componentDidMount() {
        super.componentDidMount();

        let { widget } = this.props.instance;
        if (widget.pipeInstance) widget.pipeInstance(this, this.props.instance);
    }

    componentDidUpdate() {
        super.componentDidUpdate(...arguments);

        let { widget } = this.props.instance;
        if (widget.pipeInstance) widget.pipeInstance(this, this.props.instance);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let { widget } = this.props.instance;
        if (widget.pipeInstance) widget.pipeInstance(null, this.props.instance);
    }
}

const GoogleMapWrapper = withGoogleMap(props => (
    <ReactGoogleMapEnhanced
        {...props.instance.data}
        {...props.instance.events}
        instance={props.instance}
    >
        {props.children}
    </ReactGoogleMapEnhanced>
));

export class GoogleMap extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            defaultCenter: { structured: true },
            defaultZoom: undefined,
            center: { structured: true },
            heading: undefined,
            mapTypeId: undefined,
            options: { structured: true },
            streetView: { structured: true },
            tilt: undefined,
            zoom: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            "onBoundsChanged",
            "onCenterChanged",
            "onClick",
            "onDblClick",
            "onDrag",
            "onDragEnd",
            "onDragStart",
            "onHeadingChanged",
            "onIdle",
            "onMapTypeIdChanged",
            "onMouseMove",
            "onMouseOut",
            "onMouseOver",
            "onProjectionChanged",
            "onResize",
            "onRightClick",
            "onTilesLoaded",
            "onTiltChanged",
            "onZoomChanged"
        ]);
    }

    wireEvents(instance, events) {
        var map = [];
        events.map(name => {
            if (this[name]) {
                map[name] = e => this[name](e, instance);
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
                instance={instance}
            >
                {this.renderChildren(context, instance)}
            </GoogleMapWrapper>
        );
    }
}
