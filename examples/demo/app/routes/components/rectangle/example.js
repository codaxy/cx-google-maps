import { Menu, NumberField, ColorPicker, ColorField } from 'cx/widgets';

import { GoogleMap, Rectangle } from 'cx-google-maps';

import { Controller as CxController } from 'cx/ui';

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
        this.store.init('$page.bounds', {
            south: 41.3327941600703,
            west: -87.7012093328124,
            north: 41.6653631162898,
            east: -87.1720629882812,
        });
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
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Menu vertical mod="map" itemPadding="small">
                <NumberField value-bind="$page.bounds.south" label="South" />
                <NumberField value-bind="$page.bounds.west" label="West" />
                <NumberField value-bind="$page.bounds.north" label="North" />
                <NumberField value-bind="$page.bounds.east" label="East" />
                <ColorField
                    value={{ bind: '$page.color', defaultValue: '#ff0000' }}
                    label="Color"
                    required
                />
            </Menu>
            <Rectangle
                bounds-bind="$page.bounds"
                options={{
                    fillColor: { bind: '$page.color', defaultValue: '#ff0000' },
                    fillOpacity: 0.5,
                    strokeColor: { bind: '$page.color', defaultValue: '#ff0000' },
                    strokeOpacity: 0.9,
                }}
                editable
                draggable
            />
        </GoogleMap>
    </cx>
);
