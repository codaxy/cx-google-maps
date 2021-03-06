import { HtmlElement, PureContainer } from 'cx/widgets';
import { Widget, VDOM } from 'cx/ui';
import {CSS} from '../CSS';

export class EventTable extends PureContainer {
    init() {
        super.init();
        var props = this.props || {};

        var keys = Object.keys(props).sort((a, b) => {
            if (props[a].key && !props[b].key)
                return -1;
            if (!props[a].key && props[b].key)
                return +1;
            return a < b ? -1 : a > b ? 1 : 0;
        });

        keys.forEach(key=> {
            var p = props[key];
            if (p) {
                var name = [key];
                if (p.alias)
                    name.push(<cx><br/></cx>, p.alias);

                var r = <cx>
                    <tr className={CSS.state({important: p.key, regular: !p.key})}>
                        <td className={CSS.state({long: key.length > 16})}>
                            {name}
                        </td>
                        <td if-expr="!!{p.description}">
                            {p.description}
                        </td>
                        <td if-expr="!{p.description}">
                            Mapped from <code>{p}</code>.
                        </td>
                    </tr>
                </cx>
                this.add(r);
            }
            else this.add(<cx>
                <tr>
                    <td>N/A</td>
                </tr>
            </cx>);
        });
    }

    render(context, instance, key) {
        return <div key={key} className="cxb-configtable">
            <table>
                <tbody>
                <tr>
                    <th>Event</th>
                    <th>Description</th>
                </tr>
                {this.renderChildren(context, instance)}
                </tbody>
            </table>
        </div>
    }
}
