import { Widget, VDOM, PureContainer } from 'cx/ui';
import ReactStandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';

class ReactStandaloneSearchBoxEnhanced extends ReactStandaloneSearchBox {
    componentDidMount() {
        super.componentDidMount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance)
            instance.invoke("pipeInstance", this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance)
            instance.invoke("pipeInstance", null);
    }
}

export class StandaloneSearchBox extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            bounds: { structured: true }
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onPlacesChanged'
        ]);        
    }

    wireEvents(instance, events) {
        var map = [];
        events.map((name) => {
            if (this[name]) {
                map[name] = e => instance.invoke(name, e, instance);
            }
        });
        return map;
    }
    
    render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        return <ReactStandaloneSearchBoxEnhanced
            {...instance.data}
            {...instance.events}
            instance={instance}
            key={key}
        >
            <div>
                {children}
            </div>
        </ReactStandaloneSearchBoxEnhanced>;
    }
}
