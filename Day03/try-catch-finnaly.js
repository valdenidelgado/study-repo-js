function reverseString(s) {

    try{
        let reverse = s.split('').reverse().join('')
        console.log(reverse)
    }catch(e){
         console.log('s.split is not a function')
         console.log(s)
    }
    
}

reverseString(123)