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
  debug: {
    defaultFeedUrl,
  },
  requestPilets() {
    return fetch(defaultFeedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector("#app"));

root.render(<Piral instance={instance} />);
