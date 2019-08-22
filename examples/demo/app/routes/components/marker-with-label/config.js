import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `MarkerWithLabel` component is created.
            Typically, it is in this method you will save the instance of the marker, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    animation: 'object',
    attribution: 'object',
    clickable: 'bool',
    cursor: 'object',
    draggable: 'bool',
    icon: 'string|object',
    label: 'string|object',
    opacity: 'number',
    options: 'object',
    place: 'object',
    position: 'LatLng|object',
    shape: 'object',
    title: 'string|object',
    zIndex: 'number',
    labelAnchor: 'object',
    labelClass: 'string',
    labelContent: 'string',
    labelStyle: 'object',
    labelVisible: 'bool',
    noRedraw: {
        type: 'bool',
        description: <cx><Md>If set, redraw will not be triggered on each render. [Look here](https://github.com/tomchentw/react-google-maps/pull/397) for details.</Md></cx>
    }
};

export const events = {
    onAnimationChanged: `animation_changed`,

    onClick: `click`,

    onClickableChanged: `clickable_changed`,

    onCursorChanged: `cursor_changed`,

    onDblClick: `dblclick`,

    onDrag: `drag`,

    onDragEnd: `dragend`,

    onDraggableChanged: `draggable_changed`,

    onDragStart: `dragstart`,

    onFlatChanged: `flat_changed`,

    onIconChanged: `icon_changed`,

    onMouseDown: `mousedown`,

    onMouseOut: `mouseout`,

    onMouseOver: `mouseover`,

    onMouseUp: `mouseup`,

    onPositionChanged: `position_changed`,

    onRightClick: `rightclick`,

    onShapeChanged: `shape_changed`,

    onTitleChanged: `title_changed`,

    onVisibleChanged: `visible_changed`,

    onZindexChanged: `zindex_changed`
};
