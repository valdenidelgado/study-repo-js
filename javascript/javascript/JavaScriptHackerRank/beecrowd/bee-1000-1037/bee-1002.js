const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const n = 3.14159

let r = Number(lines.shift())
let area = n * Math.pow(r, 2)
console.log(`A=${area.toFixed(4)}`)