import {Md} from 'app/components';

export default {
    defaultCenter: {
        type: "config/LatLng",
        description: <cx><Md>
            A [google.maps.LatLng](https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLng)
            config or instance object defining default center point of the map.
        </Md></cx>
    },
    defaultZoom: {
        type: "number",
        description: <cx><Md>
            Default map zoom level.
        </Md></cx>
    },
    center: {
        type: "config/LatLng",
        description: <cx><Md>
            A [google.maps.LatLng](https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLng)
            config or instance object defining current center point of the map.
        </Md></cx>
    },
    zoom: {
        type: "number",
        description: <cx><Md>
            Current map zoom level.
        </Md></cx>
    },
    mapElement: {
        type: 'React component',
        description: 'Represents the element the map will be rendered to.'
    },
    containerElement: {
        type: 'React component',
        description: 'Represents the container element the map will be wrapped into.'
    },
    options: {
        type: 'config/MapOptions',
        description: <cx><Md>
            A [google.maps.MapOptions](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
            config or instance object passed to the underlying Map.
        </Md></cx>
    },
    pipeInstance: {
        type: 'string/function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `GoogleMap` component is created.
            Typically, it is in this method you will save the instance of the map, so that you can
            call its methods later, for example `map.panTo(...)`. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    }
};
