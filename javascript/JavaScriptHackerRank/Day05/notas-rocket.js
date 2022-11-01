function notas(nota) {
  if (nota >= 0 && nota < 60) {
    return 'F';
  } else if (nota > 60 && nota < 69) {
    return 'D';
  } else if (nota > 69 && nota < 79) {
    return 'C';
  } else if (nota > 79 && nota < 89) {
    return 'B';
  } else if (nota > 89 && nota <= 100) {
    return 'A';
  } else {
    return 'Nota inválida';
  }
}


console.log(notas(60));
console.log(notas(70));
console.log(notas(80));
console.log(notas(90));
console.log(notas(100));
console.log(notas(50));
console.log(notas(-2));
console.log(notas(200));