import { PureContainer, VDOM } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';

export class SearchBox extends PureContainer {
    declareData() {
        super.declareData(...arguments, {
            bounds: { structured: true },
            controlPosition: undefined,
            style: { structured: true },
            placeholder: undefined
        });
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, marker } = instance;
        let { rawData } = cached;
        if (!marker || !rawData) return;

        if (data.position && !sameLatLng(data.position, rawData.position))
            instance.marker.setPosition(data.position);
    }

    initSearchBox(input, instance) {
        if (instance.searchBox)
            return;

        this.input = input;

        let { widget, data } = instance;

        if (!google.maps.places)
            throw Error("GoogleMaps places API not loaded.");

        let searchBox = (instance.searchBox = new google.maps.places.SearchBox(input));
        this.map.controls[data.controlPosition].push(input);

        if (widget.pipeInstance)
            instance.invoke('pipeInstance', searchBox, instance);

        attachEventCallbacks(searchBox, instance, {
            places_changed: 'onPlacesChanged',
        });
    }

    onChange(e, instance) {
        let { data } = instance;

        let text = e.target.value;
        if (data.maxLength != null && text.length > data.maxLength) {
            text = text.substring(0, data.maxLength);
            this.input.value = text;
        }

        //it's important not to set the old value as it causes weird behavior if debounce is used
        let value = text || null;

        if (!instance.set('value', value, true))
            this.input.value = data.value || '';
    }

    explore(context, instance) {
        this.map = context.googleMap;
        super.explore(context, instance);
    }

    render(context, instance, key) {
        let { data, widget } = instance;
        let { CSS } = widget;
        
        return <input
            key={key}
            ref={el => this.initSearchBox(el, instance)}
            className={CSS.expand(data.classNames)}
            defaultValue={data.value}
            id={data.id}
            style={data.style}
            type={widget.inputType}
            disabled={data.disabled}
            readOnly={data.readOnly}
            tabIndex={data.tabIndex}
            placeholder={data.placeholder}
            {...data.inputAttrs}
            onInput={e => this.onChange(e, instance)}
            onChange={e => this.onChange(e, instance)}
        />;
    }
}
