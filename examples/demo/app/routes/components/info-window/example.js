// We need this for easy update of the markers array
import { updateArray } from 'cx/data';

import { GoogleMap, Marker, InfoWindow } from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';

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
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init(
            '$page.markers',
            Array.from(Array(5).keys()).map((a, i) => ({
                id: i,
                position: {
                    lat: 41.7781136 + Math.random() - 0.5,
                    lng: -87.6297982 + Math.random() - 0.5,
                },
                title: `This is marker ${i}`,
                popup: true,
                heading: 360 * Math.random(),
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
            style="width: 100%; height: 100%; min-height: 400px"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Repeater records-bind="$page.markers" keyField="id">
                <Marker position-bind="$record.position" onClick="togglePopup">
                    <InfoWindow if-bind="$record.popup">
                        <div text-bind="$record.title" />
                    </InfoWindow>
                </Marker>
            </Repeater>
        </GoogleMap>
    </cx>
);
