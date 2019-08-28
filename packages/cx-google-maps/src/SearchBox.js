import { PureContainer, VDOM } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
    bounds: { structured: true },
    controlPosition: undefined,
    style: { structured: true },
    placeholder: undefined,
};

const propSetterMap = standardSetterMap(settableProps);

export class SearchBox extends PureContainer {
    declareData() {
        super.declareData(...arguments, settableProps);
    }

    prepareData(context, instance) {
        super.prepareData(context, instance);

        let { data, cached, searchBox } = instance;
        let { rawData } = cached;
        if (!searchBox || !rawData) return;

        autoUpdate(searchBox, data, rawData, propSetterMap);
    }

    initSearchBox(el, instance) {
        if (instance.input === el)
            return;

        if (instance.input && instance.searchBox && instance.attachedEvents) {
            instance.searchBox.unbindAll();
            instance.attachedEvents = null;
        }

        instance.input = el;

        if (el) {
            let { widget, data } = instance;

            if (!google.maps.places) 
                throw Error('GoogleMaps places API not loaded.');

            let searchBox = (instance.searchBox = new google.maps.places.SearchBox(el));
            this.map.controls[data.controlPosition].push(el);

            if (widget.pipeInstance) 
                instance.invoke('pipeInstance', searchBox, instance);

            instance.attachedEvents = attachEventCallbacks(searchBox, instance, {
                places_changed: 'onPlacesChanged',
            });
        }
    }

    onChange(e, instance) {
        let { data } = instance;

        let text = e.target.value;
        if (data.maxLength != null && text.length > data.maxLength) {
            text = text.substring(0, data.maxLength);
            instance.input.value = text;
        }

        //it's important not to set the old value as it causes weird behavior if debounce is used
        let value = text || null;

        if (!instance.set('value', value, true)) instance.input.value = data.value || '';
    }

    explore(context, instance) {
        this.map = context.googleMap;
        super.explore(context, instance);
    }

    render(context, instance, key) {
        let { data, widget } = instance;
        let { CSS } = widget;
        return (
            <input
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
            />
        );
    }
}
