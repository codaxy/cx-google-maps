export function attachEventCallbacks(target, instance, eventMap) {
    let { widget } = instance;
    return Object.keys(eventMap).reduce((listeners, event) => {
        let name = eventMap[event];
        if (widget[name]) {
            listeners.push(
                target.addListener(event, e => {
                    instance.invoke(name, e, instance, target);
                }),
            );
        }
        return listeners;
    }, []);
}
