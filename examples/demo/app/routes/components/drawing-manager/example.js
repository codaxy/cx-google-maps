import _ from 'lodash';

import {HtmlElement, Menu, Text, Toast, Button, Grid} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer,
    DrawingManager,
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
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 9,
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
    }

    onMarkerComplete(e) {
        Toast.create({
            message: `A marker at ${e.position.lat()}, ${e.position.lng()}.`,
            timeout: 3000
        }).open();
    }

    onCircleComplete(e, {store}) {
        Toast.create({
            message: `A circle of radius ${e.radius}.`,
            timeout: 3000
        }).open();
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
            <DrawingManager
                options={{
                    circleOptions: {
                        fillColor: `#ffff00`,
                        fillOpacity: 1,
                        strokeWeight: 5,
                        clickable: false,
                        editable: true,
                        zIndex: 1,
                    },
                    drawingControl: true,
                }}
                onCircleComplete="onCircleComplete"
                onMarkerComplete="onMarkerComplete"
            />
        </GoogleMap>
    </cx>
);
