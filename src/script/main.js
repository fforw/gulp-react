/** @jsx React.DOM */

var Hello = require("./hello");

React.renderComponent(<Hello/>, document.getElementById("container"), function ()
{
    console.info("mounted");
})
