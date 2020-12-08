import Vue from 'vue';
import App from './App.vue';

import VueJackBox from './vue-jackbox';

Vue.use(VueJackBox);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
