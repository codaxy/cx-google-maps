import { Repeater, PureContainer, Controller as CxController } from "cx/ui";
import { Marker, MarkerClusterer } from "cx-google-maps";

const collection = [
    {
        id: 0,
        color: "red",
        path: [
            { lat: 40.79074446, lng: -74.01120186 },
            { lat: 40.78522072, lng: -74.01626587 },
            { lat: 40.78366100, lng: -74.01283264 },
            { lat: 40.78976972, lng: -74.00819778 }
        ]
    },
    {
        id: 1,
        color: "green",
        path: [
            { lat: 40.77722673, lng: -73.97918701 },
            { lat: 40.80140073, lng: -73.96081924 },
            { lat: 40.80250525, lng: -73.96408081 },
            { lat: 40.77859163, lng: -73.98159027 }
        ]
    },
    {
        id: 2,
        color: "blue",
        path: [
            { lat: 40.76143090, lng: -73.94210815 },
            { lat: 40.77170187, lng: -73.93301010 },
            { lat: 40.76325119, lng: -73.91464233 },
            { lat: 40.75362911, lng: -73.92391205 }
        ]
    },
    {
        id: 3,
        color: "magenta",
        path: [
            { lat: 40.76572150, lng: -73.98227692 },
            { lat: 40.76377126, lng: -73.97197723 },
            { lat: 40.74985791, lng: -73.98347855 },
            { lat: 40.75310896, lng: -73.99343491 }
        ]
    }
];

const steps = 30;
const updateInterval = 500;

class Controller extends CxController {
    onInit() {
        this.store.init("$page.frame", 0);
        this.store.init(
            "$page.markers",
            collection.map(item => ({
                id: item.id,
                color: item.color,
                position: item.path[0],
                rotation: this.getRotation(item.path, 0)
            }))
        );

        this.startAnimation();
    }

    onDestroy() {
        this.stopAnimation();
    }

    startAnimation() {
        this.store.set(
            "$page.markerAnimation",
            setInterval(() => this.advance(), updateInterval)
        );
    }

    stopAnimation() {
        let existing = this.store.get("$page.markerAnimation");
        if (existing) clearInterval(existing);
    }

    advance() {
        let frame = this.store.get("$page.frame");
        this.store.set(
            "$page.markers",
            collection.map(item => ({
                id: item.id,
                color: item.color,
                position: this.getLocation(item.path, frame),
                rotation: this.getRotation(item.path, frame)
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
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        rotation: {bind: '$record.rotation'},
                        strokeColor: "white",
                        fillColor: { bind: "$record.color" },
                        fillOpacity: 0.8,
                        strokeWeight: 4
                    }}
                />
            </Repeater>
        </MarkerClusterer>
    </cx>
);
