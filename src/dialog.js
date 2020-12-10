const createButton = (props, buttonName, input, close) => {
  const buttonProps = props[buttonName];
  if (!buttonProps) {
    console.warn(`VueJackBox - No button props found for button ${buttonName}`);
    return null;
  }
  const button = document.createElement('button');
  button.classList.add('jb-dialog__button');
  if (buttonProps.className) {
    button.classList.add(buttonProps.className);
  }

  button.innerHTML = buttonProps.text;
  if (buttonProps.action) {
    button.addEventListener('click', !props.showInput ? buttonProps.action : () => {
      buttonProps.action(input.value);
    }, { once: true });
  }
  button.addEventListener('click', close, { once: true });
  return button;
};

const createDialog = (props) => {
  const documentBody = document.body;
  if (!documentBody) return;

  documentBody.classList.add('jb-dialog-open');

  const state = props.state;
  const type = props.type;
  const addFooter = props.showFooter;

  const jackbox = document.createElement('div');
  jackbox.classList.add('jackbox');

  if (props.darkTheme) {
    jackbox.classList.add('jackbox--dark-theme');
  }

  if (!props.showBackdrop) {
    jackbox.classList.add('jackbox--no-backdrop');
  }
  const backdrop = document.createElement('div');
  backdrop.className = 'jackbox__backdrop';

  const inputWrapper = document.createElement('div');
  const input = document.createElement('input');

  let closing = false;
  const close = () => {
    if (!closing) {
      closing = true;
      jackbox.classList.remove('jackbox--show');
      setTimeout(() => {
        documentBody.removeChild(jackbox);
        documentBody.classList.remove('jb-dialog-open');
      }, 300);
    }
  };

  const dialog = document.createElement('div');
  dialog.className = 'jb-dialog';
  dialog.className += ` jb-dialog--${state}`;

  if (type === 'toast') {
    dialog.className += ' jb-dialog--toast';
  }

  const body = document.createElement('div');
  body.className = 'jb-dialog__body';

  const content = document.createElement('section');
  content.className = 'jb-dialog__content';

  const icon = document.createElement('aside');
  icon.className = 'jb-dialog__icon';

  icon.innerHTML = `<div class="jb-dialog__box__outline">
      <i class="jb-dialog__box__icon__image">
      ${props.icon}
      </div>`;
  const footer = document.createElement('div');
  if (addFooter) {
    footer.className = 'jb-dialog__footer';

    if (props.centerButtons) {
      footer.className += ' jb-dialog__footer--center';
    }
    props.buttons.forEach((name) => {
      const button = createButton(props, name, input, close, type);
      if (button) {
        footer.appendChild(button);
      }
    });
  }

  const title = document.createElement('div');
  title.className = 'jb-dialog__title';

  const text = document.createElement('div');
  text.className = 'jb-dialog__text';

  const question = document.createElement('div');
  question.className = 'jb-dialog__question';

  title.innerHTML = props.title;
  text.innerHTML = props.message;

  if (props.showInput) {
    inputWrapper.className = 'jb-dialog__input__wrapper';

    input.placeholder = props.placeholder;
    input.value = props.value;
    input.className = 'jb-dialog__input';

    if (props.label.length > 0) {
      const label = document.createElement('label');
      label.className = 'jb-dialog__input__label';
      const labelText = document.createElement('span');
      labelText.innerHTML = props.label;
      label.appendChild(labelText);
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

  content.appendChild(title);
  content.appendChild(text);

  if (props.question) {
    question.innerHTML = props.question;
    content.appendChild(question);
  }

  if (!props.hideIcon) {
    body.appendChild(icon);
  }
  body.appendChild(content);
  dialog.appendChild(body);

  if (addFooter) {
    dialog.appendChild(footer);
  }

  if (props.showBackdrop) {
    jackbox.appendChild(backdrop);
  }
  jackbox.appendChild(dialog);

  if (props.duration > -1) {
    setTimeout(() => {
      close();
    }, props.duration);
  }

  if (props.cancelOnBackdrop) {
    backdrop.addEventListener('click', close, { once: true });
  }

  return jackbox; //eslint-disable-line
};

const globalProps = {
  cancelOnBackdrop: false,
  showBackdrop: true,
  duration: -1,
  cancelOnEsc: true,
  title: '',
  message: '',
  label: '',
  question: '',
  placeholder: '',
  value: '',
  state: 'information',
  type: 'alert',
  centerButtons: false,
  hideIcon: false,
  showInput: false,
  showFooter: true,
  darkTheme: false,
  icon: '!',
  ok: {
    text: 'Continue',
    className: 'jb-dialog__button--action',
  },
  cancel: {
    text: 'Cancel',
  },
  buttons: ['cancel', 'ok'],
};

const getDefaultProps = (userProps, dialogProps) => {
  const global = { ...globalProps };

  const returnObject = {
    ...globalProps, ...dialogProps, ...userProps,
  };

  const buttons = userProps.buttons || dialogProps.buttons || global.buttons;

  buttons.forEach((button) => {
    const buttonProps = { ...global[button], ...(dialogProps[button] || {}), ...(userProps[button] || {}) };
    if (Object.keys(buttonProps).length === 0) {
      console.warn(`VueJackBox - Missing properties for button: ${button}`);
    }
    returnObject[button] = buttonProps;
  });

  return returnObject;
};

export { createDialog, getDefaultProps };
