import { VDOM } from "cx/ui";
import { HtmlElement, Link, Section, FlexCol } from "cx/widgets";
import { GoogleMap, Marker, InfoBox, SearchBox } from "cx-google-maps";

import DirectionsCollection from "./DirectionsCollection";
import MarkerCollection from "./MarkerCollection";

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
                    <a href="https://cxjs.io" target="_blank">Cx</a>
                    wrapper around
                    <a
                        href="https://github.com/tomchentw/react-google-maps"
                        target="_blank"
                    >
                        react-google-maps
                    </a>.
                </p>
            </Section>

            <FlexCol mod="card" style="flex: 1">
                <GoogleMap
                    containerElement={containerElement}
                    mapElement={mapElement}
                    defaultCenter={{ lat: 40.77664177, lng: -73.96931648 }}
                    defaultZoom={13}
                    options={{
                        mapTypeControlOptions: {
                            position: google.maps.ControlPosition.TOP_LEFT
                        }
                    }}
                >
                    <SearchBox
                        controlPosition={google.maps.ControlPosition.TOP_CENTER}
                        mod="searchbox"
                        inputPlaceholder="Search..."
                    />

                    <DirectionsCollection />
                    <MarkerCollection />
                </GoogleMap>
            </FlexCol>
        </FlexCol>
    </cx>
);
