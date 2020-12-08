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

## Try it
- [Demo](https://ja1984.github.io/vue-jackbox/)

## API

Available methods inside a VueJS component

The same parameters apply to all the methods in `$alert` expect the method `hide` and `clearDefault`

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
title | `HTML/string` | _empty_ | The dialog title
message | `HTML/string` | _empty_ | The dialog message
question | `HTML/string` | _empty_ | The dialog question
placeholder | `string` | _empty_ | Input placeholder for prompt
value | `string` | _empty_ | Input value for prompt
label | `HTML/string` | _empty_ | Input label for prompt
centerButtons | `boolean` | false | Center action buttons in dialog footer
cancelOnBackdrop | `boolean` | _false_ | Cancel dialog on backdrop click
showBackdrop | `boolean` | _true_ | Option to display backdrop
cancelOnEsc | `boolean` | _true_ | Cancel dialog on esc
duration | `number` | -1 | The duration for which the alert will be shown, `-1 = infinite`
ok | `object` | _{text: 'Continue', action: null}_ | Text and callback on ok button.
cancel | `object` | _{text: 'Cancel', action: null}_ | Text and callback on cancel button.
state | `string` | _information_ | Sets color on dialog, options: `information`, `critical`, `warning` ,`success`
buttons | `string[]` | _['cancel', 'ok']_ | Select which buttons to show, you can add a custom button, but you will also need to add property for that.
icon | `HTML/String` | _!_ | What icon to display, can me svg, text or img tag



## Adding custom buttons
```javascript
this.$alert({
  title: 'This is an test alert',
  message: 'I´m just testing',
  retry: { text: 'Retry', className: 'jb-dialog__button--action', action: () => { this.doRetry(); } },
  buttons: ['cancel', 'retry', 'ok'],
})
```

If any of the values is not present on the method call then the default values will be used.

All dialogs use the same code in the background, so all options are always available, the diffrent methods are just short hands. (Except for the prompt, that is the only one that supports the input.)

## Show an alert
```javascript
this.$alert({
  title: 'This is an test alert',
  message: 'I´m just testing'
})
```
## Show an confirm
```javascript
this.$confirm({
  title: 'Unsaved changes',
  message: 'You have made changes that are not yet saved, if you continue these will get lost.',
  question: 'Do you want to discard changes and continue?',
  state: 'critical',
  ok: {
    action: () => { this.$emit('close'); },
  },
});
```
## Show an prompt
```javascript
this.$prompt({
  title: 'Change name',
  message: 'Enter the new first name',
  placeholder: 'Enter first name',
  value: this.firstName,
  ok: {
    action: (value) => { this.firstName = value; }
  }
})
```
## Show an notification
```javascript
this.$alert({
  title: 'Name changed!',
  message: `Your name has successfully been changed to <strong>${this.firstName}</strong>`,
  state: 'success'
})
```

## Usage

main.js

```javascript
import Vue from 'vue'
import VueJackBox from 'vue-jackbox'
import App from './App'

Vue.use(VueJackBox)
```
## And import stylesheets manually:
```javascript
import 'vue-jackbox/dist/vue-jackbox.css';
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
</style>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)