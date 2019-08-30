import { Md } from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `OverlayView` component is created.
            Typically, it is in this method you will save the instance of the overlay, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    mapPaneName: {
        type: 'string',
        description: <cx><Md>
        </Md></cx>
    },
    position: {
        type: 'LatLngLiteral',
        description: <cx><Md>
            A [google.maps.LatLng literal](https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral)
            defining current top left corner of the overlay
        </Md></cx>
    },
    getPixelPositionOffset: {
        type: 'function',
        description: <cx><Md>
            A method of signature `getPixelPositionOffset(width: number, height: number)` returning the offset 
            for the overlay content. If not specified, the offset is assumed to be 0.
        </Md></cx>
    }
};

export const events = {
    'N/A': false
};
