import {Md} from 'app/components';

export const config = {
    pipeInstance: {
        type: 'string|function',
        description: <cx><Md>
            If set, this method will be invoked when the instance of a React `MarkerClusterer` component is created.
            Typically, it is in this method you will save the instance of the clusterer, so that you can
            call its methods later. The method has signature `pipeInstance(instance)`.
        </Md></cx>
    },
    averageCenter: 'bool',
    batchSizeIE: 'number',
    calculator: 'function',
    clusterClass: 'string',
    enableRetinaIcons: 'bool',
    gridSize: 'number',
    ignoreHidden: 'bool',
    imageExtension: 'string',
    imagePath: 'string',
    imageSizes: 'array',
    maxZoom: 'number',
    minimumClusterSize: 'number',
    styles: 'array',
    title: 'string',
    zoomOnClick: 'bool',
};

export const events = {
  onClick: `click`,

  onClusteringBegin: `clusteringbegin`,

  onClusteringEnd: `clusteringend`,

  onMouseOut: `mouseout`,

  onMouseOver: `mouseover`,
};


