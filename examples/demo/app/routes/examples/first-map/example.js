import { GoogleMap, Marker } from 'cx-google-maps';

import { Controller as CxController } from 'cx/ui';

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
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
        >
            <Marker position-bind="$page.map.center" />
        </GoogleMap>
    </cx>
);
