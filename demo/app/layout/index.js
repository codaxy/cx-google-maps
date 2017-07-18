import { HtmlElement, Link, Button, Text, Icon, Tooltip } from "cx/widgets";
import { ContentPlaceholder, Repeater, FirstVisibleChildLayout, VDOM } from "cx/ui";
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
        text: '2-minute start',
        url: '~/examples/first-map'
    },{
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
}];

Icon.register("github", props => {
   return <svg
      viewBox="0 0 30 30"
      className={props.className}
      style={props.style}
   >
      <path
         d="M19 30h-8v-4c-5.47 1.18-7-3-7-3-1-2-2-3-2-3-2-1.2 0-1 0-1 2 0 3 2 3 2 1.76 2.98 4.88 2.5 6 2 0-1 .44-2.5 1-3-4.36-.5-8-3-8-8s1-6 2-7c-.2-.5-1.04-2.3.04-5C6.04 0 8 0 10 3c1-1 4-1 5-1s4 0 5 1c2-3 3.97-3 3.97-3 1.07 2.7.23 4.5.03 5 1 1 2 2 2 7s-3.63 7.5-8 8c.56.5 1 2.2 1 3v7z"
         fill="currentColor"/>
   </svg>
});

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
                <div class="cxb-follow">
                    <Link href="https://github.com/codaxy/cx-google-maps" tooltip="GitHub">
                        <Icon name="github" />
                    </Link>
                </div>
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
