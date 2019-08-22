import { 
    Menu,
    NumberField,
    ColorPicker,
    ColorField
} from 'cx/widgets';

import {
    GoogleMap,
    Rectangle
} from '../../../lib';

import { Controller as CxController } from 'cx/ui';

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
        style="width: 100%; height: 100%; min-height: 400px"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Menu vertical mod="map" itemPadding="small">
            <NumberField value-bind="$page.bounds.south" label="South" />
            <NumberField value-bind="$page.bounds.west" label="West" />
            <NumberField value-bind="$page.bounds.north" label="North" />
            <NumberField value-bind="$page.bounds.east" label="East" />
            <ColorField value={{bind: "$page.color", defaultValue: "#ff0000" }} label="Color" />
        </Menu>
        <Rectangle
            bounds-bind="$page.bounds"
            options={{
                fillColor: { bind: "$page.color" },
                fillOpacity: 0.5,
                strokeColor: { bind: "$page.color" },
                strokeOpacity: 0.9
            }}
            editable
            draggable
        />
    </GoogleMap>
</cx>;
