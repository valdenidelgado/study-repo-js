const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let A = Number(lines.shift())
let B = Number(lines.shift())

let media = (A * 3.5 + B * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)