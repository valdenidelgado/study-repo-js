function decrement(x) {
  if (x % 2 == 0) {
    console.log(x)
  }
  if (x > 0) {
    return decrement(x - 1)
  }
}

console.log(decrement(10));