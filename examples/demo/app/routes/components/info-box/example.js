// We need this for easy update of the markers array
import { updateArray } from 'cx/data';

import {
    GoogleMap,
    Marker,
    InfoBox
} from '../../../lib';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';

class Controller extends CxController {
    getDefaults() { 
        return {
            center: {
                lat: 41.77811360,
                lng: -87.62979820
            },
            zoom: 9
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());   
        this.store.init('$page.markers', Array.from(Array(5).keys())
            .map((a, i) => ({
                id: i,
                position: {
                    lat: 41.77811360 + Math.random() - 0.5, 
                    lng: -87.62979820 + Math.random() - 0.5, 
                },
                popup: true
            })));
    }

    togglePopup(e, {store}) {
        var id = store.get('$record.id');
        store.update('$page.markers', updateArray, m => ({
            ...m,
            popup: !m.popup
        }), m => m.id === id); // The last parameter is the filter
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        style="width: 100%; height: 100%; min-height: 400px"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Repeater 
            records-bind="$page.markers"
            keyField="id">
            <Marker
                position-bind="$record.position"
                onClick="togglePopup"
                icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    strokeColor: "white",
                    fillColor: "red",
                    fillOpacity: 0.8,
                    strokeWeight: 4
                }} 
            >
                <InfoBox 
                    options={{
                        closeBoxURL: "",
                        boxClass: "cxm-infobox"
                    }}
                    if-bind="$record.popup"
                >
                    <span text-tpl="{$record.position.lat:n;4} {$record.position.lng:n;4}" />
                </InfoBox>
            </Marker>
        </Repeater>    
    </GoogleMap>
</cx>;