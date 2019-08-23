import {
    HtmlElement,
    Menu,
    Toast,
    TextField
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox
} from '../../../lib';

import { Controller as CxController } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.87811360,
                lng: -87.62979820
            },
            zoom: 12
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
    }

    pipeMapInstance(instance) {
        this.map = instance;
    }

    pipeSearchBoxInstance(instance) {
        this.searchBox = instance;
    }

    onSearchPlacesChanged(e) {
        let places = this.searchBox.getPlaces();
        if (places.length < 1)
            return;

        Toast.create({
            message: `Place selected: ${places[0].formatted_address}`,
            timeout: 3000
        }).open();

        let location = places[0].geometry.location
        this.map.panTo(location);

        // We could have just make use of the -bind in the map
        // center (see index.js) and pan like this:

        // this.store.set('$page.map.center', location);

        // However, in this case, panning would be instant,
        // whereas Google Maps panTo provides smooth panning
        // when possible.
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        pipeInstance="pipeMapInstance"
        style="width: 100%; height: 100%; min-height: 400px;"
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <SearchBox
            controlPosition={google.maps.ControlPosition.TOP_CENTER}
            onPlacesChanged="onSearchPlacesChanged"
            pipeInstance="pipeSearchBoxInstance"
            placeholder="Search..."
            value-bind="$page.searchValue"
            style="padding: 5px; margin: 10px 0; border: 1px solid #ccc"
        />
    </GoogleMap>
</cx >;
