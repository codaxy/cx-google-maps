import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `DirectionsRenderer` component is created.
            Typically, it is in this method you will save the instance of the renderer, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    directions: 'any',
    options: 'object',
    panel: 'object',
    routeIndex: 'number'
};

export const events = {
    onDirectionsChanged: `directions_changed`
};