import { Menu, Slider, LookupField } from 'cx/widgets';

import { LabelsLeftLayout } from 'cx/ui';

import { GoogleMap, GroundOverlay } from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 40.74,
                lng: -74.18,
            },
            zoom: 12,
        };
    }

    onInit() {
        this.store.init("$page.url", "https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg");
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.layer', {
            bounds: {
                north: 40.773941,
                south: 40.712216,
                east: -74.12544,
                west: -74.22655,
            },
            opacity: 0.7
        });
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <GroundOverlay
                url-bind="$page.url"
                bounds-bind="$page.layer.bounds"
                options={{
                    opacity: { bind: "$page.layer.opacity" },
                    clickable: true
                }}
                onClick={() => alert('Click.')}
            />
            <Menu vertical mod="map" itemPadding="small">
                <div layout={LabelsLeftLayout}>
                    <LookupField
                        options={[
                            { id: 'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg', text: 'Newark' },
                            { id: '', text: 'Empty' }
                        ]}
                        value-bind="$page.url"
                        required
                    />
                    <Slider
                        label="N"
                        value-bind="$page.layer.bounds.north"
                        min={40.75}
                        max={40.80}
                    />
                    <Slider
                        label="S"
                        value-bind="$page.layer.bounds.south"
                        min={40.70}
                        max={40.73}
                    />
                    <Slider
                        label="E"
                        value-bind="$page.layer.bounds.east"
                        min={-74.14}
                        max={-74.10}
                    />
                    <Slider
                        label="W"
                        value-bind="$page.layer.bounds.west"
                        min={-74.24}
                        max={-74.20}
                    />
                    <Slider
                        value-bind="$page.layer.opacity"
                        minValue={0}
                        maxValue={1}
                    />
                </div>
            </Menu>
        </GoogleMap>
    </cx>
);
