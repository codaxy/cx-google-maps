import { Widget, VDOM } from "cx/ui";
import { HtmlElement, PureContainer } from "cx/widgets";
import { Console } from "cx/util";
import ReactInfoBox from "react-google-maps/lib/addons/InfoBox";

class ReactInfoBoxEnhanced extends ReactInfoBox {
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

export class InfoBox extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            content: { structured: true },
            options: { structured: true },
            position: { structured: true },
            zIndex: { structured: true }
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            "onCloseClick",
            "onContentChanged",
            "onDomReady",
            "onPositionChanged",
            "onZIndexChanged"
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
        var child = this.renderChildren(context, instance);
        if (Array.isArray(child)) {
            if (child.length > 1) {
                Console.warn(
                    "InfoBox can only contain one child. Trailing children will be ignored."
                );
            }

            child = child[0];
        }

        let { data, events } = instance;

        data.options = data.options || {};
        data.options.boxClass = data.classNames;

        return (
            <ReactInfoBoxEnhanced
                {...data}
                {...events}
                instance={instance}
                key={key}
            >
                {child}
            </ReactInfoBoxEnhanced>
        );
    }
}

InfoBox.prototype.styled = true;
