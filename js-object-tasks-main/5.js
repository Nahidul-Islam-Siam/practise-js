// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };

// **Output:**

// <br>

//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean

const myObject = {
    name: "John",
    age: 30,
    city: "New York",
    isActive: true
  };
  
  for (let key in myObject) {
    const value = myObject[key];
    const type = typeof value;
    console.log(`${key}: ${value} | type: ${type}`);
  }
  
//const fullName2 = first.concat(' | ').concat(last)

// let i = 0;
// while(i <=10){
//     let value = i * 5
//     console.log(value)
//     i++
// }