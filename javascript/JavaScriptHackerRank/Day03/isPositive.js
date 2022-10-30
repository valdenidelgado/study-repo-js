function isPositive(a) {
    if(a > 0){
        return 'YES'
    }else if(a === 0){
        throw Error('Zero Error')
    }else{
        throw Error('Negative Error')
    }
}

let numbers = [1,0, 3, -4, 0]

for (let i = 0; i < 5; i++) {
    try {
        console.log(isPositive(numbers[i]));
    } catch (e) {
        console.log(e.message);
    }
}
