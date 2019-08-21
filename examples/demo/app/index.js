import { Store } from "cx/data";
import { Url, History, Widget, startAppLoop } from "cx/ui";
import { Timing, Debug } from "cx/util";

import {enableAllInternalDependencies} from 'cx/widgets';

enableAllInternalDependencies();

//css
import "./index.scss";

//store
const store = new Store();

//webpack (HMR)
if (module.hot) {
    // accept itself
    module.hot.accept();

    // remember data on dispose
    module.hot.dispose(function(data) {
        data.state = store.getData();
        if (stop) stop();
    });

    //apply data on hot replace
    if (module.hot.data) store.load(module.hot.data.state);
}

// routing

Url.setBaseFromScript("app.js");
History.connect(store, "url");

// debug

// Widget.resetCounter();
Timing.enable("app-loop");
Debug.enable("app-data");

// app loop
import Routes from "./routes";

let stop = startAppLoop(document.getElementById("app"), store, Routes);


(function(l) {
if (l.search) {
  var q = {};
  l.search.slice(1).split('&').forEach(function(v) {
    var a = v.split('=');
    q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
  });
  if (q.p !== undefined) {
    window.history.replaceState(null, null,
      l.pathname.slice(0, -1) + (q.p || '') +
      (q.q ? ('?' + q.q) : '') +
      l.hash
    );
  }
}
}(window.location))