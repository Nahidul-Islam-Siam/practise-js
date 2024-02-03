// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function myNum(num1){
    
    if(num1 % 2 === 1){
        return  num1 * 2
    }else 
    return num1 / 2
}
let result = myNum(9)
console.log(result);