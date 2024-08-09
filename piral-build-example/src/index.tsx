import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInstance, Piral, createStandardApi } from "piral";
import { layout, errors } from "./layout";

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi()],
  requestPilets() {
    return Promise.resolve([
      {
        name: "pilet-build-example",
        version: "1.0.0",
        description: "",
        author: {
          name: "",
          email: "",
        },
        dependencies: {},
        requireRef: "rolluppr_pilet-build-example",
        spec: "v2",
        link: "http://localhost:5001/$pilet-api/0/index.js", //'https://assets.piral.cloud/pilets/norama-tutorial-feed/pilet1/1.0.0/index.js',
      },
    ]);
  },
});

const root = createRoot(document.querySelector("#app"));

root.render(<Piral instance={instance} />);
