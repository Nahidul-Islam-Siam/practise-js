
// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// ```
// **Output:**

// <br>

//     4

// way No.1  ********************************************************
// let student = {
//          name: 'Ariana Grande',
//          age: 21,
//         city: 'Gaibandha',
//         isStudent: true
//     };

//     let count = 0
//     for(let properties in student){
//         count = count + 1
//     }
//     console.log(count)
    
    // way no 2. **************************************************
    let student = {
        name: 'Ariana Grande',
        age: 21,
       city: 'Gaibandha',
       isStudent: true
   };

   let count = Object.keys(student).length
   console.log(count)