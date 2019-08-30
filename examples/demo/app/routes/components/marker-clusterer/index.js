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
    name: 'MarkerClusterer',
    route: '~/components/marker-clusterer',
    
    googleMapsDocs: "https://github.com/googlemaps/js-marker-clusterer"
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
                    Cx wrapper around <a href={info.googleMapsDocs} target="_blank">{info.name}</a> component addon.
                    For additional info about various options, available events and methods, please see <a href={info.googleMapsDocs} target="_blank">MarkerClusterer addon lib page</a>.
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
this.store.init('$page.markers', Array.from(new Array(200))
    .map((a, i) => ({
        id: i,
        position: {
            lat: 41.77811360 + Math.random() - 0.5,
            lng: -87.62979820 + Math.random() - 0.5,
        },
        title: \`This is marker \$\{i\}\`,
        heading: 360 * Math.random()
    })));

...

export default <cx>
    <GoogleMap
        ...
    >
        <MarkerClusterer>
            <Repeater 
                records-bind="$page.markers"
                keyField="id">
                <Marker
                    position-bind="$record.position"
                    title-bind="$record.title"
                    noRedraw
                    icon={{
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        scale: 6,
                        rotation: {bind: '$record.heading'},
                        fillColor: 'red',
                        fillOpacity: 0.5,
                        strokeColor: 'white',
                        strokeWeight: 2,
                        strokeOpacity: 1
                    }} />
            </Repeater>
        </MarkerClusterer>
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
