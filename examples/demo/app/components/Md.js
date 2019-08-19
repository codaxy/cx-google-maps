import {DocumentTitle} from 'cx/widgets';
import {Url, History} from 'cx/ui';
import {HtmlElement} from 'cx/widgets';
import marked from 'marked';
import {removeCommonIndent} from './removeCommonIndent';

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
    href = Url.resolve(href);
    return marked.Renderer.prototype.link.call(this, href, title, text);
}

var lastH1Text;

renderer.heading = function (text, level, raw) {
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    
    if (level == 1)
        lastH1Text = text;

    if (level > 1)
        return `<h${level} id="${escapedText}">${text}</h${level}>`;

    return marked.Renderer.prototype.heading.call(this, text, level, raw);
};

export class Md extends HtmlElement {

    attachProps(context, instance, props) {
        super.attachProps(context, instance, props);
        props.onClick = (e) => {
            if (e.target.tagName == 'A') {
                if (Url.isLocal(e.target.href) && e.target.href.indexOf('#') == -1) {
                    if (History.pushState({}, null, e.target.href))
                        e.preventDefault();
                }
            }
        }
    }

    add(text) {
        if (typeof text != 'string') {
            if (Array.from(arguments).every(a => typeof a == 'string'))
                return this.add(Array.from(arguments).join(''));

            return super.add(...arguments);
        }


        var withoutIndent = removeCommonIndent(text);
        if (!withoutIndent)
            return null;

        lastH1Text = null;
        var md = marked(withoutIndent, {renderer: renderer});
        if (!this.preserveDocumentTitle && lastH1Text)
            super.add({
                type: DocumentTitle,
                value: lastH1Text,
                action: "prepend",
                separator: " - "
            });

        return super.add({
            type: HtmlElement,
            innerHtml: md
        });
    }
}

Md.prototype.className = 'cxb-md';
Md.prototype.preserveDocumentTitle = false;
