import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import {shallowEquals, debounce} from 'cx/util';
import {Rectangle as ReactRectangle} from 'react-google-maps';
import _ from 'lodash';

class ReactRectangleEnhanced extends ReactRectangle {
    componentDidMount() {
        super.componentDidMount();

        let {instance} = this.props;
        let {widget, data} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', this);
    }

    componentDidUpdate() {
        super.componentDidUpdate(...arguments);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        let {instance} = this.props;
        let {widget} = instance;
        if (widget.pipeInstance) instance.invoke('pipeInstance', null);
    }
}

export class Rectangle extends Widget {
    declareData() {
        super.declareData(...arguments, {
            bounds: {structured: true},
            draggable: undefined,
            editable: undefined,
            options: {structured: true}
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onClick',
            'onDblClick',
            'onDrag',
            'onDragEnd',
            'onDragStart',
            'onMouseDown',
            'onMouseMove',
            'onMouseOut',
            'onMouseOver',
            'onMouseUp',
            'onBoundsChanged',
            'onRightClick'
        ]);

        if (instance.widget.bounds && instance.widget.bounds.bind) {
            let oldOnBoundsChanged = instance.events['onBoundsChanged'];
            instance.events['onBoundsChanged'] = debounce(function(...args) {
                console.log('bounds changed');
                var b = this.getBounds();
                let c = {
                    east: b.getNorthEast().lng(),
                    west: b.getSouthWest().lng(),
                    north: b.getNorthEast().lat(),
                    south: b.getSouthWest().lat(),
                };

                if (!shallowEquals(c, instance.data.bounds))
                    instance.set('bounds', c);

                if (oldOnBoundsChanged) oldOnBoundsChanged.call(this, ...args);
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
            <ReactRectangleEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}
            />
        );
    }
}
