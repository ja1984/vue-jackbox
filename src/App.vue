<template>
  <div id="app">

    <button @click="confirm('critical')">Critical</button>
    <button @click="confirm('information')">Information</button>
    <button @click="confirm('success')">Success</button>
    <button @click="confirm('warning')">Warning</button>
    <button @click="alert('warning')">Alert</button>
    <button @click="done()">Donr</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    confirm(state) {
      this.$confirm(
        {
          title: 'Deactive account',
          message: 'Are you sure you want to deactivate your acocunt? By doing this you will lose all of your saved data and will not be able to retrive it.',
          cta: this.hej,
          state
        });
    },
    alert(state) {
      this.$alert(
        {
          title: 'Deactive account',
          message: 'Are you sure you want to deactivate your acocunt? By doing this you will lose all of your saved data and will not be able to retrive it.',
          cta: this.hej,
          state
        });
    },
    done() {
      this.$notification(
        {
          title: 'Success! 😂',
          message: 'We have succesfully added <strong>Acti ity 57</strong> to your acocunt!',
          state: 'success'
        });
    },
  }
}
</script>

<style>

</style>
