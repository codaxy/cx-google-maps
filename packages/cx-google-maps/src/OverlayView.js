import { VDOM, PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals, getTopLevelBoundingClientRect } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

// OverlayView does not have settable properties

export class OverlayView extends PureContainer {
    declareData() {
        super.declareData(arguments, {
            "mapPaneName": undefined,
            "position": { structured: true }
        });
    }

    initOverlay(context, instance) {
        instance.googleMap = context.googleMap;
        if (instance.widget.pipeInstance)
            instance.invoke('pipeInstance', instance);
    }

    explore(context, instance) {
        if (!instance.googleMap)
            this.initOverlay(context, instance);

        super.explore(context, instance);
    }

    render(context, instance, key) {
        let { data } = instance;
        return <ReactOverlayView
            key={key}
            instance={instance}
            {...data}>
            {this.renderChildren(context, instance)}
        </ReactOverlayView>
    }
}

class ReactOverlayView extends VDOM.Component {
    componentWillMount() {
        this.overlayView = new google.maps.OverlayView();
        this.overlayView.setMap(this.props.instance.googleMap);
        this.overlayView.onAdd = () => this.onAdd();
        this.overlayView.draw = () => this.draw();
        this.overlayView.onRemove = () => this.onRemove();
    }

    componentWillUnmount() {
        this.overlayView.setMap(null);
        this.overlayView.onAdd = null;
        this.overlayView.draw = null;
        this.overlayView.onRemove = null;
    }

    attach(el) {
        if (this.contentEl === el)
            return;

        this.contentEl = el;

        this.adjustPosition();
    }

    onAdd() {
    }

    draw() {
        let { mapPaneName } = this.props;
        if (!mapPaneName)
            throw Error("OverlayView must have mapPaneName set.");

        let panes = this.overlayView.getPanes();

        this.adjustPosition();

        panes[mapPaneName].appendChild(this.contentEl);
    }

    adjustPosition() {
        if (!this.contentEl || !this.overlayView)
            return;

        let projection = this.overlayView.getProjection();
        if (!projection)
            return;

        let { position } = this.props;
        let { getPixelPositionOffset = () => ({ x: 0, y: 0 }) } = this.props.instance.widget;

        let offset = getPixelPositionOffset(this.contentEl.offsetWidth, this.contentEl.offsetHeight),
            divPixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(position));

        this.contentEl.style.top = `${divPixel.y + offset.y}px`;
        this.contentEl.style.left = `${divPixel.x + offset.x}px`;
    }

    onRemove() {
    }

    render() {
        return <div
            style={{ position: "absolute" }}
            ref={el => this.attach(el)}>
            {this.props.children}
        </div>
    }
}