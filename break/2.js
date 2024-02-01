/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let num = 1;
// let sum = 0;
// while (num <= 100){
//     sum = sum + num
//     if(sum = 100){
//         break
//     }
//     num++
// }
// console.log(sum)
let sum = 0
for(let num = 0; num <= 100; num++){
    sum = sum + num
    if(sum == 100){
        break
    }
}
console.log(sum)
