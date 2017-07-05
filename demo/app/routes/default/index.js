import { VDOM } from "cx/ui";
import { HtmlElement, Link, Section, FlexCol, Menu, Submenu } from "cx/widgets";
import { GoogleMap, Marker, InfoBox, InfoWindow, SearchBox } from "cx-google-maps";

import DirectionsCollection from "./DirectionsCollection";
import MarkerCollection from "./MarkerCollection";
import Controller from "./Controller";

const containerElement = <div style={{ position: "relative", flex: 1 }} />;
const mapElement = (
    <div
        style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}
    />
);

export default (
    <cx>
        <h2 putInto="header">
            Home
        </h2>

        <FlexCol style="height: 100%" vspacing>
            <Section mod="card">
                <h4>Cx Google Maps</h4>
                <p ws>
                    This library provides a
                    <a href="https://cxjs.io" target="_blank">CxJS</a>
                    wrapper for
                    <a
                        href="https://github.com/tomchentw/react-google-maps"
                        target="_blank"
                    >
                        react-google-maps
                    </a>, which enables Google Maps components to connect 
                    to Cx stores and controllers.
                </p>

                <p ws>
                    This demo app includes documentation specific for this
                    CxJS implementation. Please, take a look into the original documentation and demo
                    apps for detailed information about underlying <a href="https://github.com/tomchentw/react-google-maps" target="_blank">React components</a>
                    and various Google Maps 
                    <a href="https://developers.google.com/maps/documentation/javascript/3.exp/reference">options, methods and events</a>.
                </p>
            </Section>

            <FlexCol mod="card" style="flex: 1">
                <GoogleMap
                    controller={Controller}
                    containerElement={containerElement}
                    mapElement={mapElement}
                    defaultCenter:bind="$page.map.center"
                    defaultZoom:bind="$page.map.zoom"
                    center:bind="$page.map.center"
                    zoom:bind="$page.map.zoom"
                    pipeInstance="pipeMap"
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
                        <a onClick="onResetViewClick">
                            Reset view
                        </a>
                    </Menu>                    
                    <SearchBox
                        controlPosition={google.maps.ControlPosition.TOP_CENTER}
                        onPlacesChanged="onSearchPlacesChanged"
                        pipeInstance="pipeSearchBox"
                        inputPlaceholder="Search..."
                        inputStyle={{
                            boxSizing: `border-box`,
                            MozBoxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `300px`,
                            height: `32px`,
                            marginTop: `10px`,
                            padding: `0 12px`,
                            borderRadius: `0px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`
                        }}
                    />
                    <MarkerCollection />
                </GoogleMap>
            </FlexCol>
        </FlexCol>
    </cx>
);
