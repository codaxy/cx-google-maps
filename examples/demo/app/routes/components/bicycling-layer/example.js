
import { HtmlElement, Menu, Text, Toast, Button, Grid } from 'cx/widgets';

import {
    GoogleMap,
    BicyclingLayer,
} from '../../../lib';

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
            style="width: 100%; height: 100%; min-height: 400px"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                }
            }}
        >
            <BicyclingLayer />
        </GoogleMap>
    </cx>
);
