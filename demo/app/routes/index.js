import { Route, PureContainer, Section, Sandbox } from "cx/widgets";
import { FirstVisibleChildLayout } from "cx/ui";

import AppLayout from "../layout";

import Default from "./default";
import About from "./about";

import GoogleMap from "./components/google-map";
import SearchBox from "./components/search-box";
import Marker from "./components/marker";
import MarkerClusterer from "./components/marker-clusterer";
import Polygon from "./components/polygon";
import Polyline from "./components/polyline";
import KmlLayer from "./components/kml-layer";
import InfoWindow from "./components/info-window";
import InfoBox from "./components/info-box";
import DirectionsRenderer from "./components/directions-renderer"

import FirstMap from "./examples/first-map";
import Filtering from "./examples/filtering";
import Routing from "./examples/routing";
import PlacingMarkers from "./examples/placing-markers";

export default (
    <cx>
        <Sandbox
            key:bind="url"
            storage:bind="pages"
            outerLayout={AppLayout}
            layout={FirstVisibleChildLayout}
        >
            <Route route="~/" url:bind="url">
                <Default />
            </Route>
            <Route route="~/about" url:bind="url">
                <About />
            </Route>

            <GoogleMap />
            <SearchBox />
            <Marker />
            <MarkerClusterer />
            <Polygon />
            <Polyline />
            <KmlLayer />
            <InfoWindow />
            <InfoBox />
            <DirectionsRenderer />

            <FirstMap />
            <Filtering />
            <Routing />
            <PlacingMarkers />

            <Section title="Page Not Found" mod="card">
                This page doesn't exists. Please check your URL.
            </Section>
        </Sandbox>
    </cx>
);
