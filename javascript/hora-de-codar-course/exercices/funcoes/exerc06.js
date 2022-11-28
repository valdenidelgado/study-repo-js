function autoEscola(idade) {
  if (idade >= 18) {
      return 'Pode entrar na auto escola'
  } else {
      return 'Nao pode entrar na auto escola'
  }
}

console.log(autoEscola(18))
console.log(autoEscola(17))