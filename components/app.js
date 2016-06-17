import React from "react";
import r from "r-dom";

export default React.createClass({
  render(){
    const { div } = r;
    return div({}, "Hello world");
  }
});
