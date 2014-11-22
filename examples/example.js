var App = React.createClass({displayName: 'App',
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
      React.createElement("div", {style: {padding: 10}},
        React.createElement("div", null, React.createElement("button", {onClick: this.handleTweenClick}, "Tween Me")),

        React.createElement("div", {className: "boundingBoxStyle"},
          React.createElement(ReactTransition, {component: "div", ease: "bounce", duration: "1000", className: "block", style: { left: this.state.left}})
        )
      )
    );
  }
});

React.render(React.createElement(App), document.querySelector('#content'));
