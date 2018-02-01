import _ from 'lodash';

import { 
    HtmlElement, 
    Menu,
    Toast
} from 'cx/widgets';

// We need this for easy update of the markers array
import { updateArray } from 'cx/data';

import {
    GoogleMap,
    SearchBox,
    Marker,
    InfoWindow
} from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';
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
            center: {
                lat: 41.77811360,
                lng: -87.62979820
            },
            zoom: 10
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());   
        this.store.init('$page.markers', _.range(5)
            .map((a, i) => ({
                id: i,
                position: {
                    lat: 41.77811360 + Math.random() - 0.5, 
                    lng: -87.62979820 + Math.random() - 0.5, 
                },
                title: `This is marker ${i}`,
                popup: true,
                heading: 360 * Math.random()
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
        containerElement={containerElement}
        mapElement={mapElement}
        defaultCenter:bind="$page.map.center"
        defaultZoom:bind="$page.map.zoom"
        center:bind="$page.map.center"
        zoom:bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Repeater 
            records:bind="$page.markers"
            keyField="id">
            <Marker
                position:bind="$record.position"
                onClick="togglePopup"
            >
                <InfoWindow
                    if:bind="$record.popup"
                    onCloseClick="togglePopup"
                >
                    <div text:bind="$record.title"></div>
                </InfoWindow>
            </Marker>
        </Repeater>    
    </GoogleMap>
</cx>;