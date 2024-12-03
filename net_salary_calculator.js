// Declarations
const prompt = require('prompt-sync')() 
let basicSalary = parseInt(prompt("Please input the basic salary: "))
let benefits = parseInt(prompt("Please input benefits: "))
let taxableIncome = basicSalary - benefits
let grossPay = basicSalary + benefits
let payee = 0
let NHIF = 0

// PAYEE
if (taxableIncome <= 24000){
    payee = 0.1 * taxableIncome
    console.log(`PAYEE: ${payee}`)
} else if (taxableIncome <= 32333){
    payee = 0.25 * taxableIncome
    console.log(`PAYEE: ${payee}`)
} else if (taxableIncome <= 500000){
    payee = 0.3 * taxableIncome
    console.log(`PAYEE: ${payee}`)
} else if (taxableIncome <= 800000){
    payee = 0.325 * taxableIncome
    console.log(`PAYEE: ${payee}`)
} else {
    payee = 0.35 * taxableIncome
    console.log(`PAYEE: ${payee}`)
}

//NHIF
if (grossPay <= 5999){
    NHIF = 150
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 7999){
    NHIF = 300
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 11999){
    NHIF = 400
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 14999){
    NHIF = 500
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 19999){
    NHIF = 600
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 24999){
    NHIF = 750
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 29999){
    NHIF = 850
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 34999){
    NHIF = 900
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 39999){
    NHIF = 950
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 44999){
    NHIF = 1000
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 49999){
    NHIF = 1100
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 59999){
    NHIF = 1200
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 69999){
    NHIF = 1300
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 79999){
    NHIF = 1400
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 89999){
    NHIF = 1500
    console.log(`NHIF Deductions: ${NHIF}`)
} else if (grossPay <= 99999){
    NHIF = 1600
    console.log(`NHIF Deductions: ${NHIF}`)
} else {
    NHIF = 1700
    console.log(`NHIF Deductions: ${NHIF}`)
}

// Gross Salary
console.log(`Gross Salary: ${grossPay}`)

// Net Salary
console.log(`Net Salary: ${taxableIncome}`)


