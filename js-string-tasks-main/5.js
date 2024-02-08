// ### Task-5:
// Capitalize Every first Letter of each word in a String
const sentence = "Capitalize Every first Letter of each word in a String";
const rape = sentence.split(" ");
for (let i = 0; i < rape.length; i++) {
  rape[i] = rape[i][0].toUpperCase() + rape[i].substr(1);
}
let upperWord = rape.join(" ");
console.log(upperWord);
// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// let code = words.join(" ");
// console.log(code);
