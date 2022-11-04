function vowelsAndConsonants(s) {
    let consonant = ''
    for (let i of s){
        if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
            console.log(i)
        }else{
            consonant += i
        }
    }
   
    for (let i of consonant){
        console.log(i)
        
    }
}

vowelsAndConsonants('javascriptloops')