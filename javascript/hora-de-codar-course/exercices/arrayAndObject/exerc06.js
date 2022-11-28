const arr = ['João', 'Maria', 'Antônio', 'Margarida', 'Jonh', 'Mary', 'Antony', 'Margaret']
const arr2 = ['first', 'second', 'third', 'four']

function compareArray(arr) {
  if (arr.length >= 5) {
    return 'Muitos elementos'
  }
  return 'Poucos elementos'
}

console.log(compareArray(arr))
console.log(compareArray(arr2))