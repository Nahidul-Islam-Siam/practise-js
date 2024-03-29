// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
// `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

// **Output:**

// `'TomTimTinTik'`

// ---

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let stringWithoutSpaces = numbers.replace(/\s/g, '');
console.log(stringWithoutSpaces); // Output: "Hello,World!"