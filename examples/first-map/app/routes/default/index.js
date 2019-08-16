//import {GoogleMap, Marker} from 'cx-google-maps';

import {VDOM, Controller as CxController, bind} from 'cx/ui';
import {GoogleMap} from '../../lib/GoogleMap';
import {Marker} from '../../lib/Marker';

const containerElement = <div style={{position: 'relative', height: '100%'}} />;
const mapElement = (
    <div style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}} />
);

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
            style="width: 500px; height: 500px; background: red"
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

// export default (
//   <cx>
//     // <GoogleMap
//     //   controller={Controller}
//     //   containerElement={containerElement}
//     //   mapElement={mapElement}
//     //   defaultCenter-bind="$page.map.center"
//     //   defaultZoom-bind="$page.map.zoom"
//     //   center-bind="$page.map.center"
//     //   zoom-bind="$page.map.zoom"
//     // >
//     //   <Marker position-bind="$page.map.center" />
//     // </GoogleMap>
//   </cx>
// );
