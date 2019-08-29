
import { Toast, Button, Menu, Slider, MenuItem } from 'cx/widgets';

import { GoogleMap, OverlayView } from 'cx-google-maps';

import { VDOM, Controller as CxController, Repeater } from 'cx/ui';

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
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 9
        };
    }

    onInit() {
        this.store.init('$page.map', this.getDefaults());
        this.store.init('$page.overlay', this.getDefaults());
    }

    onResetClick() {
        this.store.set('$page.map', this.getDefaults());
        this.store.set('$page.overlay', this.getDefaults());
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
            center-bind="$page.map.center"
            style="width: 100%; height: 100%; min-height: 400px"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Menu mod="map" itemPadding="small">
                <Slider value-bind="$page.overlay.center.lat" minValue={41} maxValue={42} />
                <Slider value-bind="$page.overlay.center.lng" minValue={-88} maxValue={-87}/>
                <a onClick="onResetClick">Reset all</a>
            </Menu>

            <OverlayView
                position-bind="$page.overlay.center"
                mapPaneName="overlayMouseTarget"
                getPixelPositionOffset={getPixelPositionOffset}
            >
                <div
                    style={{
                        background: 'rgba(20, 40, 120, 0.3)',
                        color: 'white',
                        padding: 20,
                    }}
                >
                    <Button text="Click this button" mod="primary" onClick="onOverlayBtnClick" />
                </div>
            </OverlayView>
        </GoogleMap>
    </cx>
);
