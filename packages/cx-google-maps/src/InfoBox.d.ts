import { NumberProp, Prop, PureContainerProps, StringProp, Widget } from 'cx/src/core';
import { InfoBoxOptions } from 'google-maps-infobox';
import { Instance } from 'cx/src/ui/Instance';

export interface InfoBoxProps extends PureContainerProps {
    /**
     * Options for the native `google.maps.InfoBox`.
     * Structured/bindable.
     */
    options?: Prop<InfoBoxOptions>;

    /**
     * The z-index of the info box.
     */
    zIndex?: NumberProp;

    /**
     * The geographic position where the info box should be anchored.
     * Can be a static `{ lat, lng }` object or a bound value.
     */
    position?: Prop<{ lat: number; lng: number }>;

    /**
     * Fired when the close button is clicked.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoBox - The native `InfoBox` instance.
     */
    onCloseClick?: (e: any, instance: Instance, infoBox: any) => void;

    /**
     * Fired when the info box DOM is ready.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoBox - The native `InfoBox` instance.
     */
    onDomReady?: (e: any, instance: Instance, infoBox: any) => void;

    /**
     * Fired when the info box content changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoBox - The native `InfoBox` instance.
     */
    onContentChanged?: (e: any, instance: Instance, infoBox: any) => void;

    /**
     * Fired when the info box position changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoBox - The native `InfoBox` instance.
     */
    onPositionChanged?: (e: any, instance: Instance, infoBox: any) => void;

    /**
     * Fired when the info box z-index changes.
     *
     * @param e - Google Maps event object.
     * @param instance - The Cx widget instance.
     * @param infoBox - The native `InfoBox` instance.
     */
    onZindexChanged?: (e: any, instance: Instance, infoBox: any) => void;

    /**
     * Called after the native `InfoBox` is created.
     *
     * @param infoBox - The native `InfoBox` instance.
     * @param instance - The Cx widget instance.
     */
    pipeInstance?: (infoBox: any, instance: Instance) => void;
}

export class InfoBox extends Widget<InfoBoxProps> {}
