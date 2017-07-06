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
    name: 'DirectionsRenderer',
    route: '~/components/directions-renderer',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/basics/directions",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer"
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
class Controller extends CxController {
    ...
    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());        
        this.store.init('$page.directions', null);        

        let svc = new google.maps.DirectionsService();
        svc.route({
            origin: new google.maps.LatLng(41.77848077, -87.72102356),
            destination: new google.maps.LatLng(42.03807425, -87.88444519),
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.store.set('$page.directions', result);
            } else {
                console.error(\`error fetching directions \$\{result\}\`);
            }
        });
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        ...
    >
        <DirectionsRenderer
            if:expr="!!{$page.directions}"
            directions:bind="$page.directions"
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
