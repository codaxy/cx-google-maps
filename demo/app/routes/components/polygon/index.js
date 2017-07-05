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

const info = {
    name: 'Polygon',
    route: '~/components/polygon',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon"
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
                    For additional info about various options, please see <a href={info.googleMapsDocs} target="_blank">Google Maps Docs</a>.
                </p>
                    
                <Md>
                    ##### Configuration
                    <ConfigTable props={config} /> 

                    <br/>
                    
                    ##### Example
                    <CodeSnippet>{`
this.store.init('$page.polygonPath', _.range(3)
    .map(() => ({
        lat: 41.77811360 + Math.random() - 0.5, 
        lng: -87.62979820 + Math.random() - 0.5
    })));

...

export default <cx>
    <GoogleMap
        ...
    >
        <Polygon
            path:bind="$page.polygonPath"
            options={{
                fillColor: "red",
                fillOpacity: 0.5,
                strokeColor: "red",
                strokeOpacity: 0.9,
                draggable: true,
                editable: true     
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
