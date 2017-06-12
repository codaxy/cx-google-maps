import { HtmlElement, Link, Button, Text } from "cx/widgets";
import { ContentPlaceholder, Repeater, FirstVisibleChildLayout } from "cx/ui";
import Controller from "./Controller";

const items = [{
    text: 'Home',
    url: '~/'
}, {
    text: 'Components',
    items: [{
        text: 'GoogleMap',
        url: '~/components/google-map'
    }, {
        text: 'SearchBox',
        url: '~/components/search-box'
    }, {
        text: 'Marker',
        url: '~/components/marker'
    }, {
        text: 'MarkerClusterer',
        url: '~/components/marker-clusterer'
    }, {
        text: 'Polygon',
        url: '~/components/polygon'
    }, {
        text: 'Polyline',
        url: '~/components/polyline'
    }, {
        text: 'KmlLayer',
        url: '~/components/kml-layer'
    }, {
        text: 'InfoWindow',
        url: '~/components/info-window'
    }, {
        text: 'InfoBox',
        url: '~/components/info-box'
    }, {
        text: 'DirectionsRenderer',
        url: '~/components/directions-renderer'
    }]
}, {
    text: 'Examples',
    items: [{
        text: 'Placing markers',
        url: '~/examples/placing-markers'
    }, {
        text: 'Routing',
        url: '~/examples/routing'
    }, {
        text: 'Filtering',
        url: '~/examples/filtering'
    }]
}, {
    text: 'About',
    url: '~/about'
}]


export default (
    <cx>
        <div
            controller={Controller}
            class={{
                layout: true,
                nav: { bind: "layout.aside.open" }
            }}
        >
            <main class="main" onMouseDownCapture="onMainClick">
                <ContentPlaceholder />
            </main>
            <header class="header">
                <i
                    class={{
                        hamburger: true,
                        open: { bind: "layout.aside.open" }
                    }}
                    onClick={(e, { store }) => {
                        store.toggle("layout.aside.open");
                    }}
                />
                <ContentPlaceholder name="header" />
            </header>
            <aside class="aside">
                <h1>Cx Google Maps</h1>
                <dl>
                    <Repeater records={items}>
                        <dt>
                            <Text if:expr="!{$record.url}" bind="$record.text" />                        
                            <Link if:expr="!!{$record.url}" href:bind="$record.url" text:bind="$record.text" url:bind="url" />
                        </dt>
                        <Repeater records:bind="$record.items">
                            <dd>
                                <Link href:bind="$record.url" text:bind="$record.text" url:bind="url" />
                            </dd>
                        </Repeater>                        
                    </Repeater>
                </dl>
            </aside>
        </div>
    </cx>
);
