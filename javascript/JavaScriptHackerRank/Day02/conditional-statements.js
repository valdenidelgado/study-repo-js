function getGrade(score) {
    let grade;
    // Write your code here
    if (score < 0 && score > 30){
        grade = 'Wrong score'
    }else if (score > 25){
        grade = 'A'
    }else if(score > 20){
        grade = 'B'
    }else if(score > 15){
        grade = 'C'
    }else if(score > 10){
        grade = 'D'
    }else if(score > 5){
        grade = 'E'
    }else if(score >= 0){
        grade = 'F'
    }
    
    return grade;
}

console.log(getGrade(11))