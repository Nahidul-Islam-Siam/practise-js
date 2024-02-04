// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
function odd_even(integer) {
    if(num % 2 === 1){
        return "Odd"
    }else
    return "Even"
}
let num = 11
let result = odd_even(num)
console.log(result);