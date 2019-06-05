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
    name: 'HeatmapLayer',
    route: '~/components/heatmap-layer',
    reactGoogleMapsDocs: "https://tomchentw.github.io/react-google-maps/#heatmaplayer",
    googleMapsDocs: "https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer"
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
    getDefaults() {
        return {
            center: {
                lat: 41.7781136,
                lng: -87.6297982,
            },
            zoom: 9,
        };
    }

    onInit() {
        let d = this.getDefaults();
        this.store.init('$page.mapdefaults', d);
        this.store.init('$page.map', d);
        this.store.set('$page.heat', {
            radius: 10,
            opacity: 0.6,
        });

        this.addComputable('$page.gradient', ['$page.altGradient'], alt => {
            return !alt ? null : [
                'rgba(0, 255, 255, 0)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(0, 127, 255, 1)',
                'rgba(0, 63, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 223, 1)',
                'rgba(0, 0, 191, 1)',
                'rgba(0, 0, 159, 1)',
                'rgba(0, 0, 127, 1)',
                'rgba(63, 0, 91, 1)',
                'rgba(127, 0, 63, 1)',
                'rgba(191, 0, 31, 1)',
                'rgba(255, 0, 0, 1)'
            ];
        });

        this.randomize();
    }

    randomize() {
        let d = this.getDefaults();
        let p = 0.3;
        let points = _.map(
            new Array(1000),
            a =>
                new google.maps.LatLng({
                    lat: d.center.lat + p * Math.log(Math.random()),
                    lng: d.center.lng - p * Math.log(Math.random()),
                }),
        );

        this.store.set('$page.points', points);
    }
}

export default (
    <cx>
        <GoogleMap
            ...
        >
            <Menu vertical mod="map" itemPadding="small">
                <div layout={LabelsLeftLayout}>
                    <Slider
                        label="Radius"
                        value-bind="$page.heat.radius"
                        minValue={1}
                        maxValue={40}
                    />
                    <Slider
                        label="Opacity"
                        value-bind="$page.heat.opacity"
                        minValue={0}
                        maxValue={1}
                    />
                    <Checkbox
                        value-bind="$page.altGradient"
                    >
                        Alt. gradient
                    </Checkbox>
                    <Button text="Randomize data" onClick="randomize" />
                </div>
            </Menu>

            <HeatmapLayer
                data-bind="$page.points"
                options={{
                    radius: {bind: "$page.heat.radius"},
                    opacity: {bind: "$page.heat.opacity"},
                    gradient: {bind: "$page.gradient"}
                }}
            />
        </GoogleMap>
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
