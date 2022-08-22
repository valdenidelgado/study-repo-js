const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let X = parseInt(lines.shift())
let Y = Number(lines.shift())

let total = X / Y

console.log(`${total.toFixed(3)} km/l`)
