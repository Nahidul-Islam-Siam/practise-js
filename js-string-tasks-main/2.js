// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

// ---
// ****************************************************************
// **********************solved 1 ******************************
// let string = "A litle boy named Siam, Who is loved a Woman name Jasmin"
// let count = 0

// for(let i = 0; i < string.length; i++){
//     if(string[i] === 'a' || string[i] === 'A'){
//         count++
//     }
// }
// console.log(count);
// ****************************************************************

// *******************solved 2 ********************************************
// let string = "A litle boy named Siam, Who is loved a Woman name Jasmin"
// let count = 0

// for(let i = 0; i < string.length; i++){
//     if(string[i].toLowerCase() === 'a'){
//         count++
//     }
// }
// console.log(count);

// ***********************************************************************

// ***************** solved 3 ********************************************
let string = "A litle boy named Siam, Who is loved a Woman name Jasmin"

let count = string.match(/a/gi).length
console.log(count);