import { createModal, getDefaultProps } from './modal';
import './styles.css'

const VueJackBox = {
  install(Vue) {
    Vue.prototype.$confirm = function (userProps) {
      if(typeof userProps === 'undefined') {
        console.warn('VueJackBox - You need to add at least some properties');
        return;
      }
      const documentBody = document.body;
      if (!documentBody) return;

      const properties = getDefaultProps(userProps, { });
      const jackbox = createModal({...properties, type: 'confirm'});
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }

    Vue.prototype.$alert = function (userProps) {
      if(typeof userProps === 'undefined') {
        console.warn('VueJackBox - You need to add at least some properties');
        return;
      }
      const documentBody = document.body;
      if (!documentBody) return;

      const properties = getDefaultProps(userProps, { centerButtons: true, }, { ok: { text: 'OK' } });
      const jackbox = createModal({...properties, type: 'alert'});
      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }

    Vue.prototype.$prompt = function (userProps) {
      if(typeof userProps === 'undefined') {
        console.warn('VueJackBox - You need to add at least some properties');
        return;
      }
      const documentBody = document.body;
      if (!documentBody) return;

      const properties = getDefaultProps(userProps, { });
      const jackbox = createModal({...properties, type: 'prompt'});

      documentBody.appendChild(jackbox);

      setTimeout(() => {
        jackbox.classList.add('jackbox--show');
      }, 10)
    }

    Vue.prototype.$notification = function (userProps) {
      if(typeof userProps === 'undefined') {
        console.warn('VueJackBox - You need to add at least some properties');
        return;
      }
      const documentBody = document.body;
      if (!documentBody) return;
      
      const properties = getDefaultProps(userProps, {cancelOnBackdrop: true, duration: 2000 });
      const jackbox = createModal({...properties, type: 'notification'});

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