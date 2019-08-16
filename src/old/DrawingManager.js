import { Widget, VDOM } from "cx/ui";
import { PureContainer } from "cx/widgets";
import ReactDrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

class ReactDrawingManagerEnhanced extends ReactDrawingManager {
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

export class DrawingManager extends Widget {
    declareData() {
        super.declareData(...arguments, {
            drawingMode: { structured: true },
            options: { structured: true }
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            "onCircleComplete",
            "onMarkerComplete",
            "onOverlayComplete",
            "onPolygonComplete",
            "onPolylineComplete",
            "onRectangleComplete"
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
            <ReactDrawingManagerEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
