function studentGradeGenerator(){
    const prompt = require('prompt-sync')() 
    let userInput = parseInt(prompt("Please input student marks:"))
    if(userInput >= 0 && userInput <=100){
        if(userInput > 79){
            console.log('A')
        } else if (userInput >= 60){
            console.log('B')
        } else if (userInput >= 50){
            console.log('C')
        } else if (userInput >= 40){
            console.log('D')
        } else {
            console.log('E')
        }
    } else {
        console.log("The input should be numbers between 0 and 100.")
    }
}