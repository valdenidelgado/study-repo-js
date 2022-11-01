const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let cedulas = parseInt(lines.shift())

let aux100 = parseInt(cedulas / 100)
console.log(`${aux100} nota(s) de R$ 100,00`)
let aux50 =
console.log(`${aux50} nota(s) de R$ 50,00`)
let aux20 = aux50 / 20
console.log(`${aux20} nota(s) de R$ 20,00`)
let aux10 = aux20 / 10
console.log(`${aux10} nota(s) de R$ 10,00`)
let aux5 = aux10 / 5
console.log(`${aux5} nota(s) de R$ 5,00`)
let aux2 = aux5 / 2
console.log(`${aux2} nota(s) de R$ 2,00`)
let aux1 = aux2 / 1
console.log(`${aux1} nota(s) de R$ 1,00`)