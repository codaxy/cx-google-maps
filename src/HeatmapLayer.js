import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import {HeatmapLayer as ReactHeatmapLayer} from 'react-google-maps/lib/components/visualization/HeatmapLayer';

class ReactHeatmapLayerEnhanced extends ReactHeatmapLayer {
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

export class HeatmapLayer extends Widget {
    declareData() {
        super.declareData(...arguments, {
            url: undefined,
            data: {structured: true},
            options: {structured: true}
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onClick'
        ]);
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
            <ReactHeatmapLayerEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
