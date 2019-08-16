import { Widget, VDOM } from "cx/ui";
import { PureContainer } from "cx/widgets";
import { shallowEquals, debounce } from "cx/util";
import { Circle as ReactCircle } from "react-google-maps";

class ReactCircleEnhanced extends ReactCircle {
    componentDidMount() {
        super.componentDidMount();

        let { instance } = this.props;
        let { widget, data } = instance;
        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    }

    componentDidUpdate() {
        super.componentDidUpdate(...arguments);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let { instance } = this.props;
        let { widget } = instance;
        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    }
}

export class Circle extends Widget {
    declareData() {
        super.declareData(...arguments, {
            center: { structured: true },
            draggable: undefined,
            editable: undefined,
            options: { structured: true },
            radius: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            "onCenterChanged",
            "onClick",
            "onDblClick",
            "onDrag",
            "onDragEnd",
            "onDragStart",
            "onMouseDown",
            "onMouseMove",
            "onMouseOut",
            "onMouseOver",
            "onMouseUp",
            "onRightClick",
            "onRadiusChanged"
        ]);

        if (instance.widget.center && instance.widget.center.bind) {
            let oldOnCenterChanged = instance.events["onCenterChanged"];
            instance.events["onCenterChanged"] = debounce(function(...args) {
                let c = {
                    lat: this.getCenter().lat(),
                    lng: this.getCenter().lng()
                };

                if (!shallowEquals(c, instance.data.center))
                    instance.set("center", c);

                if (oldOnCenterChanged) oldOnCenterChanged.call(this, ...args);
            }, 50);
        }

        if (instance.widget.radius && instance.widget.radius.bind) {
            let oldOnRadiusChanged = instance.events["onRadiusChanged"];
            instance.events["onRadiusChanged"] = debounce(function(...args) {
                instance.set("radius", this.getRadius());

                if (oldOnRadiusChanged) oldOnRadiusChanged.call(this, ...args);
            }, 50);
        }
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
            <ReactCircleEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
