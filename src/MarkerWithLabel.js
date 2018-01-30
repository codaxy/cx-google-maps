import {Widget, VDOM} from 'cx/ui';
import {PureContainer} from 'cx/widgets';
import ReactMarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';

class ReactMarkerWithLabelEnhanced extends ReactMarkerWithLabel {
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

export class MarkerWithLabel extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            animation: {structured: true},
            clickable: undefined,
            cursor: {structured: true},
            draggable: undefined,
            icon: {structured: true},
            label: {structured: true},
            opacity: undefined,
            options: {structured: true},
            place: {structured: true},
            position: {structured: true},
            shape: {structured: true},
            title: {structured: true},
            zIndex: undefined,
            labelAnchor: {structured: true},
            labelClass: undefined,
            labelStyle: {structured: true},
            labelVisible: undefined,
            noRedraw: undefined,
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
            'onZindexChanged',
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
            <ReactMarkerWithLabelEnhanced
                {...instance.data}
                {...instance.events}
                instance={instance}
                key={key}>
                <div>
                    {this.renderChildren(context, instance)}
                </div>
            </ReactMarkerWithLabelEnhanced>
        );
    }
}
