import _ from 'lodash';

import { 
    HtmlElement, 
    Menu,
    Text,
    Toast,
    Button
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer,
    Polyline
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
            zoom: 9
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());   
        this.store.init('$page.polylinePath', _.range(6)
            .map(() => ({
                lat: 41.77811360 + Math.random() - 0.5, 
                lng: -87.62979820 + Math.random() - 0.5
            })));
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
        <Menu
            vertical
            mod="map"
            itemPadding="small"
        >
            <Repeater records:bind="$page.polylinePath">
                <Text tpl="{$record.lat:n;8}, {$record.lng:n;8}" />
            </Repeater>
        </Menu>   
        <Polyline
            path:bind="$page.polylinePath"
            options={{
                strokeColor: "green",
                strokeOpacity: 0.9
            }}
            editable
            draggable
        />
    </GoogleMap>
</cx>;