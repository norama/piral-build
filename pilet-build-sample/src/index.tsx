import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "piral-build-example";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/page-sample", Page);

  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page-sample">Sample</Link>);
  app.registerTile(() => <div>Sample!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
