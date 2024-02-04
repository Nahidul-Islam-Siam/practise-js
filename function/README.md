# Simple function Related Practice Tasks

### Task-1  
Take four parameters. Multiply the four numbers and then return the result 

---

### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

---

### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

---

### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

---

### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

*******************************************************************************
### Task-1  
Take four parameters. Multiply the four numbers and then return the result 
*********************************************************************************

ans from chatgpt
****************************************************************

***********************************************************************
// First e akta function likhen tar upore akta empty array declare koren tarpor akta loop calaben loop er baire Return korben tarpor function call korben akta variable er moddhe rekhe parameter pathaben,  & finally console kore diben *****************Sabbir vai from fb

     *************comment from sabbir vai
 
*****************************************************************************************************

*****************************************************************************************************

function count_zero(binaryString) {
    // Initialize a counter for zeros
    let zeroCount = 0;

    // Iterate through each character in the string
    for (let i = 0; i < binaryString.length; i++) {
        // Check if the character is '0'
        if (binaryString[i] === '0') {
            zeroCount++;
        }
    }

    return zeroCount;
}

// Example usage:
const binaryString = "1101001010010101001010110";
const result = count_zero(binaryString);
console.log("Number of 0's:", result);

******************************************************************************************************

*****************************************************************************************************