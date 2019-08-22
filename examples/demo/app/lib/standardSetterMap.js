function pascalCase(str) {
    return str[0].toUpperCase() + str.substring(1);
}

/**
 * Creates a convention-based setter name map (e.g. {zIndex: setZIndex})
 * @param {Object} props Object whose keys are the names of settable properties
 */
export function standardSetterMap(props) {
    return Object.keys(props)
        .reduce((map, prop) => {
             map[prop] = `set${pascalCase(prop)}`;
             return map;
        }, {});
}
