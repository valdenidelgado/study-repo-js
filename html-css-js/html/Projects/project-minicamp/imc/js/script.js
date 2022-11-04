function start() {
    let btnCalcImc = document.querySelector('#button-calculate-imc')
    btnCalcImc.addEventListener('click', handleButtonClick)

    let inputWeight = document.querySelector('#input-weight')
    let inputHeight = document.querySelector('#input-height')

    inputWeight.addEventListener('input', handleButtonClick)
    inputHeight.addEventListener('input', handleButtonClick)

    handleButtonClick()
}

function calculateImc(weigh, height) {
 return weigh / (height * height)
}

function handleButtonClick(){
    let inputWeight = document.querySelector('#input-weight')
    let inputHeight = document.querySelector('#input-height')
    let imcResult = document.querySelector('#imc-result')

    let weigh = Number(inputWeight.value)
    let height = Number(inputHeight.value)
    
    let imc = calculateImc(weigh, height)
    let formattedImc = imc.toFixed(2)

    imcResult.textContent = imc;
}

start()