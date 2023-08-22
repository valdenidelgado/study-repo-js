const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const randomNumber = Math.round(Math.random() * 10);
let xAttempt = 1;

function handleTryClick(event) {
  event.preventDefault(); 
  const inputNumber = document.querySelector('#inputNumber');

  console.log('randomNumber', randomNumber);

  if (Number(inputNumber.value) === randomNumber) {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');

    document.querySelector('.screen2 h2').innerText = `You won in ${xAttempt} attempts!`;
  }

  inputNumber.value = '';
  xAttempt++;
}

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', () => {
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
    xAttempt = 1;
})