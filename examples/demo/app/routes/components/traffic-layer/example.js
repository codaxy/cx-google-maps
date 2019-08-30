import { GoogleMap, TrafficLayer } from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 9,
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            center-bind="$page.map.center"
            style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <TrafficLayer autoUpdate />
        </GoogleMap>
    </cx>
);
