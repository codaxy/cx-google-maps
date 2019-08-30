import {
    HtmlElement,
    Route,
    FlexCol,
    FlexRow,
    Section
} from 'cx/widgets';

import Example from './example';
import {
    config,
    events
} from './config';

import {
    ConfigTable,
    EventTable,
    CodeSnippet,
    Md
} from 'app/components';

const info = {
    name: 'StreetViewPanorama',
    route: '~/components/street-view-panorama',

    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama"
};

export default <cx>
    <Route url-bind="url" route={info.route}>
        <h2 putInto="header">
            {info.name}
        </h2>

        <FlexRow style="height: 100%" spacing target="desktop">
            <Section mod="card" style="flex:1">
                <h4>
                    {info.name}
                    <span class="cxe-import">{`import { ${info.name} } from 'cx-google-maps'`}</span>
                </h4>

                <p ws>
                    Cx wrapper around <a href={info.googleMapsDocs} target="_blank">{info.name}</a> component.
                    For additional info about various options, available events and methods, please see <a href={info.googleMapsDocs} target="_blank">Google Maps Docs</a>.
                </p>

                <Md>
                    ##### Configuration
                    <ConfigTable props={config} />

                    <br/>
                    <br/>

                    <EventTable props={events} />

                    <br/>
                    <br/>

                    ##### Example
                    <CodeSnippet>{`
this.store.init('$page.streetview', {
    center: {
        lat: 49.28590291211115,
        lng: -123.11248166065218,
    },
    zoom: 1
});

export default <cx>
    <GoogleMap
        controller={Controller}
        center-bind="$page.map.center"
        style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Marker position={{
            lat: 49.2853171,
            lng: -123.1119202,
        }} />

        <StreetViewPanorama
            position-bind="$page.streetview.center"
            zoom-bind="$page.streetview.zoom"
            pov-bind="$page.streetview.pov"
        >
            <Marker position={{
                lat: 49.28590291211115,
                lng: -123.11248166065218,
            }} />
        </StreetViewPanorama>
    </GoogleMap>
</cx>;
                    `}</CodeSnippet>
                </Md>
            </Section>

            <FlexCol mod="card" style="flex: 1; max-height: 600px">
                <Example />
            </FlexCol>
        </FlexRow>
    </Route>
</cx>;
