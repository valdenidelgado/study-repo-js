const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

let A = Number(lines.shift())
let B = Number(lines.shift())
let C = Number(lines.shift())

let media = (A * 2.0 + B * 3.0 + C * 5.0) / 10
console.log(`MEDIA = ${media.toFixed(1)}`)
