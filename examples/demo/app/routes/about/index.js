import { 
    HtmlElement,
    Link,
    Section,
    CxCredit
} from "cx/widgets";

import {
    Url
} from "cx/ui";

import {
    Md
} from 'app/components';

export default (
    <cx>
        <h2 putInto="header">
            About
        </h2>
        <Section mod="well" title="Cx Google Maps">
            <p ws>
                This is an application generated using <a href="https://cxjs.io/quickstart" target="_blank">Cx CLI</a>.
                It serves as both a documentation and demo application for Cx Google Maps library. All source 
                code is available on <a href="https://github.com/codaxy/cx-google-maps" target="_blank">GitHub</a>.
            </p>

            <br/>

            <h4><img src="https://codaxy.github.io/cx-google-maps/assets/img/cx.png" /></h4>

            <p ws>

                <a href="https://cxjs.io" target="_blank">CxJS</a>, or simply Cx, is a feature-rich JavaScript framework for building complex web front-ends, 
                such as BI tools, dashboards and admin apps. <a href="https://cxjs.io">See more</a>.
            </p>

            <br/>

            <Link href="~/">Back</Link>
        </Section>
    </cx>
);
