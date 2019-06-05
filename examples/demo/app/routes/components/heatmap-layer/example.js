import _ from 'lodash';

import {
    HtmlElement,
    Menu,
    Text,
    Toast,
    Button,
    Slider,
    NumberField,
    TextField,
    Checkbox
} from 'cx/widgets';
import {LabelsTopLayout, LabelsLeftLayout} from 'cx/ui';
import {
    GoogleMap,
    SearchBox,
    Marker,
    MarkerClusterer,
    HeatmapLayer,
} from 'cx-google-maps';

import {VDOM, Controller as CxController, Repeater} from 'cx/ui';
import config from './config';

const containerElement = <div style={{position: 'relative', flex: 1}} />;
const mapElement = (
    <div style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}} />
);

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.7781136,
                lng: -87.8797982,
            },
            zoom: 9,
        };
    }

    onInit() {
        let d = this.getDefaults();
        this.store.init('$page.mapdefaults', d);
        this.store.init('$page.map', d);
        this.store.set('$page.heat', {
            radius: 10,
            opacity: 0.6,
        });

        this.addComputable('$page.gradient', ['$page.altGradient'], alt => {
            return !alt ? null : [
                'rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(0, 127, 255, 1)',
                'rgba(0, 63, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 223, 1)',
                'rgba(0, 0, 191, 1)',
                'rgba(0, 0, 159, 1)',
                'rgba(0, 0, 127, 1)',
                'rgba(63, 0, 91, 1)',
                'rgba(127, 0, 63, 1)',
                'rgba(191, 0, 31, 1)',
                'rgba(255, 0, 0, 1)'
            ];
        });

        this.randomize();
    }

    randomize() {
        let d = this.getDefaults();
        let p = 0.1;
        let points = _.map(
            new Array(1000),
            a =>
                new google.maps.LatLng({
                    lat: d.center.lat + Math.sign(Math.random() - 0.5) * p * Math.log(Math.abs(Math.random())),
                    lng: d.center.lng + Math.sign(Math.random() - 0.5) * p * Math.log(Math.abs(Math.random())),
                }),
        );

        this.store.set('$page.points', points);
    }
}

export default (
    <cx>
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
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}>
            <Menu vertical mod="map" itemPadding="small">
                <div layout={LabelsLeftLayout}>
                    <Slider
                        label="Radius"
                        value-bind="$page.heat.radius"
                        minValue={1}
                        maxValue={40}
                    />
                    <Slider
                        label="Opacity"
                        value-bind="$page.heat.opacity"
                        minValue={0}
                        maxValue={1}
                    />
                    <Checkbox
                        value-bind="$page.altGradient"
                    >
                        Alt. gradient
                    </Checkbox>
                    <Button text="Randomize data" onClick="randomize" />
                </div>
            </Menu>

            <HeatmapLayer
                data-bind="$page.points"
                options={{
                    radius: {bind: "$page.heat.radius"},
                    opacity: {bind: "$page.heat.opacity"},
                    gradient: {bind: "$page.gradient"}
                }}
            />
        </GoogleMap>
    </cx>
);
