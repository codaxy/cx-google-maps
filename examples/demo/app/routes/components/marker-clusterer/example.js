import { GoogleMap, SearchBox, Marker, MarkerClusterer } from 'cx-google-maps';

import { Controller as CxController, Repeater } from 'cx/ui';
import { Menu, Slider } from 'cx/widgets';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 10,
        };
    }

    onInit() {
        this.store.init('$page.gridSize', 150);
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init(
            '$page.markers',
            Array.from(new Array(200)).map((_, i) => ({
                id: i,
                position: {
                    lat: 41.7781136 + Math.random() - 0.5,
                    lng: -87.6297982 + Math.random() - 0.5,
                },
                title: `This is marker ${i}`,
                heading: 360 * Math.random(),
            })),
        );
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Menu vertical mod="map" itemPadding="small">
                <Slider value-bind="$page.gridSize" min={0} max={300} />
            </Menu>
            <MarkerClusterer gridSize-bind="$page.gridSize">
                <Repeater records-bind="$page.markers" keyField="id">
                    <Marker
                        position-bind="$record.position"
                        title-bind="$record.title"
                        noRedraw
                        icon={{
                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                            scale: 6,
                            rotation: { bind: '$record.heading' },
                            fillColor: 'red',
                            fillOpacity: 0.5,
                            strokeColor: 'white',
                            strokeWeight: 2,
                            strokeOpacity: 1,
                        }}
                    />
                </Repeater>
            </MarkerClusterer>
        </GoogleMap>
    </cx>
);
