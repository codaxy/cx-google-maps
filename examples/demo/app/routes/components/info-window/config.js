import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `InfoWindow` component is created.
            Typically, it is in this method you will save the instance of the info window, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    options: 'object',
    position: 'any',
    zIndex: 'number'    
};

export const events = {
  onCloseClick: `closeclick`,
  
  onContentChanged: `content_changed`,

  onDomReady: `domready`,

  onPositionChanged: `position_changed`,

  onZIndexChanged: `zindex_changed`
}