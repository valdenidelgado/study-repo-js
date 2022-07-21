let obj = {
    receitas: [2.600, 3.600, 4.600],
    despesas: [1000, 500, 600]
};

function calc(obj) {
    let somaReceitas = 0;
    let somaDespesas = 0;
    let soma = 0;
    for (let i = 0; i < obj.receitas.length; i++) {
        somaReceitas += obj.receitas[i];
    }
    for (let i = 0; i < obj.despesas.length; i++) {
        somaDespesas += obj.despesas[i];
    }
    soma = somaReceitas - somaDespesas;
    return soma;
}

console.log(calc(obj));