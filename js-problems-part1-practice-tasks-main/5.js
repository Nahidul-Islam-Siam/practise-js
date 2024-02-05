// ### Task-5: 
// Generate a random number between 10 to 20.

function getRandNum(min,max){
    let x = Math.floor(Math.random() * (max-min + 1)+min)
    return x
}
console.log(getRandNum(10,20))