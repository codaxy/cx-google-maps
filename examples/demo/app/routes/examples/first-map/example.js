import {
    GoogleMap,
    Marker
} from '../../../lib';

import { VDOM, Controller as CxController } from 'cx/ui';

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
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
    >
        <Marker
            position-bind="$page.map.center"
        />    
    </GoogleMap>
</cx>;