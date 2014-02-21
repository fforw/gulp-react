/** @jsx React.DOM */

var React = require("react");
var Hello = require("./hello");

React.renderComponent(<Hello/>, document.getElementById("container"), function ()
{
    console.info("mounted");
})
