const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())
console.log(`X = ${a + b}`)