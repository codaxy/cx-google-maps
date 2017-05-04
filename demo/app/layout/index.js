import { HtmlElement, Link, Button } from "cx/widgets";
import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

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
                    <dt>
                        <Link href="~/" url:bind="url">
                            Home
                        </Link>
                    </dt>

                    <dt>
                        Components
                    </dt>
                    <dd>
                        <Link href="~/components/google-map" url:bind="url">
                            GoogleMap
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/components/search-box" url:bind="url">
                            SearchBox
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/components/marker" url:bind="url">
                            Marker
                        </Link>
                    </dd>
                    <dd>
                        <Link
                            href="~/components/marker-clusterer"
                            url:bind="url"
                        >
                            MarkerClusterer
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/components/polygon" url:bind="url">
                            Polygon
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/components/kml-layer" url:bind="url">
                            KmlLayer
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/components/info-window" url:bind="url">
                            InfoWindow
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/components/info-box" url:bind="url">
                            InfoBox
                        </Link>
                    </dd>
                    <dd>
                        <Link
                            href="~/components/directions-renderer"
                            url:bind="url"
                        >
                            DirectionsRenderer
                        </Link>
                    </dd>

                    <dt>
                        Examples
                    </dt>
                    <dd>
                        <Link href="~/examples/placing-markers" url:bind="url">
                            Placing markers
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/examples/routing" url:bind="url">
                            Routing
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/examples/animation" url:bind="url">
                            Animation
                        </Link>
                    </dd>
                    <dt>
                        <Link href="~/about" url:bind="url">
                            About
                        </Link>
                    </dt>
                </dl>
            </aside>
        </div>
    </cx>
);
