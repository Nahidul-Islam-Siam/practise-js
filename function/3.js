// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(arr, length) {
    let sum = 0
    for(let i = 0; i<arr.length;i++){
sum = sum + arr[i]
    }
    // console.log(sum);
    let average = sum / arr.length
    // console.log(average);
    return average
}
let integers = [2, 4, 5, 8]
let size = integers.length
let average = make_avg(integers, size)
// console.log(avg);
console.log(average);

// *******************************************************************************

// function makeAvg(arr, size) {
//     // Check if the array is not empty
//     // if (size === 0) {
//     //     return 0;
//     // }

//     // Calculate the sum of the array elements without using reduce
//     let arraySum = 0;
//     for (let i = 0; i < size; i++) {
//         arraySum += arr[i];
//     }

//     // Calculate the average
//     const average = arraySum / size;

//     return average;
// }

// // Example usage:
// const arrayOfIntegers = [2, 4, 6, 8, 10];
// const arraySize = arrayOfIntegers.length;

// const result = makeAvg(arrayOfIntegers, arraySize);
// console.log("Average:", result);

// **********************************************************************************************
