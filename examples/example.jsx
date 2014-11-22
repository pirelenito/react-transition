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
    return (
      <div style={{padding: 10}}>
        <div><button onClick={this.handleTweenClick}>Tween Me</button></div>

        <div className="boundingBoxStyle">
          <ReactTransition component="div" ease="bounce" duration="1000" className="block" style={{ left: this.state.left }}/>
        </div>
      </div>
    );
  }
});

React.render(<App/>, document.querySelector('#content'));
