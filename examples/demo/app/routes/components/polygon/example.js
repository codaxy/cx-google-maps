import _ from 'lodash';

import { 
    HtmlElement, 
    Menu,
    Text,
    Toast,
    Button,
    Grid
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer,
    Polygon
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
        this.store.init('$page.path', _.range(3)
            .map(() => ({
                lat: 41.77811360 + Math.random() - 0.5, 
                lng: -87.62979820 + Math.random() - 0.5
            })));
    }

    onRemovePoint(e, {store}) {
        let index = store.get('$index');
        let points = store.get('$page.path');
        if (points.length > 3)
            this.store.set('$page.path', points.filter((p, i) => i != index));
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
        <Grid mod="map" 
            records:bind="$page.path"
            columns={[
                { header: 'Latitude', field: 'lat', format: "n;8", sortable: true, align: "center" },
                { header: 'Longitude', field: 'lng', format: "n;8", sortable: true, align: "center" },
                { 
                    header: '',
                    items: <Button
                        mod="hollow"
                        icon="clear"
                        disabled:expr="{$page.path.length} <= 3"
                        onClick="onRemovePoint"/>
                }
            ]}>
        </Grid>
        <Polygon
            path:bind="$page.path"
            options={{
                fillColor: "red",
                fillOpacity: 0.5,
                strokeColor: "red",
                strokeOpacity: 0.9
            }}
            editable
            draggable
        />
    </GoogleMap>
</cx>;