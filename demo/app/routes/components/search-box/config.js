import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `SearchBox` component is created.
            Typically, it is in this method you will save the instance of the search box, so that you can
            call its methods later, for example `searchBox.getPlaces()`. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    bounds: {
        type: `LatLngBounds`,
        description: <cx><Md>
            The area towards which to bias query predictions. Predictions are biased towards, but not restricted to, queries targeting these bounds.
        </Md></cx>
    },
    controlPosition: 'object',
    inputProps: 'object',
    inputStyle: 'object',
    inputClassName: 'string',
    inputPlaceholder: 'string'
};

export const events = {
    onPlacesChanged: `places_changed`
}