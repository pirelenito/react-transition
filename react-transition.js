(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['react', 'd3', 'underscore'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('react'), require('d3'), require('underscore'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.React, root.d3, root._);
  }
}(this, function (React, d3, _) {

  /**
    Transition Component. It applies transitions on any prop change. Uses D3 interpolator functions underneath.

    @param props.component underlying component that will be initialized and animated
    @param [props.ease='linear'] easying function between transition states (available options: https://github.com/mbostock/d3/wiki/Transitions#d3_ease)
    @param [props.duration='500'] duration of the transition

    Usage:
    <Transition component={React.DOM.path} ease="bounce" duration="500" className="link" d={diagonal(link)}/>
   */
  var Transition = React.createClass({
    getDefaultProps: function () {
      return {
        ease: 'cubic-in-out',
        duration: 400
      };
    },

    startAnimation: function () {
      var start = new Date().getTime(),
          end = start + this.props.duration,
          finished = false,
          that = this;

      function animate () {
        if (finished || that.stopAnimation) { return; }
        var now = t();

        if (now > 1) { now = 1; finished = true; }

        that.animate(now);
        window.requestAnimationFrame(animate);
      }

      function t () {
        var now = new Date().getTime();

        return (now - start) / (end - start) || 0;
      }

      animate();
    },

    componentWillUnmount: function () {
      // stops the animation in progress
      this.stopAnimation = true;
    },

    getInitialState: function () {
      return this.props;
    },

    componentWillReceiveProps: function (newProps) {
      var that = this;

      var interpolators = {};

      _(newProps).each(function (value, propName) {
        if (propName === 'component' || propName === 'children' || propName === 'ease' || propName === 'duration' || propName.match(/^on(.+)/)) { return; }
        interpolators[propName] = d3.interpolate(that.state[propName], newProps[propName]);
      });

      this.interpolators = interpolators;
      this.startAnimation();
    },

    animate: function (t) {
      var newState = {},
          ease = d3.ease(this.props.ease);

      _(this.interpolators).each(function (interpolator, propName) {
        newState[propName] = interpolator(ease(t));
      });

      this.setState(newState);
    },

    render: function () {
      return this.props.component(this.state, this.props.children);
    }
  });

  return Transition;

}));
