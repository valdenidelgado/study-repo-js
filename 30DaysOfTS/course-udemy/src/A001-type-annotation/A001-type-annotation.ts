/* eslint-disable */
let nome: string = 'João' // qualquer tipo de strings: '' ou "", `${}`
let idade: number = 20 // 1, 1.234, 1.234.567, -5.55, -0xf00d
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('simbolo') // symbol
// let big = bigint = 10n // bigint


// Arrays
// Outra maneira de declarar um array: let arrayDeNumeros: number[] = [1, 2, 3, 4, 5] // Array
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5] // Array<number> = [1, 2, 3, 4, 5]
let arrayDeStrings: Array<string> = ['João', 'Maria', 'Pedro'] // Array<string> = ['João', 'Maria', 'Pedro']

// Objects
// Quando tem ? no final do tipo, é opcional
let pessoa: { nome: string, idade: number, adulto?: boolean } = { nome: 'João', idade: 20 } // Objects

// function

function soma(a: number, b: number): number {
    return a + b
}

// Colocando funções na variável e com os tipos, ainda sem o alias
let soma2: (a: number, b: number) => number = (a, b) => a + b