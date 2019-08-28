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
            style="width: 100%; height: 100%; min-height: 400px;"
        >
            <Marker position-bind="$page.map.center" />
        </GoogleMap>
    </cx>
);
