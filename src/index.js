var React = require("react");
var ReactDOM = require("react-dom");
var Show = require("./app");
var db = require("./db");

ReactDOM.render (
    <Show show={db[0]} />,
    document.getElementById("root")
);