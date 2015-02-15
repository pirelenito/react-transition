var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ReactTransition = require('../lib/react-transition');


describe("ReactTransition", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <ReactTransition component="div" ease="bounce" duration="1000" className="react-transition"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('react-transition');
  });
});
