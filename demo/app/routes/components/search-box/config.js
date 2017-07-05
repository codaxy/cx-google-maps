import {Md} from 'app/components';

export default {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `SearchBox` component is created.
            Typically, it is in this method you will save the instance of the search box, so that you can
            call its methods later, for example `searchBox.getPlaces()`. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    }
};
