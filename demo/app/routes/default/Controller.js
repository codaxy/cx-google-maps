import { Controller } from 'cx/ui';
import { Toast } from 'cx/widgets'

export const defaultCenter = { lat: 40.77664177, lng: -73.96931648 };
export const defaultZoom = 13;

export default class extends Controller {
    onInit() {
        this.store.init('$page.map.center', defaultCenter);
        this.store.init('$page.map.zoom', defaultZoom);
    }

    pipeMap(instance) {
        this.map = instance;
    }

    pipeSearchBox(instance) {
        this.searchBox = instance;
    }

    onSearchPlacesChanged(e, instance) {
        let places = this.searchBox.getPlaces();
        if (places.length < 1)
            return;
        
        Toast.create({
            message: `Place selected: ${places[0].formatted_address}`,
            timeout: 3000
        }).open();

        let location = places[0].geometry.location
        this.map.panTo(location);
            
        // We could have just make use of the :bind in the map
        // center (see index.js) and move it like this:
        
        // this.store.set('$page.map.center', location);
        
        // However, in this case, panning would be instant,
        // whereas Google Maps panTo provides smooth panning
        // when possible.
    }

    onResetViewClick() {
        this.map.panTo(defaultCenter);
    }
};
