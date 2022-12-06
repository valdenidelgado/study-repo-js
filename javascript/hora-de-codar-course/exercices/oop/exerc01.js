class Bank {
  constructor(saldo) {
    this.saldo = saldo
  }

  depositar(valor) {
    this.saldo += valor
  }

  sacar(valor) {
    this.saldo -= valor
  }
}

const banco = new Bank(1000)

banco.depositar(100)

console.log(banco.saldo)

banco.sacar(200)

console.log(banco.saldo)