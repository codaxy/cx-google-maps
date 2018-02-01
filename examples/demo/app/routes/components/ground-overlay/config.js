import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `GroundOverlay` component is created.
            Typically, it is in this method you will save the instance of the polygon, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    defaultUrl: 'string (non-bindable)',
    defaultBounds: 'object (non-bindable)',
    opacity: 'number'
};

export const events = {
    onDblClick: `dbl_click`,
    onClick: `click`
};
