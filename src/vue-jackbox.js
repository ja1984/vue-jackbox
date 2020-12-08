/* eslint-disable */
import { createDialog, getDefaultProps } from './dialog';
import './styles.css';

const VueJackBox = {
  install(Vue) {
    Vue.prototype.$dialog = function (userProps, dialogProps) {
      if (typeof userProps === 'undefined') {
        console.warn('VueJackBox - You need to add at least some properties');
        return;
      }
      const documentBody = document.body;
      if (!documentBody) return;

      const properties = getDefaultProps(userProps, (dialogProps || {}));
      const jackbox = createDialog({ ...properties });
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10);
    };
    Vue.prototype.$confirm = function (userProps) {
      this.$dialog(userProps, { ok: { text: 'Confirm', }, type: 'confirm' });
    };

    Vue.prototype.$alert = function (userProps) {
      this.$dialog(userProps, { centerButtons: true, ok: { text: 'OK' }, buttons: ['ok'], type: 'alert' });
    };

    Vue.prototype.$prompt = function (userProps) {
      this.$dialog(userProps, { showInput: true, type: 'prompt' });
    };

    Vue.prototype.$notification = function (userProps) {
      this.$dialog(userProps, { cancelOnBackdrop: true, duration: 2000, showFooter: false, type: 'notification' });
    };

    Vue.prototype.$toast = function (userProps) {
      this.$dialog(userProps, { showBackdrop: false, showFooter: false, type: 'toast' });
    };
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueJackBox);
}

export default VueJackBox;
