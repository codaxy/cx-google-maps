import {
    HtmlElement,
    Route,
    FlexCol,
    FlexRow,
    Section
} from 'cx/widgets';

import {
    Md,
    CodeSnippet
} from 'app/components';

import Example from './example';

const info = {
    route: '~/examples/first-map'
};

export default <cx>
    <Route url:bind="url" route={info.route}>
        <h2 putInto="header">
            2-minute start
        </h2>

        <FlexRow style="height: 100%" spacing target="desktop">
            <Section mod="card" style="flex:1">
                <h4>
                    Creating your first Cx Google Maps app
                </h4>

                <Md>
                    Creating Cx applications is very easy using [Cx CLI](https://cxjs.io/quickstart) tool:

                    <CodeSnippet>{`
mkdir first-map
cd first-map
npm init -y
npm install cx-cli --global
cx scaffold
npm install cx-google-maps --save
                    `}</CodeSnippet>


                    `cx-google-maps` library is an ES6 library, so you need to enable babel transpiler for
                    it. Check the `config/webpack.config.js` for the line similar to:

                    <CodeSnippet>{`
//add here any ES6 based library
include: /[\\\/](app|cx|cx-react|cx-theme-\w*)[\\\/]/,
                    `}</CodeSnippet>

                    and add `cx-google-maps` in there, so that it looks something like this:

                    <CodeSnippet>{`
include: /[\\\/](app|cx|cx-react|cx-google-maps|cx-theme-\w*)[\\\/]/,
                    `}</CodeSnippet>


                    Since we're using Google Maps, add a script reference to it somewhere in
                    your `app/index.html`:

                    <CodeSnippet>{`
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
                    `}</CodeSnippet>


                    Replace the contents of `app/routes/default/index.js` (default application page) with:

                    <CodeSnippet>{`
import {
    GoogleMap,
    Marker
} from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';

const containerElement = <div style={{ position: "relative", height: "100%" }} />;
const mapElement = <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }} />;

class Controller extends CxController {
    onInit() {
        this.store.init('$page.map', {
            center: {
                lat: 41.77811360,
                lng: -87.62979820
            },
            zoom: 12
        });
    }
}

export default <cx>
    <GoogleMap
        controller={Controller}
        containerElement={containerElement}
        mapElement={mapElement}
        defaultCenter:bind="$page.map.center"
        defaultZoom:bind="$page.map.zoom"
        center:bind="$page.map.center"
        zoom:bind="$page.map.zoom"
    >
        <Marker
            position:bind="$page.map.center"
        />
    </GoogleMap>
</cx>;
                    `}</CodeSnippet>


                    And that's all there is to it. You can now start your first Cx Google Maps applications
                    with a simple:

                    <CodeSnippet>{`
npm start
                    `}</CodeSnippet>

                    and build on from there.


                    Remember that, in order to use specific Google Maps Libraries, like visualization
                    (e.g. if you use `HeatmapLayer`), or drawing (e.g. `DrawingManager`), you need to provide
                    your key and libraries you want in the Google Maps script tag URL, like this:


                    <CodeSnippet>{`
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=[YOUR_KEY]&libraries=drawing,visualization,geocoding,places"></script>
                    `}</CodeSnippet>


                    If you want to learn more about building CxJS applications, there's plenty of
                    info you can find on the [official Cx pages](https://cxjs.io/quickstart).
                </Md>
            </Section>

            <FlexCol mod="card" style="flex: 1; min-height: 400px">
                <Example />
            </FlexCol>
        </FlexRow>
    </Route>
</cx>;
