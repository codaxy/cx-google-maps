import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import {TrafficLayer as ReactTrafficLayer} from 'react-google-maps';

class ReactTrafficLayerEnhanced extends ReactTrafficLayer {
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

export class TrafficLayer extends Widget {
    declareData() {
        super.declareData(...arguments, {
            autoUpdate: undefined,
            options: {structured: true}
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
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
            <ReactTrafficLayerEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
