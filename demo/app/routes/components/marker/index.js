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
    name: 'Marker',
    route: '~/components/marker',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/basics/pop-up-window",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker"
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

                <p>
                    Cx wrapper around <a href={info.reactGoogleMapsDocs} target="_blank">{info.name}</a> React component.
                    For additional info about various options, please see <a href={info.googleMapsDocs} target="_blank">Google Maps Docs</a>.
                </p>
                    
                <Md>
                    ##### Configuration
                    <ConfigTable props={config} /> 

                    <br/>
                    
                    ##### Example
                    <CodeSnippet>{`
export default <cx>
    <GoogleMap
        controller={Controller}
        ...
    >
        <Marker
            position:bind="$page.map.center"
            title="This is a custom icon marker with rollover text"
            icon={Url.absolute("~/assets/img/cx.png")}
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
