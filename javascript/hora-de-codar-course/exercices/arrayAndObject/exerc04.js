let onibus = {
  rodas: 8,
  limitPassageiros: 40,
  portas: 2
}

console.log(onibus)

console.log(`O onibus tem ${onibus.rodas} rodas, ${onibus.limitPassageiros} passageiros e ${onibus.portas} portas.`)

onibus.windows = 10

console.log(onibus)

delete onibus.rodas

console.log(onibus)

console.log(onibus.windows)