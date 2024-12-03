const prompt = require('prompt-sync')() 
let speed = parseInt(prompt("Please input the speed of the car: ")) // User Input

// Checking Speed
if (speed < 70){
    console.log("Ok")
} else if (speed > 70){
    let diff = speed - 70
    let point =  parseInt(diff / 5)
    console.log(`Points: ${point}`)
    if (point > 12){
        console.log("License suspended")
    }
}

