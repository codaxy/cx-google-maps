import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import {BicyclingLayer as ReactBicyclingLayer} from 'react-google-maps';

class ReactBicyclingLayerEnhanced extends ReactBicyclingLayer {
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

export class BicyclingLayer extends Widget {
    declareData() {
        super.declareData(...arguments, {
            autoUpdate: undefined
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
            <ReactBicyclingLayerEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
