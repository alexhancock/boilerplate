import r from "r-dom";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../components/app";

export default () => {
  const app = React.createElement(App, {});

  return ReactDOMServer.renderToString(app);
}
