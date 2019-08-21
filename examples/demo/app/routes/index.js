import { Route, PureContainer, Section, Sandbox } from 'cx/widgets';
import { FirstVisibleChildLayout } from 'cx/ui';

import AppLayout from '../layout';

//qimport Default from './default';
import About from './about';

import GoogleMap from './components/google-map';
import SearchBox from './components/search-box';
import Marker from './components/marker';
// import MarkerWithLabel from './components/marker-with-label';
// import MarkerClusterer from './components/marker-clusterer';
// import Polygon from './components/polygon';
// import Polyline from './components/polyline';
// import KmlLayer from './components/kml-layer';
// import InfoWindow from './components/info-window';
// import InfoBox from './components/info-box';
// import DirectionsRenderer from './components/directions-renderer';
// import DrawingManager from './components/drawing-manager';
// import FusionTablesLayer from './components/fusion-tables-layer';
// import GroundOverlay from './components/ground-overlay';
// import BicyclingLayer from './components/bicycling-layer';
// import Circle from './components/circle';
// import OverlayView from './components/overlay-view';
import Rectangle from './components/rectangle';
// import StreetViewPanorama from './components/street-view-panorama';
// import TrafficLayer from './components/traffic-layer';
// import HeatmapLayer from './components/heatmap-layer';
// import StandaloneSearchBox from './components/standalone-search-box';

// import FirstMap from './examples/first-map';
// import Filtering from './examples/filtering';
// import Routing from './examples/routing';
// import PlacingMarkers from './examples/placing-markers';

export default (
    <cx>
        <Sandbox
            key-bind="url"
            storage-bind="pages"
            outerLayout={AppLayout}
            layout={FirstVisibleChildLayout}
        >
            {/*<Route route="~/" url-bind="url">
                <Default />
</Route>*/}
            <Route route="~/about" url-bind="url">
                <About />
            </Route>

            <GoogleMap />

            <SearchBox />
            <Marker />
            <Rectangle />
            {/*
            <MarkerWithLabel />
            <MarkerClusterer />
            <Polygon />
            <Polyline />
            <KmlLayer />
            <InfoWindow />
            <InfoBox />
            <DirectionsRenderer />
            <DrawingManager />
            <FusionTablesLayer />
            <GroundOverlay />
            <Circle />
            <OverlayView />
            <StreetViewPanorama />
            <TrafficLayer />
            <HeatmapLayer />
            <StandaloneSearchBox />

            <FirstMap />
            <Filtering />
            <Routing />
            <PlacingMarkers />
            <BicyclingLayer />

            */}

            <Section title="Page Not Found" mod="card">
                This page doesn't exists. Please check your URL.
            </Section>
        </Sandbox>
    </cx>
);
