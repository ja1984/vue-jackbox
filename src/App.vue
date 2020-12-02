<template>
  <div id="app">
    {{ val }}
    <button @click="confirm">Confirm</button>
    <button @click="alert">Alert</button>
    <button @click="notification">Notification</button>
    <button @click="prompt">Prompt</button>
    <select v-model="state">
      <option v-for="stateValue in states" :key="stateValue" :value="stateValue">
        {{ stateValue }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      val: '',
      state: 'information',
      states: ['critical', 'warning', 'information', 'success']
    };
  },
  methods: {
    callback(value) {
      this.val = value;
    },
    test() {
      console.log('äTEst');
    },
    confirm() {
      this.$confirm(
        {
          title: 'Confirm',
          message: 'This is a confirm',
          state: this.state,
        });
    },
    alert() {
      this.$alert(
        {
          title: 'Alert',
          message: 'This is an alert',
          state: this.state,
        });
    },
    notification() {
      this.$notification(
        {
          title: 'Notification',
          message: 'This is an notification',
          state: this.state,
        });
    },
    prompt() {
      this.$prompt(
        {
          title: 'Prompt',
          message: 'This is an prompt',
          state: this.state,
          ok: {
            text: 'Confirm',
            action: this.callback,
          },
          value: this.val
        });
    },
  }
}
</script>

<style>

</style>
