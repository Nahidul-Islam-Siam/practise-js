// ### Task-1: 
// Count how many times a string has the letter `a`

                    //    ***** solved 1 ***************
// ************************************************************
// ---
// let string = " I haaaaaaaaate u"
// let match = string.match(/a/g).length

// console.log(match);
// *****************************************************************

// ***************** solved 2 ************************************
let string = "I haaaaaaaaate u"
let count = 0
for ( let i = 0; i<string.length;i++){
    if(string[i] === 'a'){
        count++
       
    }
    
}
console.log(count);
// *******************************************************************