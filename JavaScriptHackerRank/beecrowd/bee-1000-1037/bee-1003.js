const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
console.log(`SOMA = ${A + B}`)