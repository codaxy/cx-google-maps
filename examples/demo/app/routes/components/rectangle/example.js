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
    Rectangle
} from '../../../lib';

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
        this.store.init('$page.bounds', {
            north: 41.77811360,
            west: -87.62979820,
            east: -86.62,
            south: 41.18
        });
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        center-bind="$page.map.center"
        style="width: 100%; height: 100%; min-height: 400px; background: red"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Menu vertical mod="map" itemPadding="small">
            <Text tpl="{$page.bounds.north:n;4},{$page.bounds.south:n;4}:{$page.bounds.east:n;4},{$page.bounds.west:n;4}" />
        </Menu>
        <Rectangle
            bounds-bind="$page.bounds"
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
