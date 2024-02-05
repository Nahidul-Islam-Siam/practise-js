// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---

// ********************** Using for loop ******************************
let reverse = []
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
for(let i=colors.length-1;i>=0;i--){
    const valueIndex = colors[i]
    reverse.push(valueIndex)
}
console.log(reverse);
 
// *********************************************************************