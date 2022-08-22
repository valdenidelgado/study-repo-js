const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
let lines1 = lines.shift().split(' ')

let a = parseInt(lines1.shift())
let b = parseInt(lines1.shift())
let c = parseInt(lines1.shift())

let maiorAB = (a + b + Math.abs(a-b)) / 2
let maior = (maiorAB + c + Math.abs(maiorAB-c)) / 2

console.log(`${maior} eh o maior`)
