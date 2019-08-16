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
    name: 'StandaloneSearchBox',
    route: '~/components/standalone-search-box',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/#standalonesearchbox",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox"
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
                    Cx wrapper around <a href={info.reactGoogleMapsDocs} target="_blank">{info.name}</a> React component.
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
class Controller extends CxController {
    onInit() {
        this.store.set('$page.places', []);
    }

    pipeSearchBoxInstance(instance) {
        this.searchBox = instance;
    }

    onSearchPlacesChanged(e) {
        let places = this.searchBox.getPlaces();
        if (places.length < 1) return;
        let place = places[0];

        this.store.update('$page.places', ps => {
            return [...ps, {
                address: place.formatted_address,
                name: place.name,
                query: this.store.get('$page.text')
            }];
        });
    }
}

export default (
    <cx>
        <FlexCol 
            class="flex-1" controller={Controller} 
            pad>
            <h4>Cx TextField</h4>
            <StandaloneSearchBox
                onPlacesChanged="onSearchPlacesChanged"
                pipeInstance="pipeSearchBoxInstance">
                <TextField
                    placeholder="Search for a place..."
                    style="width: 100%"
                    class="flex-1 autogrow"
                    value-bind="$page.text"
                />
            </StandaloneSearchBox>
            <br/>
            <h4>Previous searches</h4>
            <Grid 
                columns={[{
                    header: 'Address',
                    sortable: true,
                    field: 'address'
                }, {
                    header: 'Name',
                    field: 'name',
                    sortable: true
                }, {
                    header: 'Query',
                    field: 'query',
                    sortable: true
                }]}

                emptyText="No previous searches."

                records-bind="$page.places"
            />
        </FlexCol>
    </cx>
);
                    `}</CodeSnippet>
                </Md>
            </Section>

            <FlexCol mod="card" style="flex: 1; min-height: 400px">
                <Example />
            </FlexCol>
        </FlexRow>    
    </Route>
</cx>;
