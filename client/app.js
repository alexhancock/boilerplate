import App from "../components/app.js";
import ReactDOM from "react-dom";
import React from "react";

const app = React.createElement(App, {});

ReactDOM.render(app, document.getElementById("app"));
