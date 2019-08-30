import { GoogleMap, DirectionsRenderer } from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: new google.maps.LatLng(41.85073, -87.65126),
            zoom: 12,
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.directions', null);

        let svc = new google.maps.DirectionsService();
        svc.route(
            {
                origin: new google.maps.LatLng(41.77848077, -87.72102356),
                destination: new google.maps.LatLng(42.03807425, -87.88444519),
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.store.set('$page.directions', result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            },
        );
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            style="width: 100%; height: 100%; min-height: 400px"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <DirectionsRenderer if-expr="!!{$page.directions}" directions-bind="$page.directions" />
        </GoogleMap>
    </cx>
);
