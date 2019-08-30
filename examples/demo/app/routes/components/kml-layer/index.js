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
    name: 'KmlLayer',
    route: '~/components/kml-layer',
    
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer"
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

                    <br />
                    <br />

                    ##### Example
                    <CodeSnippet>{`
export default <cx>
    <GoogleMap
        ...
    >
        <KmlLayer
            url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
        />
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
