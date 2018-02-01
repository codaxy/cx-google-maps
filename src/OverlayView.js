import { Widget, VDOM } from "cx/ui";
import { PureContainer } from "cx/widgets";
import { OverlayView as ReactOverlayView } from "react-google-maps";

class ReactOverlayViewEnhanced extends ReactOverlayView {
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

export class OverlayView extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            mapPaneName: undefined,
            position: { structured: true },
            bounds: { structured: true }
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, []);
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
        var children = this.renderChildren(context, instance);
        if (children.length !== 1)
            throw Error("OverlayView should have exactly one child element.");
        return (
            <ReactOverlayViewEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                getPixelPositionOffset={this.getPixelPositionOffset}
                key={key}
            >
                {children[0]}
            </ReactOverlayViewEnhanced>
        );
    }
}
