import {Md} from 'app/components';

export const config = {
    center: {
        type: "LatLngLiteral",
        description: <cx><Md>
            A [google.maps.LatLng literal](https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral)
            defining current center point of the map.
        </Md></cx>
    },
    zoom: {
        type: "number",
        description: <cx><Md>
            Current map zoom level.
        </Md></cx>
    },
    options: {
        type: 'MapOptions|object',
        description: <cx><Md>
            A [google.maps.MapOptions](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions)
            config object passed to the underlying Map.
        </Md></cx>
    },
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `GoogleMap` component is created.
            Typically, it is in this method you will save the instance of the map, so that you can
            call its methods later, for example `map.panTo(...)`. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    controlSize: {
        type: 'number',
        description: <cx><Md>Map control size</Md></cx>
    }
};

export const events = {
  onBoundsChanged: `bounds_changed`,

  onCenterChanged: `center_changed`,

  onClick: `click`,

  onDblClick: `dblclick`,

  onDrag: `drag`,

  onDragEnd: `dragend`,

  onDragStart: `dragstart`,

  onHeadingChanged: `heading_changed`,

  onIdle: `idle`,

  onMapTypeIdChanged: `maptypeid_changed`,

  onMouseMove: `mousemove`,

  onMouseOut: `mouseout`,

  onMouseOver: `mouseover`,

  onProjectionChanged: `projection_changed`,

  onResize: `resize`,

  onRightClick: `rightclick`,

  onTilesLoaded: `tilesloaded`,

  onTiltChanged: `tilt_changed`,

  onZoomChanged: `zoom_changed`,    
};
