import { HtmlElement, Route, FlexCol, FlexRow, Section } from 'cx/widgets';

import Example from './example';
import { config, events } from './config';

import { ConfigTable, EventTable, CodeSnippet, Md } from 'app/components';

const info = {
    name: 'GoogleMap',
    route: '~/components/google-map',
    
    googleMapsDocs:
        'https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map',
};

export default (
    <cx>
        <Route url-bind="url" route={info.route}>
            <h2 putInto="header">{info.name}</h2>

            <FlexRow style="height: 100%" spacing target="desktop">
                <Section mod="card" style="flex:1">
                    <h4>
                        {info.name}
                        <span class="cxe-import">{`import { ${
                            info.name
                        } } from 'cx-google-maps'`}</span>
                    </h4>

                    <p ws>
                        Cx wrapper around{' '}
                        <a href={info.googleMapsDocs} target="_blank">
                            Map
                        </a>{' '}
                        component (uses <code>withGoogleMap</code>
                        ). For additional info about various options, available events and methods,
                        please see{' '}
                        <a href={info.googleMapsDocs} target="_blank">
                            Google Maps Docs
                        </a>
                        .
                    </p>

                    <Md>
                        ##### Configuration
                        <ConfigTable props={config} />
                        <br />
                        <br />
                        <EventTable props={events} />
                        <br />
                        <br />
                        ##### Example
                        <CodeSnippet>{`

class Controller extends CxController {
    getDefaults() { 
        return {
            center: {
                lat: 41.87811360,
                lng: -87.62979820
            },
            zoom: 12
        };
    }

    onInit() {
        this.store.init('$page.mapdefaults', this.getDefaults());        
        this.store.init('$page.map', this.getDefaults());        
    }

    pipeMapInstance(instance) {
        this.map = instance;
    }

    onResetViewClick() {
        this.map.panTo(this.getDefaults().center);
        
        // We could have just make use of the -bind in the map
        // center (see index.js) and pan like this:
        
        // this.store.set('$page.map', this.getDefaults());
        
        // However, in this case, panning would be instant,
        // whereas Google Maps panTo provides smooth panning
        // when possible.        
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        style="width: 100%; height: 100%; min-height: 400px"
        pipeInstance="pipeMapInstance"
        center-bind="$page.map.center"
        zoom-bind="$page.map.zoom"
        options={{
            mapTypeControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        }}
    >
        <Menu
            vertical
            mod="map"
            itemPadding="small"
        >
            <a onClick="onResetViewClick">
                Reset view
            </a>
        </Menu>                  
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
    </cx>
);
