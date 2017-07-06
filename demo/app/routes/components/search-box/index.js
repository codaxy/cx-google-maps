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
    name: 'SearchBox',
    route: '~/components/search-box',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/places/search-box",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox"
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
    ...

    pipeMapInstance(instance) {
        this.map = instance;
    }

    pipeSearchBoxInstance(instance) {
        this.searchBox = instance;
    }

    onSearchPlacesChanged(e) {
        let places = this.searchBox.getPlaces();
        if (places.length < 1)
            return;
        
        let location = places[0].geometry.location
        this.map.panTo(location);
    }
}

export default <cx>
    <GoogleMap
        pipeInstance="pipeMapInstance"
        ...
    >
        <SearchBox
            controlPosition={google.maps.ControlPosition.TOP_CENTER}
            onPlacesChanged="onSearchPlacesChanged"
            pipeInstance="pipeSearchBoxInstance"
            inputPlaceholder="Search..."
            inputStyle={{
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                border: '1px solid transparent',
                width: '300px',
                height: '32px',
                marginTop: '10px',
                padding: '0 12px',
                borderRadius: '0px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                fontSize: '14px',
                outline: 'none',
                textOverflow: 'ellipses'
            }}
        />    
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
