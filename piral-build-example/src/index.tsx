import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInstance, Piral, createStandardApi } from "piral";
import { layout, errors } from "./layout";

const defaultFeedUrl = "http://localhost:1234/api/pilets";

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi()],
  requestPilets() {
    return fetch(defaultFeedUrl).then((res) => res.json());
  },
});

const root = createRoot(document.querySelector("#app"));

root.render(<Piral instance={instance} />);
