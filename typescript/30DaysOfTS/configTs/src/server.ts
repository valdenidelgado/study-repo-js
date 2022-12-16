const name: string = 'Valdeni'
let lastName: string = "Delgado"

function sayHello(name: string, lastName: string): void {
    console.log(`Hello ${name} ${lastName}`)
}

function sum(a:number, b:number): number {
    return a + b
}

sayHello(name, lastName)


console.log(`A soma de 2 + 2 é: ${sum(2,2)}`);

