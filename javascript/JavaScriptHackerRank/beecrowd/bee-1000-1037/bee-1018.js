const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let cedulas = parseInt(lines.shift())

// contagem de cedulas 


console.log(cedulas)


let aux = cedulas / 100
console.log(`${aux} nota(s) de R$ 100,00`)
aux = cedulas % 100
console.log(`${parseInt(aux / 50)} nota(s) de R$ 50,00`)
aux = cedulas % 50
console.log(`${parseInt(aux / 20)} nota(s) de R$ 20,00`)
aux = cedulas % 20
console.log(`${parseInt(aux / 10)} nota(s) de R$ 10,00`)
aux = cedulas % 10
console.log(`${parseInt(aux / 5)} nota(s) de R$ 5,00`)
aux = cedulas % 5
console.log(`${parseInt(aux / 2)} nota(s) de R$ 2,00`)
aux = cedulas % 2
console.log(`${parseInt(aux / 1)} nota(s) de R$ 1,00`)