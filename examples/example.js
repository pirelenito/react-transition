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
      React.DOM.div({style: {padding: 10}},
        React.DOM.div(null, React.DOM.button({onClick: this.handleTweenClick}, "Tween Me")),

        React.DOM.div({className: "boundingBoxStyle"},
          ReactTransition({component: React.DOM.div, ease: "bounce", duration: "1000", className: "block", style: { left: this.state.left}})
        )
      )
    );
  }
});

React.renderComponent(App(null), document.querySelector('#content'));
