import { Widget, VDOM, PureContainer as PureContainer$1 } from 'cx/ui';
import { PureContainer } from 'cx/widgets';
import { BicyclingLayer, Circle, DirectionsRenderer, FusionTablesLayer, GoogleMap, withGoogleMap, GroundOverlay, InfoWindow, KmlLayer, Marker, OverlayView, Polygon, Polyline, Rectangle, StreetViewPanorama, TrafficLayer } from 'react-google-maps';
import { shallowEquals, debounce } from 'cx/util';
import ReactDrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
import { HeatmapLayer } from 'react-google-maps/lib/components/visualization/HeatmapLayer';
import ReactInfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import ReactMarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import ReactMarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import ReactSearchBox from 'react-google-maps/lib/components/places/SearchBox';
import ReactStandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ReactBicyclingLayerEnhanced = function (_ReactBicyclingLayer) {
    inherits(ReactBicyclingLayerEnhanced, _ReactBicyclingLayer);

    function ReactBicyclingLayerEnhanced() {
        classCallCheck(this, ReactBicyclingLayerEnhanced);
        return possibleConstructorReturn(this, _ReactBicyclingLayer.apply(this, arguments));
    }

    ReactBicyclingLayerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactBicyclingLayer.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactBicyclingLayerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactBicyclingLayer.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactBicyclingLayerEnhanced;
}(BicyclingLayer);

var BicyclingLayer$1 = function (_Widget) {
    inherits(BicyclingLayer$$1, _Widget);

    function BicyclingLayer$$1() {
        classCallCheck(this, BicyclingLayer$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    BicyclingLayer$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            autoUpdate: undefined
        }]));
    };

    BicyclingLayer$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick"]);
    };

    BicyclingLayer$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    BicyclingLayer$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactBicyclingLayerEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return BicyclingLayer$$1;
}(Widget);

var ReactCircleEnhanced = function (_ReactCircle) {
    inherits(ReactCircleEnhanced, _ReactCircle);

    function ReactCircleEnhanced() {
        classCallCheck(this, ReactCircleEnhanced);
        return possibleConstructorReturn(this, _ReactCircle.apply(this, arguments));
    }

    ReactCircleEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactCircle.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactCircleEnhanced.prototype.componentDidUpdate = function componentDidUpdate() {
        var _ReactCircle$prototyp;

        (_ReactCircle$prototyp = _ReactCircle.prototype.componentDidUpdate).call.apply(_ReactCircle$prototyp, [this].concat(Array.prototype.slice.call(arguments)));
    };

    ReactCircleEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactCircle.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactCircleEnhanced;
}(Circle);

var Circle$1 = function (_Widget) {
    inherits(Circle$$1, _Widget);

    function Circle$$1() {
        classCallCheck(this, Circle$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    Circle$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            center: { structured: true },
            draggable: undefined,
            editable: undefined,
            options: { structured: true },
            radius: undefined
        }]));
    };

    Circle$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onCenterChanged", "onClick", "onDblClick", "onDrag", "onDragEnd", "onDragStart", "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onRightClick", "onRadiusChanged"]);

        if (instance.widget.center && instance.widget.center.bind) {
            var oldOnCenterChanged = instance.events["onCenterChanged"];
            instance.events["onCenterChanged"] = debounce(function () {
                var c = {
                    lat: this.getCenter().lat(),
                    lng: this.getCenter().lng()
                };

                if (!shallowEquals(c, instance.data.center)) instance.set("center", c);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (oldOnCenterChanged) oldOnCenterChanged.call.apply(oldOnCenterChanged, [this].concat(args));
            }, 50);
        }

        if (instance.widget.radius && instance.widget.radius.bind) {
            var oldOnRadiusChanged = instance.events["onRadiusChanged"];
            instance.events["onRadiusChanged"] = debounce(function () {
                instance.set("radius", this.getRadius());

                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                if (oldOnRadiusChanged) oldOnRadiusChanged.call.apply(oldOnRadiusChanged, [this].concat(args));
            }, 50);
        }
    };

    Circle$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    Circle$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactCircleEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return Circle$$1;
}(Widget);

var ReactDirectionsRendererEnhanced = function (_ReactDirectionsRende) {
    inherits(ReactDirectionsRendererEnhanced, _ReactDirectionsRende);

    function ReactDirectionsRendererEnhanced() {
        classCallCheck(this, ReactDirectionsRendererEnhanced);
        return possibleConstructorReturn(this, _ReactDirectionsRende.apply(this, arguments));
    }

    ReactDirectionsRendererEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactDirectionsRende.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactDirectionsRendererEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactDirectionsRende.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactDirectionsRendererEnhanced;
}(DirectionsRenderer);

var DirectionsRenderer$1 = function (_PureContainer) {
    inherits(DirectionsRenderer$$1, _PureContainer);

    function DirectionsRenderer$$1() {
        classCallCheck(this, DirectionsRenderer$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    DirectionsRenderer$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            directions: { structured: true },
            options: { structured: true },
            panel: { structured: true },
            routeIndex: undefined
        }]));
    };

    DirectionsRenderer$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onDirectionsChanged"]);
    };

    DirectionsRenderer$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    DirectionsRenderer$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(
            ReactDirectionsRendererEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            this.renderChildren(context, instance)
        );
    };

    return DirectionsRenderer$$1;
}(PureContainer$1);

var ReactDrawingManagerEnhanced = function (_ReactDrawingManager) {
    inherits(ReactDrawingManagerEnhanced, _ReactDrawingManager);

    function ReactDrawingManagerEnhanced() {
        classCallCheck(this, ReactDrawingManagerEnhanced);
        return possibleConstructorReturn(this, _ReactDrawingManager.apply(this, arguments));
    }

    ReactDrawingManagerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactDrawingManager.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactDrawingManagerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactDrawingManager.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactDrawingManagerEnhanced;
}(ReactDrawingManager);

var DrawingManager = function (_Widget) {
    inherits(DrawingManager, _Widget);

    function DrawingManager() {
        classCallCheck(this, DrawingManager);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    DrawingManager.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            drawingMode: { structured: true },
            options: { structured: true }
        }]));
    };

    DrawingManager.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onCircleComplete", "onMarkerComplete", "onOverlayComplete", "onPolygonComplete", "onPolylineComplete", "onRectangleComplete"]);
    };

    DrawingManager.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    DrawingManager.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactDrawingManagerEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return DrawingManager;
}(Widget);

var ReactFusionTablesLayerEnhanced = function (_ReactFusionTablesLay) {
    inherits(ReactFusionTablesLayerEnhanced, _ReactFusionTablesLay);

    function ReactFusionTablesLayerEnhanced() {
        classCallCheck(this, ReactFusionTablesLayerEnhanced);
        return possibleConstructorReturn(this, _ReactFusionTablesLay.apply(this, arguments));
    }

    ReactFusionTablesLayerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactFusionTablesLay.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactFusionTablesLayerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactFusionTablesLay.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactFusionTablesLayerEnhanced;
}(FusionTablesLayer);

var FusionTablesLayer$1 = function (_Widget) {
    inherits(FusionTablesLayer$$1, _Widget);

    function FusionTablesLayer$$1() {
        classCallCheck(this, FusionTablesLayer$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    FusionTablesLayer$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            url: undefined,
            options: { structured: true }
        }]));
    };

    FusionTablesLayer$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick"]);
    };

    FusionTablesLayer$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    FusionTablesLayer$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactFusionTablesLayerEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return FusionTablesLayer$$1;
}(Widget);

var ReactGoogleMapEnhanced = function (_ReactGoogleMap) {
    inherits(ReactGoogleMapEnhanced, _ReactGoogleMap);

    function ReactGoogleMapEnhanced() {
        classCallCheck(this, ReactGoogleMapEnhanced);
        return possibleConstructorReturn(this, _ReactGoogleMap.apply(this, arguments));
    }

    ReactGoogleMapEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactGoogleMap.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactGoogleMapEnhanced.prototype.componentDidUpdate = function componentDidUpdate() {
        var _ReactGoogleMap$proto;

        (_ReactGoogleMap$proto = _ReactGoogleMap.prototype.componentDidUpdate).call.apply(_ReactGoogleMap$proto, [this].concat(Array.prototype.slice.call(arguments)));

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactGoogleMapEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactGoogleMap.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactGoogleMapEnhanced;
}(GoogleMap);

var GoogleMapWrapper = withGoogleMap(function (props) {
    return VDOM.createElement(
        ReactGoogleMapEnhanced,
        _extends({}, props.instance.data, props.instance.events, {
            instance: props.instance
        }),
        props.children
    );
});

var GoogleMap$1 = function (_PureContainer) {
    inherits(GoogleMap$$1, _PureContainer);

    function GoogleMap$$1() {
        classCallCheck(this, GoogleMap$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    GoogleMap$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            defaultCenter: { structured: true },
            defaultZoom: undefined,
            center: { structured: true },
            heading: undefined,
            mapTypeId: undefined,
            options: { structured: true },
            streetView: { structured: true },
            tilt: undefined,
            zoom: undefined
        }]));
    };

    GoogleMap$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onBoundsChanged", "onCenterChanged", "onClick", "onDblClick", "onDrag", "onDragEnd", "onDragStart", "onHeadingChanged", "onIdle", "onMapTypeIdChanged", "onMouseMove", "onMouseOut", "onMouseOver", "onProjectionChanged", "onResize", "onRightClick", "onTilesLoaded", "onTiltChanged", "onZoomChanged"]);

        if (instance.widget.center && instance.widget.center.bind) {
            var oldOnCenterChanged = instance.events["onCenterChanged"];
            instance.events["onCenterChanged"] = debounce(function () {
                var c = {
                    lat: this.getCenter().lat(),
                    lng: this.getCenter().lng()
                };

                if (!shallowEquals(c, instance.data.center)) instance.set("center", c);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (oldOnCenterChanged) oldOnCenterChanged.call.apply(oldOnCenterChanged, [this].concat(args));
            }, 50);
        }

        if (instance.widget.zoom && instance.widget.zoom.bind) {
            var oldOnZoomChanged = instance.events["onZoomChanged"];
            instance.events["onZoomChanged"] = debounce(function () {
                instance.set("zoom", this.getZoom());

                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                if (oldOnZoomChanged) oldOnZoomChanged.call.apply(oldOnZoomChanged, [this].concat(args));
            }, 50);
        }
    };

    GoogleMap$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    GoogleMap$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(
            GoogleMapWrapper,
            {
                containerElement: this.containerElement,
                mapElement: this.mapElement,
                key: key,
                instance: instance
            },
            this.renderChildren(context, instance)
        );
    };

    return GoogleMap$$1;
}(PureContainer);

var ReactGroundOverlayEnhanced = function (_ReactGroundOverlay) {
    inherits(ReactGroundOverlayEnhanced, _ReactGroundOverlay);

    function ReactGroundOverlayEnhanced() {
        classCallCheck(this, ReactGroundOverlayEnhanced);
        return possibleConstructorReturn(this, _ReactGroundOverlay.apply(this, arguments));
    }

    ReactGroundOverlayEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactGroundOverlay.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactGroundOverlayEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactGroundOverlay.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactGroundOverlayEnhanced;
}(GroundOverlay);

var GroundOverlay$1 = function (_Widget) {
    inherits(GroundOverlay$$1, _Widget);

    function GroundOverlay$$1() {
        classCallCheck(this, GroundOverlay$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    GroundOverlay$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            opacity: undefined
        }]));
    };

    GroundOverlay$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onDblClick", "onClick"]);
    };

    GroundOverlay$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    GroundOverlay$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactGroundOverlayEnhanced, _extends({}, instance.data, instance.events, {
            defaultUrl: this.defaultUrl,
            defaultBounds: this.defaultBounds,
            instance: instance,
            key: key
        }));
    };

    return GroundOverlay$$1;
}(Widget);

var ReactHeatmapLayerEnhanced = function (_ReactHeatmapLayer) {
    inherits(ReactHeatmapLayerEnhanced, _ReactHeatmapLayer);

    function ReactHeatmapLayerEnhanced() {
        classCallCheck(this, ReactHeatmapLayerEnhanced);
        return possibleConstructorReturn(this, _ReactHeatmapLayer.apply(this, arguments));
    }

    ReactHeatmapLayerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactHeatmapLayer.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactHeatmapLayerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactHeatmapLayer.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactHeatmapLayerEnhanced;
}(HeatmapLayer);

var HeatmapLayer$1 = function (_Widget) {
    inherits(HeatmapLayer$$1, _Widget);

    function HeatmapLayer$$1() {
        classCallCheck(this, HeatmapLayer$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    HeatmapLayer$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            url: undefined,
            data: { structured: true },
            options: { structured: true }
        }]));
    };

    HeatmapLayer$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick"]);
    };

    HeatmapLayer$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    HeatmapLayer$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactHeatmapLayerEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return HeatmapLayer$$1;
}(Widget);

var ReactInfoBoxEnhanced = function (_ReactInfoBox) {
    inherits(ReactInfoBoxEnhanced, _ReactInfoBox);

    function ReactInfoBoxEnhanced() {
        classCallCheck(this, ReactInfoBoxEnhanced);
        return possibleConstructorReturn(this, _ReactInfoBox.apply(this, arguments));
    }

    ReactInfoBoxEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactInfoBox.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactInfoBoxEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactInfoBox.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactInfoBoxEnhanced;
}(ReactInfoBox);

var InfoBox = function (_PureContainer) {
    inherits(InfoBox, _PureContainer);

    function InfoBox() {
        classCallCheck(this, InfoBox);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    InfoBox.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            content: { structured: true },
            options: { structured: true },
            position: { structured: true },
            zIndex: { structured: true }
        }]));
    };

    InfoBox.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onCloseClick", "onContentChanged", "onDomReady", "onPositionChanged", "onZIndexChanged"]);
    };

    InfoBox.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    InfoBox.prototype.render = function render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        if (children.length !== 1) throw Error("InfoBox should contain exactly one child element.");

        var data = instance.data,
            events = instance.events;


        data.options = data.options || {};
        data.options.boxClass = data.classNames;

        return VDOM.createElement(
            ReactInfoBoxEnhanced,
            _extends({}, data, events, {
                instance: instance,
                key: key
            }),
            children[0]
        );
    };

    return InfoBox;
}(PureContainer);

InfoBox.prototype.styled = true;

var ReactInfoWindowEnhanced = function (_ReactInfoWindow) {
    inherits(ReactInfoWindowEnhanced, _ReactInfoWindow);

    function ReactInfoWindowEnhanced() {
        classCallCheck(this, ReactInfoWindowEnhanced);
        return possibleConstructorReturn(this, _ReactInfoWindow.apply(this, arguments));
    }

    ReactInfoWindowEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactInfoWindow.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactInfoWindowEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactInfoWindow.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactInfoWindowEnhanced;
}(InfoWindow);

var InfoWindow$1 = function (_PureContainer) {
    inherits(InfoWindow$$1, _PureContainer);

    function InfoWindow$$1() {
        classCallCheck(this, InfoWindow$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    InfoWindow$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            options: { structured: true },
            position: { structured: true },
            zIndex: { structured: true }
        }]));
    };

    InfoWindow$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onCloseClick", "onContentChanged", "onDomReady", "onPositionChanged", "onZIndexChanged"]);
    };

    InfoWindow$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    InfoWindow$$1.prototype.render = function render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        if (children.length !== 1) throw Error("InfoWindow should contain exactly one child element.");

        return VDOM.createElement(
            ReactInfoWindowEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            children[0]
        );
    };

    return InfoWindow$$1;
}(PureContainer);

var ReactKmlLayerEnhanced = function (_ReactKmlLayer) {
    inherits(ReactKmlLayerEnhanced, _ReactKmlLayer);

    function ReactKmlLayerEnhanced() {
        classCallCheck(this, ReactKmlLayerEnhanced);
        return possibleConstructorReturn(this, _ReactKmlLayer.apply(this, arguments));
    }

    ReactKmlLayerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactKmlLayer.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactKmlLayerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactKmlLayer.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactKmlLayerEnhanced;
}(KmlLayer);

var KmlLayer$1 = function (_PureContainer) {
    inherits(KmlLayer$$1, _PureContainer);

    function KmlLayer$$1() {
        classCallCheck(this, KmlLayer$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    KmlLayer$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            defaultViewport: { structured: true },
            metadata: { structured: true },
            status: undefined,
            url: { structured: true },
            zIndex: undefined
        }]));
    };

    KmlLayer$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick", "onDefaultViewportChanged", "onStatusChanged"]);
    };

    KmlLayer$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    KmlLayer$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(
            ReactKmlLayerEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            this.renderChildren(context, instance)
        );
    };

    return KmlLayer$$1;
}(PureContainer);

var ReactMarkerEnhanced = function (_ReactMarker) {
    inherits(ReactMarkerEnhanced, _ReactMarker);

    function ReactMarkerEnhanced() {
        classCallCheck(this, ReactMarkerEnhanced);
        return possibleConstructorReturn(this, _ReactMarker.apply(this, arguments));
    }

    ReactMarkerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactMarker.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactMarkerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactMarker.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactMarkerEnhanced;
}(Marker);

var Marker$1 = function (_PureContainer) {
    inherits(Marker$$1, _PureContainer);

    function Marker$$1() {
        classCallCheck(this, Marker$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    Marker$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            animation: { structured: true },
            attribution: { structured: true },
            clickable: undefined,
            cursor: { structured: true },
            draggable: undefined,
            icon: { structured: true },
            label: { structured: true },
            opacity: undefined,
            options: { structured: true },
            place: { structured: true },
            position: { structured: true },
            shape: { structured: true },
            title: { structured: true },
            zIndex: undefined,
            noRedraw: undefined
        }]));
    };

    Marker$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onAnimationChanged", "onClick", "onClickableChanged", "onCursorChanged", "onDblClick", "onDrag", "onDragEnd", "onDraggableChanged", "onDragStart", "onFlatChanged", "onIconChanged", "onMouseDown", "onMouseOut", "onMouseOver", "onMouseUp", "onPositionChanged", "onRightClick", "onShapeChanged", "onTitleChanged", "onVisibleChanged", "onZindexChanged"]);
    };

    Marker$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    Marker$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(
            ReactMarkerEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            this.renderChildren(context, instance)
        );
    };

    return Marker$$1;
}(PureContainer);

var ReactMarkerClustererEnhanced = function (_ReactMarkerClusterer) {
    inherits(ReactMarkerClustererEnhanced, _ReactMarkerClusterer);

    function ReactMarkerClustererEnhanced() {
        classCallCheck(this, ReactMarkerClustererEnhanced);
        return possibleConstructorReturn(this, _ReactMarkerClusterer.apply(this, arguments));
    }

    ReactMarkerClustererEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactMarkerClusterer.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactMarkerClustererEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactMarkerClusterer.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactMarkerClustererEnhanced;
}(ReactMarkerClusterer);

var MarkerClusterer = function (_PureContainer) {
    inherits(MarkerClusterer, _PureContainer);

    function MarkerClusterer() {
        classCallCheck(this, MarkerClusterer);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    MarkerClusterer.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            averageCenter: undefined,
            batchSizeIE: undefined,
            calculator: undefined,
            clusterClass: undefined,
            enableRetinaIcons: undefined,
            gridSize: undefined,
            ignoreHidden: undefined,
            imageExtension: undefined,
            imagePath: undefined,
            imageSizes: undefined,
            maxZoom: undefined,
            minimumClusterSize: undefined,
            styles: undefined,
            title: undefined,
            zoomOnClick: undefined
        }]));
    };

    MarkerClusterer.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick", "onClusteringBegin", "onClusteringEnd", "onMouseOut", "onMouseOver"]);
    };

    MarkerClusterer.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    MarkerClusterer.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(
            ReactMarkerClustererEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            this.renderChildren(context, instance)
        );
    };

    return MarkerClusterer;
}(PureContainer);

var ReactMarkerWithLabelEnhanced = function (_ReactMarkerWithLabel) {
    inherits(ReactMarkerWithLabelEnhanced, _ReactMarkerWithLabel);

    function ReactMarkerWithLabelEnhanced() {
        classCallCheck(this, ReactMarkerWithLabelEnhanced);
        return possibleConstructorReturn(this, _ReactMarkerWithLabel.apply(this, arguments));
    }

    ReactMarkerWithLabelEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactMarkerWithLabel.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactMarkerWithLabelEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactMarkerWithLabel.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactMarkerWithLabelEnhanced;
}(ReactMarkerWithLabel);

var MarkerWithLabel = function (_PureContainer) {
    inherits(MarkerWithLabel, _PureContainer);

    function MarkerWithLabel() {
        classCallCheck(this, MarkerWithLabel);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    MarkerWithLabel.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            animation: { structured: true },
            clickable: undefined,
            cursor: { structured: true },
            draggable: undefined,
            icon: { structured: true },
            label: { structured: true },
            opacity: undefined,
            options: { structured: true },
            place: { structured: true },
            position: { structured: true },
            shape: { structured: true },
            title: { structured: true },
            zIndex: undefined,
            labelAnchor: { structured: true },
            labelClass: undefined,
            labelStyle: { structured: true },
            labelVisible: undefined,
            noRedraw: undefined
        }]));
    };

    MarkerWithLabel.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onAnimationChanged", "onClick", "onClickableChanged", "onCursorChanged", "onDblClick", "onDrag", "onDragEnd", "onDraggableChanged", "onDragStart", "onFlatChanged", "onIconChanged", "onMouseDown", "onMouseOut", "onMouseOver", "onMouseUp", "onPositionChanged", "onRightClick", "onShapeChanged", "onTitleChanged", "onVisibleChanged", "onZindexChanged"]);
    };

    MarkerWithLabel.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    MarkerWithLabel.prototype.render = function render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        if (children.length !== 1) throw Error("MarkerWithLabel should contain exactly one child element.");

        return VDOM.createElement(
            ReactMarkerWithLabelEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            VDOM.createElement(
                "div",
                null,
                children[0]
            )
        );
    };

    return MarkerWithLabel;
}(PureContainer);

var ReactOverlayViewEnhanced = function (_ReactOverlayView) {
    inherits(ReactOverlayViewEnhanced, _ReactOverlayView);

    function ReactOverlayViewEnhanced() {
        classCallCheck(this, ReactOverlayViewEnhanced);
        return possibleConstructorReturn(this, _ReactOverlayView.apply(this, arguments));
    }

    ReactOverlayViewEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactOverlayView.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactOverlayViewEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactOverlayView.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactOverlayViewEnhanced;
}(OverlayView);

var OverlayView$1 = function (_PureContainer) {
    inherits(OverlayView$$1, _PureContainer);

    function OverlayView$$1() {
        classCallCheck(this, OverlayView$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    OverlayView$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            mapPaneName: undefined,
            position: { structured: true },
            bounds: { structured: true }
        }]));
    };

    OverlayView$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, []);
    };

    OverlayView$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    OverlayView$$1.prototype.render = function render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        if (children.length !== 1) throw Error("OverlayView should have exactly one child element.");
        return VDOM.createElement(
            ReactOverlayViewEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                getPixelPositionOffset: this.getPixelPositionOffset,
                key: key
            }),
            children[0]
        );
    };

    return OverlayView$$1;
}(PureContainer);

var ReactPolygonEnhanced = function (_ReactPolygon) {
    inherits(ReactPolygonEnhanced, _ReactPolygon);

    function ReactPolygonEnhanced() {
        classCallCheck(this, ReactPolygonEnhanced);
        return possibleConstructorReturn(this, _ReactPolygon.apply(this, arguments));
    }

    ReactPolygonEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactPolygon.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);

        if (data.editable) {
            this.checkPathHasChanged = debounce(this.checkPathHasChanged.bind(this), 100);
            this.monitorPathChanges();
        }
    };

    ReactPolygonEnhanced.prototype.componentDidUpdate = function componentDidUpdate() {
        var _ReactPolygon$prototy;

        (_ReactPolygon$prototy = _ReactPolygon.prototype.componentDidUpdate).call.apply(_ReactPolygon$prototy, [this].concat(Array.prototype.slice.call(arguments)));

        //new instance of the path is available after update
        if (this.pathWithEvents) this.monitorPathChanges();
    };

    ReactPolygonEnhanced.prototype.monitorPathChanges = function monitorPathChanges() {
        //any attempt on clearing events throws an error

        var path = this.getPath();
        if (path != this.pathWithEvents) {
            google.maps.event.addListener(path, "insert_at", this.checkPathHasChanged);
            google.maps.event.addListener(path, "remove_at", this.checkPathHasChanged);
            google.maps.event.addListener(path, "set_at", this.checkPathHasChanged);
            this.pathWithEvents = path;
        }
    };

    ReactPolygonEnhanced.prototype.checkPathHasChanged = function checkPathHasChanged() {
        var pts = this.getPath().b.map(function (p) {
            return {
                lat: p.lat(),
                lng: p.lng()
            };
        });
        this.props.instance.set("path", pts);
    };

    ReactPolygonEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactPolygon.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactPolygonEnhanced;
}(Polygon);

var Polygon$1 = function (_Widget) {
    inherits(Polygon$$1, _Widget);

    function Polygon$$1() {
        classCallCheck(this, Polygon$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    Polygon$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            draggable: undefined,
            editable: undefined,
            options: { structured: true },
            path: undefined,
            paths: undefined
        }]));
    };

    Polygon$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick", "onDblClick", "onDrag", "onDragEnd", "onDragStart", "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onRightClick"]);
    };

    Polygon$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    Polygon$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactPolygonEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return Polygon$$1;
}(Widget);

var ReactPolylineEnhanced = function (_ReactPolyline) {
    inherits(ReactPolylineEnhanced, _ReactPolyline);

    function ReactPolylineEnhanced() {
        classCallCheck(this, ReactPolylineEnhanced);
        return possibleConstructorReturn(this, _ReactPolyline.apply(this, arguments));
    }

    ReactPolylineEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactPolyline.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);

        if (data.editable) {
            this.checkPathHasChanged = debounce(this.checkPathHasChanged.bind(this), 100);
            this.monitorPathChanges();
        }
    };

    ReactPolylineEnhanced.prototype.componentDidUpdate = function componentDidUpdate() {
        var _ReactPolyline$protot;

        (_ReactPolyline$protot = _ReactPolyline.prototype.componentDidUpdate).call.apply(_ReactPolyline$protot, [this].concat(Array.prototype.slice.call(arguments)));

        //new instance of the path is available after update
        if (this.pathWithEvents) this.monitorPathChanges();
    };

    ReactPolylineEnhanced.prototype.monitorPathChanges = function monitorPathChanges() {
        //any attempt on clearing events throws an error

        var path = this.getPath();
        if (path != this.pathWithEvents) {
            google.maps.event.addListener(path, "insert_at", this.checkPathHasChanged);
            google.maps.event.addListener(path, "remove_at", this.checkPathHasChanged);
            google.maps.event.addListener(path, "set_at", this.checkPathHasChanged);
            this.pathWithEvents = path;
        }
    };

    ReactPolylineEnhanced.prototype.checkPathHasChanged = function checkPathHasChanged() {
        var pts = this.getPath().b.map(function (p) {
            return {
                lat: p.lat(),
                lng: p.lng()
            };
        });
        this.props.instance.set("path", pts);
    };

    ReactPolylineEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactPolyline.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactPolylineEnhanced;
}(Polyline);

var Polyline$1 = function (_Widget) {
    inherits(Polyline$$1, _Widget);

    function Polyline$$1() {
        classCallCheck(this, Polyline$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    Polyline$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            draggable: undefined,
            editable: undefined,
            options: { structured: true },
            path: undefined,
            paths: undefined
        }]));
    };

    Polyline$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick", "onDblClick", "onDrag", "onDragEnd", "onDragStart", "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onRightClick"]);
    };

    Polyline$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    Polyline$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactPolylineEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return Polyline$$1;
}(Widget);

var ReactRectangleEnhanced = function (_ReactRectangle) {
    inherits(ReactRectangleEnhanced, _ReactRectangle);

    function ReactRectangleEnhanced() {
        classCallCheck(this, ReactRectangleEnhanced);
        return possibleConstructorReturn(this, _ReactRectangle.apply(this, arguments));
    }

    ReactRectangleEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactRectangle.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactRectangleEnhanced.prototype.componentDidUpdate = function componentDidUpdate() {
        var _ReactRectangle$proto;

        (_ReactRectangle$proto = _ReactRectangle.prototype.componentDidUpdate).call.apply(_ReactRectangle$proto, [this].concat(Array.prototype.slice.call(arguments)));
    };

    ReactRectangleEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactRectangle.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactRectangleEnhanced;
}(Rectangle);

var Rectangle$1 = function (_Widget) {
    inherits(Rectangle$$1, _Widget);

    function Rectangle$$1() {
        classCallCheck(this, Rectangle$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    Rectangle$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            bounds: { structured: true },
            draggable: undefined,
            editable: undefined,
            options: { structured: true }
        }]));
    };

    Rectangle$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onClick", "onDblClick", "onDrag", "onDragEnd", "onDragStart", "onMouseDown", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onBoundsChanged", "onRightClick"]);

        if (instance.widget.bounds && instance.widget.bounds.bind) {
            var oldOnBoundsChanged = instance.events["onBoundsChanged"];
            instance.events["onBoundsChanged"] = debounce(function () {
                var b = this.getBounds();
                var c = {
                    east: b.getNorthEast().lng(),
                    west: b.getSouthWest().lng(),
                    north: b.getNorthEast().lat(),
                    south: b.getSouthWest().lat()
                };

                if (!shallowEquals(c, instance.data.bounds)) instance.set("bounds", c);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (oldOnBoundsChanged) oldOnBoundsChanged.call.apply(oldOnBoundsChanged, [this].concat(args));
            }, 50);
        }
    };

    Rectangle$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    Rectangle$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactRectangleEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return Rectangle$$1;
}(Widget);

var ReactSearchBoxEnhanced = function (_ReactSearchBox) {
    inherits(ReactSearchBoxEnhanced, _ReactSearchBox);

    function ReactSearchBoxEnhanced() {
        classCallCheck(this, ReactSearchBoxEnhanced);
        return possibleConstructorReturn(this, _ReactSearchBox.apply(this, arguments));
    }

    ReactSearchBoxEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactSearchBox.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactSearchBoxEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactSearchBox.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactSearchBoxEnhanced;
}(ReactSearchBox);

var SearchBox = function (_PureContainer) {
    inherits(SearchBox, _PureContainer);

    function SearchBox() {
        classCallCheck(this, SearchBox);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    SearchBox.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            bounds: { structured: true },
            controlPosition: { structured: true }
        }]));
    };

    SearchBox.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onPlacesChanged"]);
    };

    SearchBox.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    SearchBox.prototype.render = function render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        if (children.length !== 1) throw Error("SearchBox should have exactly one child element.");

        return VDOM.createElement(
            ReactSearchBoxEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            VDOM.createElement(
                "div",
                null,
                children[0]
            )
        );
    };

    return SearchBox;
}(PureContainer$1);

var ReactStandaloneSearchBoxEnhanced = function (_ReactStandaloneSearc) {
    inherits(ReactStandaloneSearchBoxEnhanced, _ReactStandaloneSearc);

    function ReactStandaloneSearchBoxEnhanced() {
        classCallCheck(this, ReactStandaloneSearchBoxEnhanced);
        return possibleConstructorReturn(this, _ReactStandaloneSearc.apply(this, arguments));
    }

    ReactStandaloneSearchBoxEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactStandaloneSearc.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactStandaloneSearchBoxEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactStandaloneSearc.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactStandaloneSearchBoxEnhanced;
}(ReactStandaloneSearchBox);

var StandaloneSearchBox = function (_PureContainer) {
    inherits(StandaloneSearchBox, _PureContainer);

    function StandaloneSearchBox() {
        classCallCheck(this, StandaloneSearchBox);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    StandaloneSearchBox.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            bounds: { structured: true }
        }]));
    };

    StandaloneSearchBox.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onPlacesChanged"]);
    };

    StandaloneSearchBox.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    StandaloneSearchBox.prototype.render = function render(context, instance, key) {
        var children = this.renderChildren(context, instance);
        return VDOM.createElement(
            ReactStandaloneSearchBoxEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                key: key
            }),
            VDOM.createElement(
                "div",
                null,
                children
            )
        );
    };

    return StandaloneSearchBox;
}(PureContainer$1);

var ReactStreetViewPanoramaEnhanced = function (_ReactStreetViewPanor) {
    inherits(ReactStreetViewPanoramaEnhanced, _ReactStreetViewPanor);

    function ReactStreetViewPanoramaEnhanced() {
        classCallCheck(this, ReactStreetViewPanoramaEnhanced);
        return possibleConstructorReturn(this, _ReactStreetViewPanor.apply(this, arguments));
    }

    ReactStreetViewPanoramaEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactStreetViewPanor.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactStreetViewPanoramaEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactStreetViewPanor.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactStreetViewPanoramaEnhanced;
}(StreetViewPanorama);

var StreetViewPanorama$1 = function (_PureContainer) {
    inherits(StreetViewPanorama$$1, _PureContainer);

    function StreetViewPanorama$$1() {
        classCallCheck(this, StreetViewPanorama$$1);
        return possibleConstructorReturn(this, _PureContainer.apply(this, arguments));
    }

    StreetViewPanorama$$1.prototype.declareData = function declareData() {
        var _PureContainer$protot;

        (_PureContainer$protot = _PureContainer.prototype.declareData).call.apply(_PureContainer$protot, [this].concat(Array.prototype.slice.call(arguments), [{
            links: { structured: true },
            motionTracking: undefined,
            options: { structured: true },
            pano: undefined,
            position: { structured: true },
            pov: { structured: true },
            zoom: undefined
        }]));
    };

    StreetViewPanorama$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, ["onCloseClick", "onPanoChanged", "onPositionChanged", "onPovChanged", "onResize", "onStatusChanged", "onVisibleChanged", "onZoomChanged"]);

        //if (instance.widget.position && instance.widget.position.bind) {
        //    let oldOnPositionChanged = instance.events['onPositionChanged'];
        //    instance.events['onPositionChanged'] = debounce(function(...args) {
        //        var b = this.getPosition();
        //        let c = {
        //            lat: b.lat(),
        //            lng: b.lng()
        //        };

        //        if (!shallowEquals(c, instance.data.position))
        //            instance.set('position', c);

        //        if (oldOnPositionChanged) oldOnPositionChanged.call(this, ...args);
        //    }, 0);
        //}

        //if (instance.widget.pov && instance.widget.pov.bind) {
        //    let oldOnPovChanged = instance.events['onPovChanged'];
        //    instance.events['onPovChanged'] = debounce(function(...args) {
        //        var b = this.getPov();

        //        if (!shallowEquals(b, instance.data.pov))
        //            instance.set('pov', b);

        //        if (oldOnPovChanged) oldOnPovChanged.call(this, ...args);
        //    }, 50);
        //}

        //if (instance.widget.zoom && instance.widget.zoom.bind) {
        //    let oldOnZoomChanged = instance.events['onZoomChanged'];
        //    instance.events['onZoomChanged'] = debounce(function(...args) {
        //        let zoom = this.getZoom();
        //        if (zoom != instance.data.zoom)
        //            instance.set('zoom', zoom);

        //        if (oldOnZoomChanged) oldOnZoomChanged.call(this, ...args);
        //    }, 50);
        //}
    };

    StreetViewPanorama$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    StreetViewPanorama$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(
            ReactStreetViewPanoramaEnhanced,
            _extends({}, instance.data, instance.events, {
                instance: instance,
                getPixelPositionOffset: this.getPixelPositionOffset,
                key: key
            }),
            this.renderChildren(context, instance)
        );
    };

    return StreetViewPanorama$$1;
}(PureContainer);

var ReactTrafficLayerEnhanced = function (_ReactTrafficLayer) {
    inherits(ReactTrafficLayerEnhanced, _ReactTrafficLayer);

    function ReactTrafficLayerEnhanced() {
        classCallCheck(this, ReactTrafficLayerEnhanced);
        return possibleConstructorReturn(this, _ReactTrafficLayer.apply(this, arguments));
    }

    ReactTrafficLayerEnhanced.prototype.componentDidMount = function componentDidMount() {
        _ReactTrafficLayer.prototype.componentDidMount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget,
            data = instance.data;

        if (widget.pipeInstance) instance.invoke("pipeInstance", this);
    };

    ReactTrafficLayerEnhanced.prototype.componentWillUnmount = function componentWillUnmount() {
        _ReactTrafficLayer.prototype.componentWillUnmount.call(this);

        var instance = this.props.instance;
        var widget = instance.widget;

        if (widget.pipeInstance) instance.invoke("pipeInstance", null);
    };

    return ReactTrafficLayerEnhanced;
}(TrafficLayer);

var TrafficLayer$1 = function (_Widget) {
    inherits(TrafficLayer$$1, _Widget);

    function TrafficLayer$$1() {
        classCallCheck(this, TrafficLayer$$1);
        return possibleConstructorReturn(this, _Widget.apply(this, arguments));
    }

    TrafficLayer$$1.prototype.declareData = function declareData() {
        var _Widget$prototype$dec;

        (_Widget$prototype$dec = _Widget.prototype.declareData).call.apply(_Widget$prototype$dec, [this].concat(Array.prototype.slice.call(arguments), [{
            autoUpdate: undefined,
            options: { structured: true }
        }]));
    };

    TrafficLayer$$1.prototype.onInit = function onInit(context, instance) {
        instance.events = this.wireEvents(instance, []);
    };

    TrafficLayer$$1.prototype.wireEvents = function wireEvents(instance, events) {
        var _this3 = this;

        var map = [];
        events.map(function (name) {
            if (_this3[name]) {
                map[name] = function (e) {
                    return instance.invoke(name, e, instance);
                };
            }
        });
        return map;
    };

    TrafficLayer$$1.prototype.render = function render(context, instance, key) {
        return VDOM.createElement(ReactTrafficLayerEnhanced, _extends({}, instance.data, instance.events, {
            instance: instance,
            key: key
        }));
    };

    return TrafficLayer$$1;
}(Widget);

export { BicyclingLayer$1 as BicyclingLayer, Circle$1 as Circle, DirectionsRenderer$1 as DirectionsRenderer, DrawingManager, FusionTablesLayer$1 as FusionTablesLayer, GoogleMap$1 as GoogleMap, GroundOverlay$1 as GroundOverlay, HeatmapLayer$1 as HeatmapLayer, InfoBox, InfoWindow$1 as InfoWindow, KmlLayer$1 as KmlLayer, Marker$1 as Marker, MarkerClusterer, MarkerWithLabel, OverlayView$1 as OverlayView, Polygon$1 as Polygon, Polyline$1 as Polyline, Rectangle$1 as Rectangle, SearchBox, StandaloneSearchBox, StreetViewPanorama$1 as StreetViewPanorama, TrafficLayer$1 as TrafficLayer };
