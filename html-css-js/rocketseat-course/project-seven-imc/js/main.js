const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.add('open');
  },
  close() {
    AlertError.element.classList.remove('open');
  }
}

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.open();
    return
  }

  AlertError.close();
  
  const result = imc(weight, height);
  const message = `Seu IMC é ${result}.`;

  Modal.message.innerText = message;
  Modal.open();
}

Modal.buttonClose.onclick = () => Modal.close();

function imc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

windows.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    Modal.close();
  }
})

function notNumber(value) {
  return isNaN(value) || value === '';
}
