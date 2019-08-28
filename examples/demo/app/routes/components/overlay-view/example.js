import _ from 'lodash';

import { Toast, Button } from 'cx/widgets';

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
            zoom: 9,
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
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
            <OverlayView
                position-bind="$page.map.center"
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
