import {GoogleMap, Marker} from 'cx-google-maps';

import {VDOM, Controller as CxController} from 'cx/ui';

const containerElement = <div style={{position: 'relative', height: '100%'}} />;
const mapElement = (
    <div style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}} />
);

class Controller extends CxController {
    onInit() {
        this.store.init('$page.map', {
            center: {
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 12,
        });
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            containerElement={containerElement}
            mapElement={mapElement}
            defaultCenter:bind="$page.map.center"
            defaultZoom:bind="$page.map.zoom"
            center:bind="$page.map.center"
            zoom:bind="$page.map.zoom">
            <Marker position:bind="$page.map.center" />
        </GoogleMap>
    </cx>
);
