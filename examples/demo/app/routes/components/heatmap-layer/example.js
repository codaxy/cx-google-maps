import { Menu, Button, Slider, Checkbox } from 'cx/widgets';
import { LabelsLeftLayout } from 'cx/ui';
import { GoogleMap, HeatmapLayer } from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';

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
            return !alt
                ? null
                : [
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
                    'rgba(255, 0, 0, 1)',
                ];
        });

        this.randomize();
    }

    randomize() {
        let d = this.getDefaults();
        let p = 0.1;
        let points = Array.from(new Array(1000)).map(() =>
            new google.maps.LatLng({
                lat:
                    d.center.lat +
                    Math.sign(Math.random() - 0.5) * p * Math.log(Math.abs(Math.random())),
                lng:
                    d.center.lng +
                    Math.sign(Math.random() - 0.5) * p * Math.log(Math.abs(Math.random())),
            }),
        );

        console.log(points, "POINTS ============");

        this.store.set('$page.points', points);
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            style="width: 100%; height: 100%; min-height: 400px"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
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
                    <Checkbox value-bind="$page.altGradient">Alt. gradient</Checkbox>
                    <Button text="Randomize data" onClick="randomize" />
                </div>
            </Menu>

            <HeatmapLayer
                data-bind="$page.points"
                options={{
                    radius: { bind: '$page.heat.radius' },
                    opacity: { bind: '$page.heat.opacity' },
                    gradient: { bind: '$page.gradient' },
                }}
            />
        </GoogleMap>
    </cx>
);
