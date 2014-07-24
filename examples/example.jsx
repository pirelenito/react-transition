/** @jsx React.DOM */

var App = React.createClass({
  getInitialState: function () {
    return {
      left: 0
    };
  },

  handleTweenClick: function () {
    this.setState({ left: this.state.left === 400 ? 0 : 400 });
  },

  render: function () {
    console.log(this.state.left);

    return (
      <div style={{padding: 10}}>
        <div><button onClick={this.handleTweenClick}>Tween Me</button></div>

        <div className="boundingBoxStyle">
          <ReactTransition component={React.DOM.div} ease="bounce" duration="1000" className="block" style={{ left: this.state.left }}/>
        </div>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.querySelector('#content'));
