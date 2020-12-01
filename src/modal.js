const createModal = (props) => {
  const documentBody = document.body;
  if (!documentBody) return;

  documentBody.classList.add('modal-open');

  const state = props.state || 'information';
  const type = props.type || 'alert';
  const addFooter = type !== 'notification';

  const jackbox = document.createElement("div")
  jackbox.classList.add('jackbox')
  const backdrop = document.createElement("div");
  backdrop.className = "jackbox__backdrop";

  let closing = false;
  const close = () => {
    if (closing) return;
    closing = true;
    jackbox.classList.remove('jackbox--show');
    setTimeout(() => {
      documentBody.removeChild(jackbox);
      documentBody.classList.remove('modal-open');
    }, 300);
  }

  const modal = document.createElement('div');
  modal.className = "jb-modal"
  modal.className += ` jb-modal--${state}`

  const body = document.createElement('div');
  body.className = "jb-modal__body"

  const content = document.createElement('section');
  content.className = "jb-modal__content";

  const icon = document.createElement('aside');
  icon.className = "jb-modal__icon";

  icon.innerHTML = `<div class="box__outline">
      <i class="box__icon__image">
      !
      </div>`
  const footer = document.createElement('div');
  if (addFooter) {
    footer.className = "jb-modal__footer"
    
    if(props.centerButtons) {
      footer.className += ' jb-modal__footer--center'
    }

    const cancelButton = document.createElement('button')
    cancelButton.className = "button button--cancel";
    cancelButton.innerText = props.cancelButtonText
    if(props.cancelCallback) {
      cancelButton.addEventListener('click', props.cancelCallback, { once: true });
    }
    cancelButton.addEventListener('click', close, { once: true });

    const cta = document.createElement('button')
    cta.className = "button button--action";
    cta.innerHTML = props.ctaButtonText
    if(cta.ctaCallback) {
      cta.addEventListener('click', props.ctaCallback, { once: true });
    }
    cta.addEventListener('click', close, { once: true });

    if (addFooter) {
      if(type !== 'alert') {
        footer.appendChild(cancelButton);
      }
      footer.appendChild(cta);
    }
  }

  const title = document.createElement('div');
  title.className = "jb-modal__title"

  const text = document.createElement('div');
  text.className = "jb-modal__text";

  title.innerText = props.title;
  text.innerHTML = props.text;

  if (type === 'prompt') {
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'jb-modal__input__wrapper';
    const input = document.createElement('input');
    input.placeholder = props.inputPlaceholder;
    input.value = props.inputValue,
    input.className = "jb-modal__input"

    if(props.inputLabel.length > 0) {
      const label = document.createElement("label");
      label.className = "jb-modal__input__label"
      const labelText = document.createElement("span");
      labelText.innerText = props.inputLabel;
      label.appendChild(labelText)
      label.appendChild(input);
      inputWrapper.appendChild(label);
    } else {
      inputWrapper.appendChild(input);
    }

    
    text.appendChild(inputWrapper);
  }

  if (props.cancelOnEsc) {
    window.addEventListener('keyup', (event) => {
      const key = event.key || event.keyCode;
      if (key === 27 || key === 'Escape') {
        jackbox.classList.remove('jackbox--show');
        setTimeout(close, 300);
      }
    }, { once: true });
  }



  content.appendChild(title)
  content.appendChild(text);
  body.appendChild(icon);
  body.appendChild(content);
  modal.appendChild(body);

  if (addFooter) {
    modal.appendChild(footer);
  }


  jackbox.appendChild(backdrop);
  jackbox.appendChild(modal);

  if (props.cancelTimeout > -1) {
    setTimeout(() => {
      close();
    }, props.cancelTimeout);
  }

  if (props.cancelOnBackdrop) {
    backdrop.addEventListener('click', close, { once: true });
  }

  return jackbox;
};



export { createModal };
