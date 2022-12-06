class carMarket {
  constructor(item, qtdTotal, valueTotal) {
    this.item = item
    this.qtdTotal = qtdTotal
    this.valueTotal = valueTotal
  }

  adicionarItem(item, qtd, value) {
    this.item = item
    this.qtdTotal += qtd
    this.valueTotal += value
  }

  removerItem(item, qtd, value) {
    this.item = item
    this.qtdTotal -= qtd
    this.valueTotal -= value
  }
}

const mercado = new carMarket('carro', 10, 10)

mercado.adicionarItem('feijao', 10, 103.5)

console.log(mercado)