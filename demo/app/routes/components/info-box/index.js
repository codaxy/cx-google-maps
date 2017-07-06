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
    name: 'InfoBox',
    route: '~/components/info-box',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/basics/styled-map",
    googleMapsDocs: "https://github.com/googlemaps/v3-utility-library/tree/master/infobox"
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
                    Cx wrapper around <a href={info.reactGoogleMapsDocs} target="_blank">{info.name}</a> React addon used for
                    custom-styled overlay windows (this is not supported in <code>InfoWindow</code>).
                    For additional info about various options, please see <a href={info.googleMapsDocs} target="_blank">InfoBox addon lib</a>.
                </p>
                    
                <Md>
                    ##### Configuration
                    <ConfigTable props={config} /> 

                    <br/>
                    
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
                popup: true
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
                icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    strokeColor: "white",
                    fillColor: "red",
                    fillOpacity: 0.8,
                    strokeWeight: 4
                }} 
            >
                <InfoBox 
                    mod="infobox"
                    options={{
                        closeBoxURL: ""
                    }}
                    if:bind="$record.popup"
                >
                    <span text:tpl="{$record.position.lat:n;4} {$record.position.lng:n;4}" />
                </InfoBox>
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
