
// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(bin) {
    let zeroCount = 0
    for (let i = 0; i < bin.length; i++) {
        if (bin[i]=="0") {
             zeroCount ++
        }
        
    }
    return zeroCount
//    console.log(zeroCount);
 
    // let countSize = bin.length
    // console.log(countSize);
}
let binary = "1000000101100000"
let zeroCount = count_zero(binary)
console.log(zeroCount);
