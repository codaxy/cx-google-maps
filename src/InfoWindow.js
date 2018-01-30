import {Widget, VDOM} from 'cx/ui';
import {HtmlElement, PureContainer} from 'cx/widgets';
import {Console} from 'cx/util';
import {InfoWindow as ReactInfoWindow} from 'react-google-maps';

class ReactInfoWindowEnhanced extends ReactInfoWindow {
    componentDidMount() {
        super.componentDidMount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', this);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', null);
    }
}

export class InfoWindow extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            options: {structured: true},
            position: {structured: true},
            zIndex: {structured: true},
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onCloseClick',
            'onContentChanged',
            'onDomReady',
            'onPositionChanged',
            'onZIndexChanged',
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
        var child = this.renderChildren(context, instance);
        if (Array.isArray(child)) {
            if (child.length > 1) {
                Console.warn(
                    'InfoWindow can only contain one child. Trailing children will be ignored.',
                );
            }

            child = child[0];
        }

        return (
            <ReactInfoWindowEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}>
                {child}
            </ReactInfoWindowEnhanced>
        );
    }
}
