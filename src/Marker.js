import { Widget, VDOM } from 'cx/ui';
import { PureContainer } from 'cx/widgets';
import {Marker as ReactMarker} from 'react-google-maps';

class ReactMarkerEnhanced extends ReactMarker {
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

    shouldComponentUpdate(props, state) {
        return props.instance.shouldUpdate;
    }
}

export class Marker extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            animation: { structured: true },
            attribution: { structured: true },
            clickable: undefined,
            cursor: { structured: true },
            draggable: undefined,
            icon: { structured: true },
            label: { structured: true },
            opacity: undefined,
            options: { structured: true },
            place: { structured: true },
            position: { structured: true },
            shape: { structured: true },
            title: { structured: true },
            zIndex: undefined,
            noRedraw: undefined
        });
    }

    onInit(context, instance) {
        instance.events = this.wireEvents(instance, [
            'onAnimationChanged',
            'onClick',
            'onClickableChanged',
            'onCursorChanged',
            'onDblClick',
            'onDrag',
            'onDragEnd',
            'onDraggableChanged',
            'onDragStart',
            'onFlatChanged',
            'onIconChanged',
            'onMouseDown',
            'onMouseOut',
            'onMouseOver',
            'onMouseUp',
            'onPositionChanged',
            'onRightClick',
            'onShapeChanged',
            'onTitleChanged',
            'onVisibleChanged',
            'onZindexChanged'
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
        return <ReactMarkerEnhanced
                    {...instance.data}
                    {...instance.events}
                    instance={instance}
                    key={key}
            >
                {this.renderChildren(context, instance)}
            </ReactMarkerEnhanced>;
    }  
}
