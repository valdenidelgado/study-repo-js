const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let line1 = lines.shift().split(' ');
let cod1 = parseInt(line1.shift())
let piece1 = parseInt(line1.shift())
let unitValue1 = Number(line1.shift())

let line2 = lines.shift().split(' ');
let cod2 = parseInt(line2.shift())
let piece2 = parseInt(line2.shift())
let unitValue2 = Number(line2.shift())

let totalValue = piece1 * unitValue1 + piece2 * unitValue2
console.log(cod1, piece1, unitValue1)
console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`)