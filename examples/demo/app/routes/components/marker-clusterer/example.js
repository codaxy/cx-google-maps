import _ from 'lodash';

import { 
    HtmlElement, 
    Menu,
    Toast
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer
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
        this.store.init('$page.markers', _.range(200)
            .map((a, i) => ({
                id: i,
                position: {
                    lat: 41.77811360 + Math.random() - 0.5, 
                    lng: -87.62979820 + Math.random() - 0.5, 
                },
                title: `This is marker ${i}`,
                heading: 360 * Math.random()
            })));
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
        <MarkerClusterer>
            <Repeater 
                records-bind="$page.markers"
                keyField="id">
                <Marker
                    position-bind="$record.position"
                    title-bind="$record.title"
                    noRedraw
                    icon={{
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 6,
                        rotation: {bind: '$record.heading'},
                        fillColor: 'red',
                        fillOpacity: 0.5,
                        strokeColor: 'white',
                        strokeWeight: 2,
                        strokeOpacity: 1
                    }} />
            </Repeater>    
        </MarkerClusterer>            
    </GoogleMap>
</cx>;