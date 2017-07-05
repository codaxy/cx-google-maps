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

            <Section title="Page Not Found" mod="card">
                This page doesn't exists. Please check your URL.
            </Section>
        </Sandbox>
    </cx>
);
