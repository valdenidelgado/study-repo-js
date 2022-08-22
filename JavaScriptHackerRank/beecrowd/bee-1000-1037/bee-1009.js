const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let name = lines.shift()
let fixSalary = Number(lines.shift())
let totalSelling = Number(lines.shift())

let percent = fixSalary + totalSelling * 0.15
console.log(`TOTAL = R$ ${percent.toFixed(2)}`)