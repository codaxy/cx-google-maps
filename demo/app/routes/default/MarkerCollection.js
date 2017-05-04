import { Repeater, PureContainer, Controller as CxController } from "cx/ui";
import { HtmlElement, NumberField } from "cx/widgets";
import { Marker, MarkerClusterer, InfoBox } from "cx-google-maps";
import { updateArray } from 'cx/data';
import { markerPaths } from 'app/util';

const steps = 50;
const updateInterval = 300;

class Controller extends CxController {
    onInit() {
        this.store.init("$page.frame", 0);
        this.store.init(
            "$page.markers",
            markerPaths.map(item => ({
                id: item.id,
                color: item.color,
                showTitle: item.showTitle,
                position: item.path[0],
                rotation: this.getRotation(item.path, 0)
            }))
        );

        this.stopAnimation();
        this.startAnimation();
    }

    onDestroy() {
        this.stopAnimation();
    }

    startAnimation() {
        this.store.set(
            "markersAnimation",
            setInterval(() => this.advance(), updateInterval)
        );
    }

    stopAnimation() {
        let existing = this.store.get("markersAnimation");
        if (existing) 
            clearInterval(existing);
    }

    advance() {
        let frame = this.store.get("$page.frame");
        this.store.update(
            "$page.markers",
            current => current.map(item => ({
                id: item.id,
                color: item.color,
                showTitle: item.showTitle,
                position: this.getLocation(markerPaths[item.id].path, frame),
                rotation: this.getRotation(markerPaths[item.id].path, frame)
            }))
        );

        this.store.set("$page.frame", (frame + 1) % (steps * 4)); // 4 points for each path
    }

    getLocation(path, frame) {
        let i0 = Math.floor(frame / steps),
            i1 = (i0 + 1) % path.length,
            d = frame % steps / steps;

        return {
            lat: (1.0 - d) * path[i0].lat + d * path[i1].lat,
            lng: (1.0 - d) * path[i0].lng + d * path[i1].lng
        };
    }

    getRotation(path, frame) {
        let i0 = Math.floor(frame / steps),
            i1 = (i0 + 1) % path.length;

        return Math.atan2(path[i1].lng - path[i0].lng, path[i1].lat - path[i0].lat) * 180.0 / Math.PI;
    }

    onMarkerClick(e, {store}) {
        let id = store.get('$record.id');
        this.toggleTitleVisibility(id);
    }

    toggleTitleVisibility(id) {
        this.store.update('$page.markers', updateArray, marker => ({
            ...marker,
            showTitle: !marker.showTitle
        }), marker => marker.id === id); // The last parameter is the filter, we don't want to toggle all the titles
    }
}

export default (
    <cx>
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={0}
            controller={Controller}
        >
            <Repeater records:bind="$page.markers" cached>
                <Marker
                    position:bind="$record.position"
                    noRedraw
                    onClick="onMarkerClick"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        rotation: {bind: '$record.rotation'},
                        strokeColor: "white",
                        fillColor: { bind: "$record.color" },
                        fillOpacity: 0.8,
                        strokeWeight: 4
                    }}
                >
                    <InfoBox 
                        mod="infobox"
                        options={{
                            closeBoxURL: ""
                        }}
                        onClick="onMarkerClick"
                        visible:bind="$record.showTitle"
                    >
                        <span text:tpl="{$record.position.lat:n;4} {$record.position.lng:n;4}" />
                    </InfoBox>
                </Marker>
            </Repeater>
        </MarkerClusterer>
    </cx>
);
