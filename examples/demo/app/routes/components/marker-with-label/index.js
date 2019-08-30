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
    name: 'MarkerWithLabel',
    route: '~/components/marker-with-label',
    
    googleMapsDocs: "https://github.com/googlemaps/v3-utility-library/tree/master/markerwithlabel"
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
                    For additional info about various options, available events and methods, please see <a href={info.googleMapsDocs} target="_blank">MarkerWithLabel addon lib page</a>.
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
class Controller extends CxController {
    ...
    onMarkerClick() {
        Toast.create({
            message: 'Marker clicked.',
            timeout: 3000
        }).open();
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        ...
    >
        <MarkerWithLabel
            position-bind="$page.map.center"
            title="This is a custom icon marker with label"
            icon="https://codaxy.github.io/cx-google-maps/assets/img/cx.png"
            labelAnchor={new google.maps.Point(0,0)}
            labelStyle={{
                backgroundColor: "rgba(20, 40, 120, 0.5)",
                color: "white",
                fontSize: "24px",
                padding: "16px"
            }}
            onClick="onMarkerClick"
        >
            <span>cx-google-maps</span>
        </MarkerWithLabel>
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
