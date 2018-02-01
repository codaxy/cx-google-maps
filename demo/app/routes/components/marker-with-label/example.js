import {
    HtmlElement,
    Menu,
    Toast
} from 'cx/widgets';

import {
    Url
} from 'cx/ui';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerWithLabel
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
        containerElement={containerElement}
        mapElement={mapElement}
        defaultCenter:bind="$page.map.center"
        defaultZoom:bind="$page.map.zoom"
        center:bind="$page.map.center"
        zoom:bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <MarkerWithLabel
            position:bind="$page.map.center"
            title="This is a custom icon marker with label"
            icon="https://codaxy.github.io/cx-google-maps/assets/img/cx.png"
            labelAnchor={{x: 0, y: 0}}
            labelStyle={{backgroundColor: "rgba(20, 40, 120, 0.5)", color: "white", fontSize: "18px", padding: "12px"}}
            onClick="onMarkerClick"
        >
            <div>cx-google-maps</div>
        </MarkerWithLabel>
    </GoogleMap>
</cx>;
