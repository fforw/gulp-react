/** @jsx React.DOM */

var React = require("react");
var Hello = require("./hello");

React.renderComponent(<Hello>Hello from <b>React</b>!</Hello>, document.getElementById("container"), function ()
{
    console.info("mounted");
})
