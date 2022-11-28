
// let contador = 1
let num = 42
let divisoes = 0

/*
while (contador <= num) {
  if (num % contador === 0) {
    divisoes++
  }
  contador++
}
*/

// with for

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisoes++
  }
}

if (divisoes === 2) {
  console.log(`${num} é primo`)
} else {
  console.log(`${num} não é primo`)
}

