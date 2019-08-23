//import {GoogleMap, Marker} from 'cx-google-maps';

import {Controller as CxController, bind} from 'cx/ui';
import {GoogleMap} from '../../lib/GoogleMap';
import {Marker} from '../../lib/Marker';

class Controller extends CxController {
    onInit() {
        this.store.init('$page.map', {
            center: {
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 12,
        });
    }
}

export default (
    <cx>
        <GoogleMap
            center-bind="center"
            zoom-bind="zoom"
            style="width: 500px; height: 500px; background: red"
            onClick={e => {
                console.log(e);
            }}
            onCenterChanged={e => {
                console.log(e);
            }}
        >
            <Marker
                position={bind('marker', {lat: 0, lng: 0})}
                draggable
                title="X"
            />
        </GoogleMap>

        <div>
            <span text-tpl="{center.lng},{center.lat}" />
        </div>

        <GoogleMap
            center-bind="center"
            zoom-bind="zoom"
            style="width: 500px; height: 500px;"
            onClick={e => {
                console.log(e);
            }}
            onCenterChanged={e => {
                console.log(e);
            }}
        >
            <Marker position-bind="marker" draggable />
        </GoogleMap>
    </cx>
);
