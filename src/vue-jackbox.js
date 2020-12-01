import { createModal } from './modal';
const defaultProps = {
  cancelOnBackdrop: false,
  cancelTimeout: -1,
  cancelOnEsc: true,
  inputLabel: '',
  inputPlaceholder: '',
  inputValue: '',
  centerButtons: false,
  cancelButtonText: 'Cancel',
  ctaButtonText: 'Continue',
  cancelCallback: null,
  ctaCallback: null,
}
const VueJackBox = {
  install(Vue) {
    Vue.prototype.$confirm = function (props) {
      const documentBody = document.body;
      if (!documentBody) return;

      const properties = { ...defaultProps, ...props, type: 'confirm' };
      const jackbox = createModal(properties);
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }

    Vue.prototype.$alert = function (props) {
      const documentBody = document.body;
      if (!documentBody) return;

      const jackbox = createModal({ ...defaultProps, ...props, type: 'alert', centerButtons: true, });
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }

    Vue.prototype.$prompt = function (props) {
      const documentBody = document.body;
      if (!documentBody) return;

      const jackbox = createModal({ ...defaultProps, ...props, type: 'prompt' });
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }

    Vue.prototype.$notification = function (props) {
      const documentBody = document.body;
      if (!documentBody) return;

      const jackbox = createModal({ ...defaultProps, ...props, type: 'notification', cancelOnBackdrop: true, cancelTimeout: 35000, });
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueJackBox);
}

export default VueJackBox;