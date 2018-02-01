import {
    HtmlElement,
    Text,
    Toast,
    Button,
    Grid,
    Menu,
    Slider,
} from 'cx/widgets';

import {
    LabelsLeftLayout
} from 'cx/ui';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer,
    GroundOverlay,
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
            containerElement={containerElement}
            mapElement={mapElement}
            defaultCenter:bind="$page.map.center"
            defaultZoom:bind="$page.map.zoom"
            center:bind="$page.map.center"
            zoom:bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}>
            <Menu vertical mod="map" itemPadding="small">
                <div layout={LabelsLeftLayout}>
                    <Slider
                        label="Opacity"
                        value:bind="$page.layer.opacity"
                        minValue={0}
                        maxValue={1}
                    />
                </div>
            </Menu>
            <GroundOverlay
                defaultUrl="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
                defaultBounds={{
                    north: 40.773941,
                    south: 40.712216,
                    east: -74.12544,
                    west: -74.22655,
                }}
                opacity:bind="$page.layer.opacity"
            />
        </GoogleMap>
    </cx>
);
