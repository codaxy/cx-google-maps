export function autoUpdate(component, data, rawData, props, setters, options = {}) {
    Object.keys(props).filter(prop => !(options.exclude || {})[prop])
        .forEach(prop => {
            if (data[prop] === rawData[prop])
                return;

            let set = setters[prop];
            if (!set || typeof(component[set]) !== 'function')
                throw Error(`Method ${set} does not exist.`);

           component[set](data[prop]);
        });
}