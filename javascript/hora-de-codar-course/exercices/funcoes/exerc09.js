function tamanhoText(text) {
  if (text.length > 10) {
    return "Texto grande"
  } else {
    return "Texto pequeno"
  }
}

console.log(tamanhoText("Texto"))
console.log(tamanhoText("Texto muito muito grande"))