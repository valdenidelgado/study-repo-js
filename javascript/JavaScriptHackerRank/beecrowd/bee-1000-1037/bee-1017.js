const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let hour = parseInt(lines.shift());
let km = parseInt(lines.shift())

let total = hour * km / 12

console.log(total.toFixed(3))