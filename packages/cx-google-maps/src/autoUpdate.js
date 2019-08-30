export function autoUpdate(component, data, rawData, setterMap, options = {}) {
    return Object.keys(setterMap)
        .filter(prop => !(options.exclude || {})[prop])
        .reduce((changed, prop) => {
            if (data[prop] === rawData[prop]) return changed;

            let set = setterMap[prop];
            if (!set || typeof component[set] !== 'function')
                throw Error(`Method ${set} does not exist.`);

            component[set](data[prop]);
            changed[prop] = true;
            return changed;
        }, {});
}
