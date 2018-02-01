import _ from 'lodash';

import {
    HtmlElement,
    Menu,
    Text,
    Toast,
    Button,
    Grid,
    FlexCol,
} from 'cx/widgets';

import {
    GoogleMap,
    SearchBox,
    OverlayView,
    StreetViewPanorama,
} from 'cx-google-maps';

import {VDOM, Controller as CxController, Repeater} from 'cx/ui';
import config from './config';

const containerElement = <div style={{position: 'relative', flex: 1}} />;
const mapElement = (
    <div
        style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
    />
);

const getPixelPositionOffset = (width, height) => {
    return {
        x: -(width / 2),
        y: -(height / 2),
    };
};

class Controller extends CxController {
    getDefaults() {
        return {
            center: {
                lat: 49.2853171,
                lng: -123.1119202,
            },
            zoom: 8,
        };
    }

    getStreetView() {
        return {
            center: {
                lat: 49.28590291211115,
                lng: -123.11248166065218,
            },
            pov: {
                heading: 45,
                pitch: 0
            },
            zoom: 1,
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.streetview', this.getStreetView());
    }

    onOverlayBtnClick() {
        Toast.create({
            message: 'You clicked on a button in an overlay.',
            timeout: 3000,
        }).open();
    }
}

export default (
    <cx>
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
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}>
            <StreetViewPanorama
                position:bind="$page.streetview.center"
                zoom:bind="$page.streetview.zoom"
                pov:bind="$page.streetview.pov"
            >
                <OverlayView
                    position={{
                        lat: 49.28590291211115,
                        lng: -123.11248166065218,
                    }}
                    mapPaneName="overlayLayer"
                    getPixelPositionOffset={getPixelPositionOffset}>

                    <div style={{
                        background: "rgba(20, 40, 120, 0.3)",
                        padding: 20
                    }}>
                    <Button text="Fixed overlay"
                        mod="primary"
                        onClick="onOverlayBtnClick"
                    />
                </div>
            </OverlayView>
        </StreetViewPanorama>
    </GoogleMap>
</cx>
);
