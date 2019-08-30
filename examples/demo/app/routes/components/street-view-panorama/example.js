import { GoogleMap, OverlayView, StreetViewPanorama, Marker } from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 49.2853171,
                lng: -123.1119202,
            },
            zoom: 8,
        };
    }

    getStreetView() {
        return {
            center: {
                lat: 49.2853171,
                lng: -123.1119202,
            },
            pov: {
                heading: 45,
                pitch: 0,
            },
            zoom: 1,
        };
    }

    onInit() {
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.streetview', this.getStreetView());
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
            <Marker position={{
                lat: 49.2853171,
                lng: -123.1119202,
            }} />
            <StreetViewPanorama
                position-bind="$page.streetview.center"
                zoom-bind="$page.streetview.zoom"
                pov-bind="$page.streetview.pov"
                pano-bind="$page.streetview.pano"
            >
                <Marker position={{
                    lat: 49.28590291211115,
                    lng: -123.11248166065218,
                }} />
            </StreetViewPanorama>
        </GoogleMap>
    </cx>
);
