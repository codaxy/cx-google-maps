import {
    GoogleMap,
    Marker
} from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';

const containerElement = <div style={{ position: "relative", flex: 1 }} />;
const mapElement = <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }} />;

class Controller extends CxController {
    onInit() {
        this.store.init('$page.map', {
            center: {
                lat: 41.77811360,
                lng: -87.62979820
            },
            zoom: 12
        });        
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        containerElement={containerElement}
        mapElement={mapElement}
        defaultCenter:bind="$page.map.center"
        defaultZoom:bind="$page.map.zoom"
        center:bind="$page.map.center"
        zoom:bind="$page.map.zoom"
    >
        <Marker
            position:bind="$page.map.center"
        />    
    </GoogleMap>
</cx>;