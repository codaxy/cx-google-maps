
import { PureContainer } from 'cx/ui';
import { attachEventCallbacks } from './attachEventCallbacks';
import { shallowEquals } from 'cx/util';
import { standardSetterMap } from './standardSetterMap';
import { autoUpdate } from './autoUpdate';

const settableProps = {
};

const propSetterMap = standardSetterMap(settableProps);

export class OverlayView extends PureContainer {
    // TODO: Implement OverlayView
    render(context, instance, key) {
        return this.renderChildren(context, instance);
    }
}
