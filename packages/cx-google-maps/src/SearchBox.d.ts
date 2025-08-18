import { BooleanProp, NumberProp, Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { Instance } from 'cx/src/ui/Instance';

export interface SearchBoxProps extends PureContainerProps {
    /**
     * Bias results to the supplied bounds.
     */
    bounds?: Prop<google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral>;

    /**
     * Position of the input in the map controls.
     */
    controlPosition?: Prop<google.maps.ControlPosition>;

    /**
     * Inline styles applied to the rendered <input />.
     */
    style?: Prop<Partial<CSSStyleDeclaration> | Record<string, string | number>>;

    /**
     * Placeholder text for the input.
     */
    placeholder?: StringProp;

    /**
     * Initial or bound value of the input.
     */
    value?: StringProp;

    /**
     * Maximum allowed length of the input value.
     */
    maxLength?: NumberProp;

    /**
     * Disables the input when true.
     */
    disabled?: BooleanProp;

    /**
     * Makes the input read-only when true.
     */
    readOnly?: BooleanProp;

    /**
     * Tab index for keyboard navigation.
     */
    tabIndex?: NumberProp;

    /**
     * DOM id applied to the input element.
     */
    id?: StringProp;

    /**
     * Extra attributes spread on the <input /> element.
     */
    inputAttrs?: Prop<Record<string, any>>;

    /**
     * Fired when the Places API detects that the places list has changed.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param searchBox - The native `google.maps.places.SearchBox` instance.
     */
    onPlacesChanged?: (e: any, instance: Instance, searchBox: google.maps.places.SearchBox) => void;

    /**
     * Called after the native `google.maps.places.SearchBox` is created.
     *
     * @param searchBox - The native `google.maps.places.SearchBox` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (searchBox: google.maps.places.SearchBox, instance: Instance) => void;
}

export class SearchBox extends Widget<SearchBoxProps> {}
