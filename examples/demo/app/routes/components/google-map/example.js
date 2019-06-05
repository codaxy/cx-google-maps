import {
    HtmlElement,
    Menu
} from 'cx/widgets';

import {
    GoogleMap
} from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';
import config from './config';

const containerElement = <div style={{ position: "relative", flex: 1 }} />;
const mapElement =
    <div
        style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}
    />
;

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.87811360,
                lng: -87.62979820
            },
            zoom: 12
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
    }

    pipeMapInstance(instance) {
        this.map = instance;
    }

    onResetViewClick() {
        this.map.panTo(this.getDefaults().center);

        // We could have just make use of the -bind in the map
        // center (see index.js) and pan like this:

        // this.store.set('$page.map', this.getDefaults());

        // However, in this case, panning would be instant,
        // whereas Google Maps panTo provides smooth panning
        // when possible.
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        containerElement={containerElement}
        mapElement={mapElement}
        pipeInstance="pipeMapInstance"
        defaultCenter-bind="$page.map.center"
        defaultZoom-bind="$page.map.zoom"
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Menu
            vertical
            mod="map"
            itemPadding="small"
        >
            <a onClick="onResetViewClick">
                Reset view
            </a>
        </Menu>
    </GoogleMap>
</cx>;