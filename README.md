# vue-follow-tooltip

Tiny tooltip directive for Vue 3

Lets you create tooltips that follow cursor

<p align="center">
    🚀&nbsp;&nbsp;<b><a href="https://gvguy.github.io/vue-follow-tooltip/">Live demo</a></b>&nbsp;&nbsp;🚀
</p>
<p align="center">
    <a href="https://codepen.io/vanechka222/pen/mdMVLNR">Codepen</a>
</p>

<p align="center">
    <img src="https://media.giphy.com/media/BNS0LgRIyHnN4xARHw/source.gif">
</p>

## Why

### Simple

No dependencies. No under-the-hood libraries. Just a couple of Vanilla JS objects

### Customizable

There are a few things you can customize with options

No need to override default styles, because there aren't any. Just add your CSS as usual

> More about [styles](#styles)
> More about [options](#options)

## Installation

### NPM

```
npm i vue-follow-tooltip
```

```javascript
import Tooltip from 'vue-follow-tooltip'
```

### CDN

```xml
<script src="https://unpkg.com/vue-follow-tooltip@latest"></script>
```

## Usage

```javascript
// install it with use()

app.use(Tooltip)

// OR register the directive manually

app.directive('tooltip', Tooltip)
```

```xml
<button v-tooltip="'Look! It\'s a button, let\'s push it!">DON'T PUSH</button>
```

## Options

You can pass options like this:

```javascript
app.use(Tooltip, {
   delay: 500,
   center: true,
   offsetX: 0,
   offsetY: 20
})
```

The values in the example are the default values

Property names are pretty self-explanatory

## Styles

The tooltip gets a class `.tooltip`

Use it to apply styles to it like this:

```css
.tooltip {
   background: rgba(1, 1, 1, 0.7);
   padding: 10px;
   border-radius: 3px;
   color: #fbfbfb;
   font-family: sans-serif;
   transition: opacity 0.3s;
}
```

### Styling guidelines

-  There are no default styles, however, if you specify `top`, `left`, `opacity` & `position` they will have no effect
-  Dont use `transition: all ..`, it will mess with how the tooltip follows the cursor

## License

MIT
