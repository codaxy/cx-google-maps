import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `KmlLayer` component is created.
            Typically, it is in this method you will save the instance of the layer, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    defaultViewport: 'any',
    options: 'any',
    metadata: 'any',
    status: 'any',
    url: 'string',
    zIndex: 'number'  
};

export const events = {
  onClick: `click`,

  onDefaultViewportChanged: `defaultviewport_changed`,
  
  onStatusChanged: `status_changed`
};
