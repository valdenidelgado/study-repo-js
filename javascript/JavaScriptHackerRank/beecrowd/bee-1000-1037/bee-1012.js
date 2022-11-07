const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');
let lines1 = lines.shift().split(' ');

const PI = 3.14159

let A = Number(lines1.shift())
let B = Number(lines1.shift())
let C = Number(lines1.shift())

let triangle = A * C / 2
let circle = PI * Math.pow(C, 2)
let trapezoid = (A + B) * C / 2
let quadrado = B * B
let rectangle = A * B

console.log(`TRIANGULO: ${triangle.toFixed(3)}`)
console.log(`CIRCULO: ${circle.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezoid.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${rectangle.toFixed(3)}`)
