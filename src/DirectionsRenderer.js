import { Widget, VDOM, PureContainer } from "cx/ui";
import {
    DirectionsRenderer as ReactDirectionsRenderer
} from "react-google-maps/lib";

class ReactDirectionsRendererEnhanced extends ReactDirectionsRenderer {
    componentDidMount() {
        super.componentDidMount();

        let { widget } = this.props.instance;
        if (widget.pipeInstance) widget.pipeInstance(this, this.props.instance);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let { widget } = this.props.instance;
        if (widget.pipeInstance) widget.pipeInstance(null, this.props.instance);
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
                map[name] = e => this[name](e, instance);
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
