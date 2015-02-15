var React = require('react');
var d3 = require('d3');
var forEach = require('lodash.foreach');


/**
  Transition Component. It applies transitions on any prop change. Uses D3 interpolator functions underneath.

  @param props.component underlying component that will be initialized and animated
  @param [props.ease='linear'] easying function between transition states (available options: https://github.com/mbostock/d3/wiki/Transitions#d3_ease)
  @param [props.duration='500'] duration of the transition

  Usage:
  <Transition component={"path"} ease="bounce" duration="500" className="link" d={diagonal(link)}/>
 */
module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      ease: 'cubic-in-out',
      duration: 400
    };
  },

  startAnimation: function () {
    var start = new Date().getTime(),
        end = start + parseInt(this.props.duration, 10),
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

    forEach(newProps, function (value, propName) {
      if (propName === 'component' || propName === 'children' || propName === 'ease' || propName === 'duration' || propName.match(/^on(.+)/)) { return; }
      interpolators[propName] = d3.interpolate(that.state[propName], newProps[propName]);
    });

    this.interpolators = interpolators;
    this.startAnimation();
  },

  animate: function (t) {
    var newState = {},
        ease = d3.ease(this.props.ease);

    forEach(this.interpolators, function (interpolator, propName) {
      newState[propName] = interpolator(ease(t));
    });

    this.setState(newState);
  },

  render: function () {
    return React.createElement(this.props.component, this.state, this.props.children);
  }
});
