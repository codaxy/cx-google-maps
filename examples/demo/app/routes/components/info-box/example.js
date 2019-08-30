// We need this for easy update of the markers array
import { updateArray } from 'cx/data';

import { GoogleMap, Marker, InfoBox } from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';
import { Menu, LookupField } from 'cx/widgets';

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
        this.store.init('$page.boxClass', 'blue');
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init(
            '$page.markers',
            Array.from(new Array(5)).map((_, i) => ({
                id: i,
                position: {
                    lat: 41.7781136 + Math.random() - 0.5,
                    lng: -87.6297982 + Math.random() - 0.5,
                },
                popup: true,
            })),
        );
    }

    togglePopup(e, { store }) {
        store.toggle('$record.popup');
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
            <Menu vertical mod="map" itemPadding="small">
                <LookupField
                    options={[
                        { id: 'red', text: 'red' },
                        { id: 'blue', text: 'blue' },
                        { id: 'green', text: 'green' },
                    ]}
                    value-bind="$page.boxClass"
                    required
                />
            </Menu>
            <Repeater records-bind="$page.markers" keyField="id">
                <Marker
                    position-bind="$record.position"
                    onClick="togglePopup"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        strokeColor: 'white',
                        fillColor: 'red',
                        fillOpacity: 0.8,
                        strokeWeight: 4,
                    }}
                >
                    <InfoBox
                        options={{
                            closeBoxURL: '',
                            boxClass: { tpl: 'infobox {$page.boxClass}' },
                        }}
                        if-bind="$record.popup"
                    >
                        <span text-tpl="{$record.position.lat:n;4} {$record.position.lng:n;4}" />
                    </InfoBox>
                </Marker>
            </Repeater>
        </GoogleMap>
    </cx>
);
