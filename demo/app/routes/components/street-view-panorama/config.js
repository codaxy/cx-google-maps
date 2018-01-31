import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `StreetViewPanorama` component is created.
            Typically, it is in this method you will save the instance of the panorama, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    links: 'array',
    motionTracking: 'bool',
    options: 'object',
    pano: 'object',
    position: 'object',
    pov: 'object',
    zoom: 'number',
    bounds: 'object',
    getPixelPositionOffset: 'function'
};

export const events = {
    'onCloseClick': 'close_click',
    'onPanoChanged': 'pano_changed',
    'onPositionChanged': 'position_changed',
    'onPovChanged': 'pov_changed',
    'onResize': 'resize',
    'onStatusChanged': 'status_changed',
    'onVisibleChanged': 'visible_changed',
    'onZoomChanged': 'zoom_changed'
};
