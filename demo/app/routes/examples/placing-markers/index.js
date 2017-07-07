import { 
    HtmlElement, 
    Route, 
    FlexCol, 
    FlexRow,
    Section
} from 'cx/widgets';

import { 
    Md 
} from 'app/components';

const info = {
    name: 'Placing markers',
    route: '~/examples/placing-markers'
};

export default <cx>
    <Route url:bind="url" route={info.route}>
        <h2 putInto="header">
            {info.name}
        </h2>

        <FlexRow style="height: 100%" spacing target="desktop">
            <Section mod="card" style="flex:1">
                <h4>
                    {info.name}
                </h4>

                <p ws>
                    TBD
                </p>
            </Section>
        </FlexRow>    
    </Route>
</cx>;
