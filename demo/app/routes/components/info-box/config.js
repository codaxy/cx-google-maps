import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `InfoBox` component is created.
            Typically, it is in this method you will save the instance of the info box, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    content: 'any',
    options: 'object',
    position: 'any',
    visible: 'bool',
    zIndex: 'number'    
};

export const events = {
  onCloseClick: `closeclick`,

  onContentChanged: `content_changed`,

  onDomReady: `domready`,

  onPositionChanged: `position_changed`,

  onZIndexChanged: `zindex_changed`    
};
