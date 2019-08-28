import { Menu, Slider } from 'cx/widgets';

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
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.layer.opacity', 0.7);
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            style="width: 100%; height: 100%; min-height: 400px"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Menu vertical mod="map" itemPadding="small">
                <div layout={LabelsLeftLayout}>
                    <Slider
                        label="Opacity"
                        value-bind="$page.layer.opacity"
                        minValue={0}
                        maxValue={1}
                    />
                </div>
            </Menu>
            <GroundOverlay
                url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
                bounds={{
                    north: 40.773941,
                    south: 40.712216,
                    east: -74.12544,
                    west: -74.22655,
                }}
                opacity-bind="$page.layer.opacity"
            />
        </GoogleMap>
    </cx>
);
