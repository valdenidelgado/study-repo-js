const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let number = parseInt(lines.shift())
let hour = parseInt(lines.shift())
let valuePerHour = Number(lines.shift())

let salary = hour * valuePerHour
console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)