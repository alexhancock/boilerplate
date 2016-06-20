import React from "react";
import r from "r-dom";
require("es6-promise").polyfill();
import fetch from "isomorphic-fetch";

/*

let req = fetch('/URL', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
});

*/

export default React.createClass({
  render(){
    const { div } = r;
    return div({}, "Hello world");
  }
});
