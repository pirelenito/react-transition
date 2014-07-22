# React Transition Component

[React.js](http://reactjs.com/) component that will apply transitions on any prop change. Uses [D3](http://d3js.org/) interpolator functions underneath.

Was created to be used on drawing SVG charts with [D3](http://d3js.org/), but can be used for anything.

It is available as an UMD, having support for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and globals.

## Usage

Install with bower:

```bash
bower install react-transition
```

Or with NPM:

```bash
npm install react-transition
```

Here is an example usage as a CommonJS module:

```js
/** @jsx React.DOM */
var Transition = require('react-transition'),
    React = require('react');

<Transition component={React.DOM.path} ease="bounce" duration="500" className="link" d={diagonal(link)}/>
```

In the previous example, the `Transition` component will actualy render a `React.DOM.path`, and it will apply the `bounce` ease function with a duration of `500` milisseconds on any [componentWillReceiveProps](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops).

## Dependencies

* [React.js](http://reactjs.com/)
* [D3](http://d3js.org/)
* [Underscore](http://underscorejs.org/)


## Author

[Paulo Ragonha](http://paulo.ragonha.me/)
