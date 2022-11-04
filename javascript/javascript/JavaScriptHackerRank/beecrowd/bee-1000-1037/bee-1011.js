const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
const PI = 3.14159

let r = Number(lines.shift())

let volume = 4 / 3.0 * PI * Math.pow(r, 3)

console.log(`VOLUME = ${volume.toFixed(3)}`)