import { 
    HtmlElement, 
    Menu,
    Toast
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    DirectionsRenderer
} from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';
import config from './config';

const containerElement = <div style={{ position: "relative", flex: 1 }} />;
const mapElement =
    <div
        style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}
    />
;

class Controller extends CxController {
    getDefaults() { 
        return {
            center: new google.maps.LatLng(41.8507300, -87.6512600),
            zoom: 12
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());        
        this.store.init('$page.directions', null);        

        let svc = new google.maps.DirectionsService();
        svc.route({
            origin: new google.maps.LatLng(41.77848077, -87.72102356),
            destination: new google.maps.LatLng(42.03807425, -87.88444519),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.store.set('$page.directions', result);
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        containerElement={containerElement}
        mapElement={mapElement}
        defaultCenter-bind="$page.map.center"
        defaultZoom-bind="$page.map.zoom"
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <DirectionsRenderer
            if-expr="!!{$page.directions}"
            directions-bind="$page.directions"
        />    
    </GoogleMap>
</cx>;