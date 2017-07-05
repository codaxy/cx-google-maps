import { HtmlElement, Link, Section } from "cx/widgets";

export default (
    <cx>
        <h2 putInto="header">
            About
        </h2>
        <Section mod="well" title="Cx Google Maps">
            <p ws>
                This is an application generated using <a href="https://cxjs.io/quickstart" target="_blank">Cx CLI</a>.
                It serves as both a documentation and demo application for Cx Google Maps library.
            </p>
            <Link href="~/">Back</Link>
        </Section>
    </cx>
);
