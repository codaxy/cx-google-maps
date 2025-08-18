import { BooleanProp, NumberProp, PureContainerProps, StringProp, Widget } from 'cx/src/core';

/**
 * Props for the StandaloneSearchBox component.
 */
export interface StandaloneSearchBoxProps extends PureContainerProps {
    /**
     * Current input value of the search box.
     */
    value?: StringProp;

    /**
     * Indicates whether the search box is disabled.
     */
    disabled?: BooleanProp;

    /**
     * Indicates whether the search box is read-only.
     */
    readOnly?: BooleanProp;

    /**
     * Indicates whether the search box is enabled.
     */
    enabled?: BooleanProp;

    /**
     * Placeholder text shown when the input is empty.
     */
    placeholder?: StringProp;

    /**
     * Marks the field as required.
     */
    required?: BooleanProp;

    /**
     * Minimum number of characters allowed.
     */
    minLength?: NumberProp;

    /**
     * Maximum number of characters allowed.
     */
    maxLength?: NumberProp;

    /**
     * Icon displayed inside the input field.
     */
    icon?: StringProp;
}

/**
 * A search box widget that integrates with Google Maps Places API.
 */
export class StandaloneSearchBox extends Widget<StandaloneSearchBoxProps> {}
