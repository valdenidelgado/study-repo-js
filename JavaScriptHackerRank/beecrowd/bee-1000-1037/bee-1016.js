const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let X = parseInt(lines.shift())

let min = X * 2

console.log(min, 'minutos')