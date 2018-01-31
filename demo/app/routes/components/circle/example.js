import _ from 'lodash';

import { 
    HtmlElement, 
    Menu,
    Text,
    Toast,
    Button,
    Grid
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    Circle
} from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';
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
            zoom: 9
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.circle', {
            center: {
                lat: 41.77811360, 
                lng: -87.62979820
            },
            radius: 10000
        });
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
        <Menu vertical mod="map" itemPadding="small">
            <Text tpl="{$page.circle.center.lat:n;4},{$page.circle.center.lng:n;4}:{$page.circle.radius:n;0}" />
        </Menu>
        <Circle
            center:bind="$page.circle.center"
            radius:bind="$page.circle.radius"
            options={{
                fillColor: "red",
                fillOpacity: 0.5,
                strokeColor: "red",
                strokeOpacity: 0.9
            }}
            editable
            draggable
        />
    </GoogleMap>
</cx>;
