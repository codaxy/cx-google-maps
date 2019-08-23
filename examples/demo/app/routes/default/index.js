import { VDOM, ContentPlaceholder, Content } from 'cx/ui';
import Controller from './Controller';
import {
    Section,
    FlexCol,
    Menu,
    Text,
    TextField,
} from 'cx/widgets';
import {
    GoogleMap,
    SearchBox,
} from '../../lib';

import MarkerCollection from './MarkerCollection';

export default (
    <cx>
        <h2 putInto="header">Home</h2>

        <FlexCol style="height: 100%" vspacing>
            <Section mod="card" style="min-height: 80px">
                <h4>Cx Google Maps</h4>
                <p ws>
                    This library provides a
                    <a href="https://cxjs.io" target="_blank">
                        CxJS
                    </a>
                    wrapper for
                    <a
                        href="https://github.com/tomchentw/react-google-maps"
                        target="_blank">
                        react-google-maps
                    </a>, which enables Google Maps components to connect to Cx
                    stores and controllers. Source code of the library,
                    including this demo is available on{' '}
                    <a
                        href="https://github.com/codaxy/cx-google-maps"
                        target="_blank">
                        GitHub
                    </a>.
                </p>

                <p ws>
                    This demo app includes documentation specific for this CxJS
                    implementation. Please, take a look into the original
                    documentation and demo apps for detailed information about
                    underlying{' '}
                    <a
                        href="https://github.com/tomchentw/react-google-maps"
                        target="_blank">
                        React components
                    </a>
                    and various Google Maps
                    <a href="https://developers.google.com/maps/documentation/javascript/3.exp/reference">
                        options, methods and events
                    </a>.
                </p>
            </Section>

            <FlexCol mod="card" style="flex: 1; min-height: 260px">
                <GoogleMap
                    controller={Controller}
                    center-bind="$page.map.center"
                    style="width: 100%; height: 100%; min-height: 400px"
                    zoom-bind="$page.map.zoom"
                    pipeInstance="pipeMap"
                    options={{
                        mapTypeControlOptions: {
                            position: google.maps.ControlPosition.TOP_RIGHT,
                        },
                    }}>
                    <Menu vertical mod="map" itemPadding="small">
                        <a onClick="onResetViewClick">
                            Reset view (<Text tpl="{$page.map.center.lat:n;4},{$page.map.center.lng:n;4}:{$page.map.zoom:n;4}" />)
                        </a>
                    </Menu>
                    <SearchBox
                        if={window.innerWidth >= 768}
                        controlPosition={google.maps.ControlPosition.TOP_CENTER}
                        onPlacesChanged="onSearchPlacesChanged"
                        pipeInstance="pipeSearchBox">
                        <TextField
                            placeholder="Search..."
                            style={{
                                margin: 5,
                                boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
                            }}
                        />
                    </SearchBox>
                    <MarkerCollection />
                </GoogleMap>
            </FlexCol>
        </FlexCol>
    </cx>
);
