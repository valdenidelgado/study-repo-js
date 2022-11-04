const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
let lines1 = lines.shift().split(' ')
let lines2 = lines.shift().split(' ')

let x1 = Number(lines1.shift())
let x2 = Number(lines2.shift())
let y1 = Number(lines1.shift())
let y2 = Number(lines2.shift())

let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log (result.toFixed(4))
