import {
    HtmlElement,
    Menu,
    Toast,
    Slider,
    ColorField
} from 'cx/widgets';

import {
    GoogleMap,
    Marker
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
        style="width: 100%; height: 100%; min-height: 400px;"
        controller={Controller}
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Menu vertical mod="map" itemPadding="small">
            <Slider value-bind="$page.heading"
                min={0}
                max={360}
            />
            <Slider 
                value={{ bind:"$page.opacity", defaultValue: 1 }}
                min={0}
                max={1}
                defaultValue={1}
            />
            <ColorField 
                value={{ bind: "$page.color", defaultValue: "#ff0000" }} />
        </Menu>
        <Marker
            position-bind="$page.map.center"
            title="This is a custom icon marker with rollover text"

            icon={{
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 6,
                rotation: { bind: '$page.heading' },
                strokeColor: 'white',
                fillColor: { bind: "$page.color" },
                fillOpacity: 0.8,
                anchor: new google.maps.Point(0, 2.5),
                strokeWeight: 2
            }}

            opacity-bind="$page.opacity"

            onClick="onMarkerClick"
        />
    </GoogleMap>
</cx>;