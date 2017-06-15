import { 
    HtmlElement, 
    Route, 
    FlexCol, 
    FlexRow,
    Section
} from 'cx/widgets';

import Example from './example';
import config from './config';

import { 
    ConfigTable, 
    CodeSnippet,
    Md 
} from 'app/components';

export default <cx>
    <Route url:bind="url" route="~/components/search-box">
        <h2 putInto="header">
            Search Box
        </h2>

        <FlexRow style="height: 100%" spacing target="desktop">
            <Section mod="card" style="flex:1">
                <h4>
                    SearchBox
                    <span class="cxe-import">{`import { SearchBox } from 'cx-google-maps'`}</span>
                </h4>
                
                <Md>
                    Cx wrapper around [SearchBox](https://tomchentw.github.io/react-google-maps/basics/simple-map) React component.

                    ##### Configuration
                    <ConfigTable props={config} /> 

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
