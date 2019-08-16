
import {HtmlElement, Menu, Text, Toast, Button, Grid} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer,
    BicyclingLayer,
} from 'cx-google-maps';

import {VDOM, Controller as CxController, Repeater} from 'cx/ui';
import config from './config';

const containerElement = <div style={{position: 'relative', flex: 1}} />;
const mapElement = (
    <div style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}} />
);

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
            containerElement={containerElement}
            mapElement={mapElement}
            defaultCenter-bind="$page.map.center"
            defaultZoom-bind="$page.map.zoom"
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}>
            <BicyclingLayer autoUpdate />
        </GoogleMap>
    </cx>
);
