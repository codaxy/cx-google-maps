import { Widget, VDOM, PureContainer } from "cx/ui";
import ReactSearchBox from "react-google-maps/lib/places/SearchBox";

class ReactSearchBoxEnhanced extends ReactSearchBox {
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

export class SearchBox extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            bounds: { structured: true },
            controlPosition: { structured: true },
            inputProps: { structured: true },
            inputStyle: { structured: true },
            inputClassName: undefined,
            inputPlaceholder: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onPlacesChanged"]);
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
            <ReactSearchBoxEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            >
                {this.renderChildren(context, instance)}
            </ReactSearchBoxEnhanced>
        );
    }
}
