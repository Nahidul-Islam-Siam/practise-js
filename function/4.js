
// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
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
