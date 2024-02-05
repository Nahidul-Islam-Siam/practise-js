
// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**

// `'person working hard a am I'`
// person working hard a am I
// ---
// ******************reverse a string 1 *****************************
// const statement = 'I am a hard working person'
// let number = ''
// for(let i = statement.length - 1; i >= 0;i--){
//      number += statement[i]
    
   
// }
// console.log(number);
// **************************************************



// ******************reverse a string 2 *****************************
// Reverse a String With Built-In Functions
// For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.


// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

const statement = 'I am a hard working person'
var splitStr = statement.split(' ') 
// [ 'I', 'am', 'a', 'hard', 'working', 'person' ]
var reverseStr = splitStr.reverse()
// [ 'person', 'working', 'hard', 'a', 'am', 'I' ]
var joinStr = reverseStr.join(' ')
// person working hard a am I
console.log(joinStr);
// console.log(splitStr);
// console.log(reverseStr);