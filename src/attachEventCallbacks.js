export function attachEventCallbacks (target, instance, eventMap) {
  let {widget} = instance;
  for (let event in eventMap) {
    let name = eventMap[event];
    if (widget[name]) {
      target.addListener (event, e => {
        instance.invoke (name, e, instance, target);
      });
    }
  }
}
