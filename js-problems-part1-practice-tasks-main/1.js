// ## Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.
function temperature(Celsius){
    let fahrenheit = (Celsius * 9/5) + 32
    return fahrenheit
}
let num = 32
let fahrenheit = temperature(num)
console.log("Fahrenheit temperature is", fahrenheit);