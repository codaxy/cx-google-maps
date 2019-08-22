import {
    Toast, Menu
} from 'cx/widgets';

import {
    GoogleMap,
    MarkerWithLabel
} from '../../../lib';

import { VDOM, Controller as CxController } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.77811360,
                lng: -87.62979820
            },
            zoom: 12
        };
    }

    onMarkerClick() {
        Toast.create({
            message: `Marker clicked.`,
            timeout: 3000
        }).open();
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        style="width: 100%; height: 100%; min-height: 400px;"
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <MarkerWithLabel
            position-bind="$page.map.center"
            title="This is a custom icon marker with label"
            icon="https://codaxy.github.io/cx-google-maps/assets/img/cx.png"
            labelContent="cx-google-maps"
            labelAnchor={{ x: 0, y: 0 }}
            labelStyle={{ backgroundColor: "rgba(20, 40, 120, 0.5)", color: "white", fontSize: "18px", padding: "12px" }}
            onClick="onMarkerClick"
        >
        </MarkerWithLabel>
    </GoogleMap>
</cx>