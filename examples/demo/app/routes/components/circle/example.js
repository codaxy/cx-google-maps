import _ from 'lodash';

import {
    Menu,
    NumberField,
    ColorField,
    Slider,
} from 'cx/widgets';

import {
    GoogleMap,
    Circle
} from '../../../lib';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';
import config from './config';

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
        this.store.init('$page.center', {
            lat: 41.77811360,
            lng: -87.62979820
        });

        this.store.init('$page.radius', 10000);
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        center-bind="$page.map.center"
        style="width: 100%; height: 100%; min-height: 400px"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Menu vertical mod="map" itemPadding="small">
            <NumberField value-bind="$page.center.lat" />
            <NumberField value-bind="$page.center.lng" />
            <Slider value-bind="$page.radius" min={1} max={50000} />
            <ColorField value={{ bind: "$page.color", defaultValue: "#ff0000" }}
                required />
        </Menu>
        <Circle
            center-bind="$page.center"
            radius-bind="$page.radius"
            options={{
                fillColor: { bind: "$page.color", defaultValue: "#ff0000" },
                fillOpacity: 0.5,
                strokeColor: { bind: "$page.color", defaultValue: "#ff0000" },
                strokeOpacity: 0.9
            }}
            editable
            draggable
        />
    </GoogleMap>
</cx>;
