import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import {GroundOverlay as ReactGroundOverlay} from 'react-google-maps';

class ReactGroundOverlayEnhanced extends ReactGroundOverlay {
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

export class GroundOverlay extends Widget {
    declareData() {
        super.declareData(...arguments, {
            opacity: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onDblClick',
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
            <ReactGroundOverlayEnhanced
                {...instance.data}
                {...instance.events}
                defaultUrl={this.defaultUrl}
                defaultBounds={this.defaultBounds}
                instance={instance}
                key={key}
            />
        );
    }
}
