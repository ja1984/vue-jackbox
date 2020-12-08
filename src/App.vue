<template>
  <div id="app">
    {{ val }}
    <button @click="confirm">Confirm</button>
    <button @click="alert">Alert</button>
    <button @click="alert2">Alert2</button>
    <button @click="notification">Notification</button>
    <button @click="prompt">Prompt</button>
    <button @click="toast">Toast</button>
    <select v-model="state">
      <option v-for="stateValue in states" :key="stateValue" :value="stateValue">
        {{ stateValue }}
      </option>
    </select>

    <div>
      <div>
        <label>
          <span class="label__text">Title</span>
          <input type="text" v-model="title">
        </label>
        <label>
          <span class="label__text">Message</span>
          <input type="text" v-model="message">
        </label>
        <label>
          <span class="label__text">Question</span>
          <input type="text" v-model="question">
        </label>
        <label>
          <span class="label__text">Ok button</span>
          <input type="text" v-model="ok">
        </label>
        <label>
          <span class="label__text">Cacen button</span>
          <input type="text" v-model="cancel">
        </label>
        <label>
          <span class="label__text">Placeholder</span>
          <input type="text" v-model="placeholder">
        </label>
        <label>
          <span class="label__text">Label</span>
          <input type="text" v-model="label">
        </label>
        <label><input type="checkbox" v-model="showIcon">Show icon</label>
        <label><input type="checkbox" v-model="showInput">Show input</label>
        <label><input type="checkbox" v-model="centerButtons">Center buttons</label>

        <button @click="testCustom">Try it</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      val: '',
      title: 'Title',
      message: 'Message',
      question: 'Question',
      placeholder: '',
      label: '',
      showIcon: true,
      ok: 'Continue',
      cancel: 'Cancel',
      state: 'information',
      showInput: false,
      centerButtons: false,
      states: ['critical', 'warning', 'information', 'success'],
    };
  },
  methods: {
    callback(value) {
      this.val = value;
    },
    testCustom() {
      this.$dialog({
        state: this.state,
        title: this.title,
        message: this.message,
        question: this.question,
        ok: { text: this.ok },
        cancel: { text: this.cancel },
        label: this.label,
        placeholder: this.placeholder,
        hideIcon: !this.showIcon,
        showInput: this.showInput,
        centerButtons: this.centerButtons,
      });
    },
    confirm() {
      this.$confirm(
        {
          title: 'Confirm',
          message: 'This is a confirm',
          question: 'Heeey!?',
          state: this.state,
        },
      );
    },
    alert() {
      this.$alert(
        {
          title: 'Alert',
          message: 'This is an alert',
          state: this.state,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check" style="display: block; width: 16px; height: auto;"><polyline points="20 6 9 17 4 12"></polyline></svg>',
        },
      );
    },
    alert2() {
      this.$alert(
        {
          title: 'Alert222',
          message: 'This is an alert',
          state: this.state,
          // test: { text: 'YESGA!', action: () => { alert('te'); } },
          retry: { text: 'Retry', className: 'jb-dialog__button--action', action: () => { this.doRetry(); } },
          buttons: ['cancel', 'retry', 'ok'],

        },
      );
    },
    notification() {
      this.$notification(
        {
          title: 'Notification',
          message: 'This is an notification',
          state: this.state,
        },
      );
    },
    prompt() {
      this.$prompt(
        {
          title: 'Prompt',
          message: 'This is an prompt',
          state: this.state,
          label: 'yesh',
          ok: {
            action: this.callback,
          },
          value: this.val,
        },
      );
    },
    toast() {
      this.$toast(
        {
          title: 'Toast',
          message: 'This is a toast',
          state: this.state,
        },
      );
    },
  },
  computed: {
    options() {
      return {
        state: this.state,
        title: this.title,
        message: this.message,
        question: this.question,
        ok: this.ok,
        cancel: this.cancel,
        label: this.label,
        placeholder: this.placeholder,
        showIcon: this.showIcon,
      };
    },
  },
};
</script>

<style>
.preview {
  background: #fff;
  width: 600px;
  height: 400px;
  position: relative;
}
</style>
