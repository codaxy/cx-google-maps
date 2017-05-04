import { Widget, VDOM } from "cx/ui";
import { PureContainer } from "cx/widgets";
import { KmlLayer as ReactKmlLayer } from "react-google-maps";

class ReactKmlLayerEnhanced extends ReactKmlLayer {
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

    shouldComponentUpdate(props, state) {
        return props.instance.shouldUpdate;
    }
}

export class KmlLayer extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            defaultViewport: { structured: true },
            metadata: { structured: true },
            status: undefined,
            url: { structured: true },
            zIndex: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            "onClick",
            "onDefaultViewportChanged",
            "onStatusChanged"
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
            <ReactKmlLayerEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            >
                {this.renderChildren(context, instance)}
            </ReactKmlLayerEnhanced>
        );
    }
}
