/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let squre;
for (let i = 1; i <= 200;i++){
squre = i*i
    console.log(squre)
    if(squre >= 100){
        break
    }
}