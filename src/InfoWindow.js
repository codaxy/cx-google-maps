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
        var children = this.renderChildren(context, instance);
        if (children.length !== 1)
            throw Error('InfoWindow should contain exactly one child element.');

        return (
            <ReactInfoWindowEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}>
                {children[0]}
            </ReactInfoWindowEnhanced>
        );
    }
}
