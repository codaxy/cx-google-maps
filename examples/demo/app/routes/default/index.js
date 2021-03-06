import { VDOM, ContentPlaceholder, Content } from 'cx/ui';
import Controller from './Controller';
import { Section, FlexCol, Menu, Text, TextField } from 'cx/widgets';
import { GoogleMap, SearchBox } from 'cx-google-maps';

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
                        href="https://developers.google.com/maps/documentation/javascript/3.exp/reference"
                        target="_blank"
                    >
                        Google Maps
                    </a>
                    , which enables Google Maps components to connect to Cx stores and controllers.
                    Source code of the library, including this demo is available on{' '}
                    <a href="https://github.com/codaxy/cx-google-maps" target="_blank">
                        GitHub
                    </a>
                    .
                </p>

                <p ws>
                    This demo app includes documentation specific for this CxJS implementation.
                    Please, take a look into the original documentation and demo apps for detailed
                    information about underlying{' '}
                    <a
                        href="https://developers.google.com/maps/documentation/javascript/3.exp/reference"
                        target="_blank"
                    >
                        Google Maps components
                    </a>
                    .
                </p>
            </Section>

            <FlexCol mod="card" style="flex: 1; min-height: 260px">
                <GoogleMap
                    controller={Controller}
                    style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"
                    center-bind="$page.map.center"
                    zoom-bind="$page.map.zoom"
                    pipeInstance="pipeMap"
                    controlSize={22}
                    options={{
                        mapTypeControlOptions: {
                            position: google.maps.ControlPosition.TOP_RIGHT,
                        },
                    }}
                >
                    <Menu vertical mod="map" itemPadding="small">
                        <a onClick="onResetViewClick">
                            Reset view (
                            <Text tpl="{$page.map.center.lat:n;4},{$page.map.center.lng:n;4}:{$page.map.zoom:n;4}" />
                            )
                        </a>
                    </Menu>
                    <SearchBox
                        if={window.innerWidth >= 768}
                        controlPosition={google.maps.ControlPosition.TOP_CENTER}
                        onPlacesChanged="onSearchPlacesChanged"
                        pipeInstance="pipeSearchBox"
                        placeholder="Search..."
                        style={{
                            margin: '5px',
                            padding: '4px 10px',
                        }}
                    />
                    <MarkerCollection />
                </GoogleMap>
            </FlexCol>
        </FlexCol>
    </cx>
);
