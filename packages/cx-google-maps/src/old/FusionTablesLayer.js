// THIS COMPONENT IS DEPRECATED: https://developers.google.com/maps/documentation/javascript/fusiontableslayer
export * from './FusionTablesLayer';
import { Widget, VDOM } from "cx/ui";
import { PureContainer } from "cx/widgets";
import { FusionTablesLayer as ReactFusionTablesLayer } from "react-google-maps";

class ReactFusionTablesLayerEnhanced extends ReactFusionTablesLayer {
    componentDidMount() {
        super.componentDidMount();

        let { instance } = this.props;
        let { widget, data } = instance;
        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let { instance } = this.props;
        let { widget } = instance;
        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    }
}

export class FusionTablesLayer extends Widget {
    declareData() {
        super.declareData(...arguments, {
            url: undefined,
            options: { structured: true }
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick"]);
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
            <ReactFusionTablesLayerEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
