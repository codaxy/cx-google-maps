import { Widget, VDOM } from 'cx/ui';
import { PureContainer } from 'cx/widgets';
import ReactMarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

class ReactMarkerClustererEnhanced extends ReactMarkerClusterer {
    componentDidMount() {
        super.componentDidMount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance)
            instance.invoke("pipeInstance", this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance)
            instance.invoke("pipeInstance", null);
    }
}

export class MarkerClusterer extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            averageCenter: undefined,
            batchSizeIE: undefined,
            calculator: undefined,
            clusterClass: undefined,
            enableRetinaIcons: undefined,
            gridSize: undefined,
            ignoreHidden: undefined,
            imageExtension: undefined,
            imagePath: undefined,
            imageSizes: undefined,
            maxZoom: undefined,
            minimumClusterSize: undefined,
            styles: undefined,
            title: undefined,
            zoomOnClick: undefined,
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onClick',
            'onClusteringBegin',
            'onClusteringEnd',
            'onMouseOut',
            'onMouseOver'
        ]);        
    }

    wireEvents(instance, events) {
        var map = [];
        events.map((name) => {
            if (this[name]) {
                map[name] = e => instance.invoke(name, e, instance);
            }
        });
        return map;
    }
    
    render(context, instance, key) {
        return <ReactMarkerClustererEnhanced
            {...instance.data}
            {...instance.events}
            instance={instance}
            key={key}
        >
            {this.renderChildren(context, instance)}
        </ReactMarkerClustererEnhanced>;
    }
}
