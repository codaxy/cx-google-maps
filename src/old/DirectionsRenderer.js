import { Widget, VDOM, PureContainer } from "cx/ui";
import { DirectionsRenderer as ReactDirectionsRenderer } from "react-google-maps";

class ReactDirectionsRendererEnhanced extends ReactDirectionsRenderer {
    componentDidMount() {
        super.componentDidMount();

        let { instance } = this.props;
        let { widget } = instance;
        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let { instance } = this.props;
        let { widget } = instance;
        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    }
}

export class DirectionsRenderer extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            directions: { structured: true },
            options: { structured: true },
            panel: { structured: true },
            routeIndex: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onDirectionsChanged"]);
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
            <ReactDirectionsRendererEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            >
                {this.renderChildren(context, instance)}
            </ReactDirectionsRendererEnhanced>
        );
    }
}
