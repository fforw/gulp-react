/** @jsx React.DOM */

var React = require("react");

var Hello = React.createClass({
    render: function ()
    {
        return (
            <div className="special">Hello from <b>React</b>!</div>
        );
    }
})

module.exports = Hello;