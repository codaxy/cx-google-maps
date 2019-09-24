import { Toast, Menu, Slider, Button, MenuItem } from 'cx/widgets';

import { GoogleMap, MarkerWithLabel } from 'cx-google-maps';

import { VDOM, Controller as CxController, FirstVisibleChildLayout, PureContainer } from 'cx/ui';

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 12,
        };
    }

    onMarkerClick() {
        Toast.create({
            message: `Marker clicked.`,
            timeout: 3000,
        }).open();
    }

    onInit() {
        this.store.init("$page.showMarker", true);
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
    }

    toggleMarker() {
        this.store.toggle("$page.showMarker");
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
            center-bind="$page.map.center"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Menu vertical mod="map" itemPadding="small">
                <Slider value-bind="$page.slider" min={0} max={100} step={1} />
                <MenuItem onClick="toggleMarker">Toggle Visibility</MenuItem>
            </Menu>
            <PureContainer if-bind="$page.showMarker">
                <MarkerWithLabel
                    position-bind="$page.map.center"
                    title="This is a custom icon marker with label"
                    icon="https://codaxy.github.io/cx-google-maps/assets/img/cx.png"
                    labelAnchor={{ x: 0, y: 0 }}
                    labelStyle={{
                        backgroundColor: 'rgba(20, 40, 120, 0.5)',
                        color: 'white',
                        fontSize: '18px',
                        padding: '12px',
                    }}
                    onClick="onMarkerClick"
                >
                    <PureContainer layout={FirstVisibleChildLayout}>
                        <span if-expr="{$page.slider} < 50" text-tpl="cx-google-maps {$page.slider}" />
                        <span text-tpl="spam-elgoog-xc {$page.slider}" />
                    </PureContainer>
                </MarkerWithLabel>
            </PureContainer>
        </GoogleMap>
    </cx>
);
