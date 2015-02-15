# React Transition Component

[![Build Status](https://secure.travis-ci.org/pirelenito/react-transition.png)](https://travis-ci.org/pirelenito/react-transition)

[React.js](http://reactjs.com/) component that will apply transitions on any prop change. Was created to be used on drawing SVG charts with [D3](http://d3js.org/), but can be used for anything.

![Demo](https://rawgit.com/pirelenito/react-transition/master/demo-animation.gif)

Check the [live demo](https://rawgit.com/pirelenito/react-transition/master/index.html).

## Usage

Here is an example usage:

```js
<ReactTransition component="div" ease="bounce" duration="500" style={{ left: left }}/>
```

The `ReactTransition` component will actualy render a `div`, and it will apply the `bounce` ease function with a duration of `500` milisseconds on any [componentWillReceiveProps](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops) of the `style` property.

## Install

Install with [NPM](http://npmjs.org/):

```bash
npm install react-transition
```

It also is available as an UMD. Having support for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and globals, which can be installed through [Bower](http://bower.io/):

```bash
bower install react-transition
```

Or simply dowloading the [dist/react-transition.js](https://raw.githubusercontent.com/pirelenito/react-transition/master/dist/react-transition.js) distribution file and add as a script tag in your HTML (it will expose a `ReactTransition` global variable) allongsite with its depencencies:

```html
<script src="vendor/react.min.js"></script>
<script src="vendor/d3.min.js" charset="utf-8"></script>
<script src='vendor/react-transition.js'></script>
```

## Easing functions

[Check D3's documentation](https://github.com/mbostock/d3/wiki/Transitions#d3_ease) to see the available *easing* function. But some examples are:

 * linear - the identity function, t.
 * poly(k) - raises t to the specified power k (e.g., 3).
 * quad - equivalent to poly(2).
 * cubic - equivalent to poly(3).
 * sin - applies the trigonometric function sin.
 * exp - raises 2 to a power based on t.
 * circle - the quarter circle.
 * elastic(a, p) - simulates an elastic band;
 * back(s) - simulates backing into a parking space.
 * bounce - simulates a bouncy collision.

## Author

[Paulo Ragonha](http://paulo.ragonha.me/)

## Similar work

You can check [@chenglou](https://github.com/chenglou)'s approach to animation using mixins: [react-tween-state](https://github.com/chenglou/react-tween-state).
