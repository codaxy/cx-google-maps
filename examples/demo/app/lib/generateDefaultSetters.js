function pascalCase(str) {
    return str[0].toUpperCase() + str.substring(1);
}

export function generateDefaultSetters(props) {
    return Object.keys(props)
        .reduce((map, prop) => {
             map[prop] = `set${pascalCase(prop)}`;
             return map;
        }, {});
}
