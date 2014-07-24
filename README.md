# React Transition Component

[React.js](http://reactjs.com/) component that will apply transitions on any prop change. Uses [D3](http://d3js.org/) interpolator functions underneath.

Was created to be used on drawing SVG charts with [D3](http://d3js.org/), but can be used for anything.

It is available as an UMD, having support for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and globals.

Check the [live demo](https://rawgit.com/pirelenito/react-transition/master/examples/index.html) and [sorce](https://raw.githubusercontent.com/pirelenito/react-transition/master/examples/example.jsx).

## Usage

Install with [Bower](http://bower.io/):

```bash
bower install react-transition
```

With [NPM](http://npmjs.org/):

```bash
npm install react-transition
```

Or simply dowload the [react-transition.js](https://raw.githubusercontent.com/pirelenito/react-transition/master/react-transition.js) file and add as a script tag in your HTML (it will expose a `ReactTransition` global variable):

```html
<script src='react-transition.js'></script>
```

Here is an example usage as a CommonJS module:

```js
/** @jsx React.DOM */
var Transition = require('react-transition'),
    React = require('react');

<Transition component={React.DOM.path} ease="bounce" duration="500" className="link" d={diagonal(link)}/>
```

In the previous example, the `Transition` component will actualy render a `React.DOM.path`, and it will apply the `bounce` ease function with a duration of `500` milisseconds on any [componentWillReceiveProps](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops) of the `d` property.

## Easing functions

[Check D3's documentation](https://github.com/mbostock/d3/wiki/Transitions#d3_ease) to see the available *easing* function.

## Dependencies

* [React.js](http://reactjs.com/)
* [D3](http://d3js.org/)
* [Underscore](http://underscorejs.org/)

## Author

[Paulo Ragonha](http://paulo.ragonha.me/)

## Similar work

You can check [@chenglou](https://github.com/chenglou)'s approach to animation using mixins: [react-tween-state](https://github.com/chenglou/react-tween-state).
