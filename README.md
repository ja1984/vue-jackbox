# vue-jackbox

## Requirements
- [Vue.js](https://github.com/vuejs/vue) `2.x`  

## Installation
```bash
# npm
$ npm install vue-jackbox

# yarn
$ yarn add vue-jackbox
```

## API

Available methods inside a VueJS component

The same parameters apply to all the methods in `$alert` expect the method `hide` and `clearDefault`

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
duration | `number` | -1 | The duration for which the alert will be shown, -1 = infinite
title | `HTML/string` | _empty_ | The dialog title
message | `HTML/string` | _empty_ | The dialog message

If any of the values is not present on the method call then the default values will be used.

## Set default values
```javascript
this.$alert.setDefault({
  duration,
  forceRender,
  message,
  transition,
  type
})
```


## Show an alert
```javascript
this.$alert.show({
  duration,
  forceRender,
  message,
  transition,
  type
})
```

## Show an alert type info
```javascript
this.$alert.info({
  duration,
  forceRender,
  message,
  transition
})
```

## Show an alert type success
```javascript
this.$alert.success({
  duration,
  forceRender,
  message,
  transition
})
```

## Show an alert type warning
```javascript
this.$alert.warning({
  duration,
  forceRender,
  message,
  transition
})
```

## Show an alert type danger
```javascript
this.$alert.danger({
  duration,
  forceRender,
  message,
  transition
})
```

## Hide alert
```javascript
this.$alert.hide()
```

## Usage

The component `vue-alert` must be included either in the component using the `vue-alert` or a parent of this component, for example if there's a `vue-alert` instance at the root of the app.

It is possible to access the `vue-alert` component using the `$alert` variable on the component instance as shown in the below example.

The default bootstrap style are applied to the alert but this can be overriden by applying a new style to the following classes:
- alert
- alert-info
- alert-success
- alert-warning
- alert-danger

The following transitions are available:
- fade with force render
- smooth without force render

main.js

```javascript
import Vue from 'vue'
import VueJackBox from 'vue-jackbox'
import App from './App'

Vue.use(VueJackBox)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


```

App.vue

```html
<template>
    <div id="app"></div>
</template>

<script>

export default {
  mounted () {
    this.$notification(
        {
          title: 'App loaded',
          text: 'The app has loaded successfully!',
          state: 'success'
        });
  }
}
</script>

<style>
.vue-alert {
  margin-top: 10px;
}
</style>
```

Example.vue

```html
<template>
  <div>
    <h1>Example component</h1>
    <button class="btn btn-default" @click="showAlert">Click to use vue-alert</button>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert () {
      this.$alert.show({
        message: 'Clicked the button!'
      })
    }
  }
}
</script>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)