import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
                If set, this method will be invoked when the instance of a React `Circle` component is created.
                Typically, it is in this method you will save the instance of the circlepolygon, so that you can
                call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    center: 'object',
    draggable: 'bool',
    editable: 'bool',
    options: 'object',
    radius: 'number',
    visible: 'bool',
};

export const events = {
    onClick: `click`,
    onDblClick: `dblclick`,
    onDrag: `drag`,
    onDragEnd: `dragend`,
    onDragStart: `dragstart`,
    onMouseDown: `mousedown`,
    onMouseMove: `mousemove`,
    onMouseOver: `mouseover`,
    onMouseUp: `mouseup`,
    onRightClick: `rightclick`,    
    onRadiusChanged: `radius_changed`,
    onCenterChanged: `center_changed`
};
