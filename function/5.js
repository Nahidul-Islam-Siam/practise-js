// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
function odd_even(number) {
    // Check if the number is even
    if (number % 2 === 0) {
        return "Even";
    } else {
        // Number is odd
        return "Odd";
    }
}

// Example usage:
const testNumber = 7;
const result = odd_even(testNumber);
console.log(result);  // Output: Odd
