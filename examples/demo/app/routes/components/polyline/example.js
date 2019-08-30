import { Button, Grid } from 'cx/widgets';

import { GoogleMap, Polyline } from 'cx-google-maps';

import { VDOM, Controller as CxController } from 'cx/ui';

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
        this.store.init('$page.mapdefaults', this.getDefaults());
        this.store.init('$page.map', this.getDefaults());
        this.store.init(
            '$page.path',
            Array.from(new Array(6)).map(() => ({
                lat: 41.7781136 + Math.random() - 0.5,
                lng: -87.6297982 + Math.random() - 0.5,
            })),
        );
    }

    onRemovePoint(e, { store }) {
        let index = store.get('$index');
        let points = store.get('$page.path');
        if (points.length > 2) this.store.set('$page.path', points.filter((p, i) => i != index));
    }
}

export default (
    <cx>
        <GoogleMap
            controller={Controller}
            center-bind="$page.map.center"
            style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; min-height: 400px"
            zoom-bind="$page.map.zoom"
            options={{
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
            }}
        >
            <Grid
                mod="map"
                records-bind="$page.path"
                columns={[
                    {
                        header: 'Latitude',
                        field: 'lat',
                        format: 'n;8',
                        sortable: true,
                        align: 'center',
                    },
                    {
                        header: 'Longitude',
                        field: 'lng',
                        format: 'n;8',
                        sortable: true,
                        align: 'center',
                    },
                    {
                        header: '',
                        items: (
                            <Button
                                mod="hollow"
                                icon="clear"
                                disabled-expr="{$page.path.length} <= 2"
                                onClick="onRemovePoint"
                            />
                        ),
                    },
                ]}
            ></Grid>
            <Polyline
                path-bind="$page.path"
                options={{
                    strokeColor: 'green',
                    strokeOpacity: 0.9,
                }}
                editable
                draggable
            />
        </GoogleMap>
    </cx>
);
