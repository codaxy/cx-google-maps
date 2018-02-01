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
    name: 'InfoWindow',
    route: '~/components/info-window',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/basics/pop-up-window",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow"
};

export default <cx>
    <Route url:bind="url" route={info.route}>
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
                    Cx wrapper around <a href={info.reactGoogleMapsDocs} target="_blank">{info.name}</a> React component.
                    For additional info about various options, available events and methods, please see <a href={info.googleMapsDocs} target="_blank">Google Maps Documentation</a>.
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

// We need this for easy update of the markers array
import { updateArray } from 'cx/data';
...
class Controller extends CxController {
    ...
    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());   
        this.store.init('$page.markers', _.range(5)
            .map((a, i) => ({
                id: i,
                position: {
                    lat: 41.77811360 + Math.random() - 0.5, 
                    lng: -87.62979820 + Math.random() - 0.5, 
                },
                title: \`This is marker \$\{i\}\`,
                popup: true,
                heading: 360 * Math.random()
            })));
    }

    togglePopup(e, {store}) {
        var id = store.get('$record.id');
        store.update('$page.markers', updateArray, m => ({
            ...m,
            popup: !m.popup
        }), m => m.id === id); // The last parameter is the filter
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        ...
    >
        <Repeater 
            records:bind="$page.markers"
            keyField="id">
            <Marker
                position:bind="$record.position"
                onClick="togglePopup"
            >
                <InfoWindow
                    if:bind="$record.popup"
                    onCloseClick="togglePopup"
                >
                    <div text:bind="$record.title"></div>
                </InfoWindow>
            </Marker>
        </Repeater>    
    </GoogleMap>
</cx>;
                    `}</CodeSnippet>
                </Md>
            </Section>

            <FlexCol mod="card" style="flex: 1; min-height: 400px">
                <Example />
            </FlexCol>
        </FlexRow>    
    </Route>
</cx>;
