// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
// First e akta function likhen tar upore akta empty array declare koren tarpor akta loop calaben loop er baire Return korben tarpor function call korben akta variable er moddhe rekhe parameter pathaben,  & finally console kore diben

function makeAvg(arr, size) {
    // Check if the array is not empty
    if (size === 0) {
        return 0;
    }

    // Calculate the sum of the array elements without using reduce
    let arraySum = 0;
    for (let i = 0; i < size; i++) {
        arraySum += arr[i];
    }

    // Calculate the average
    const average = arraySum / size;

    return average;
}

// Example usage:
const arrayOfIntegers = [2, 4, 6, 8, 10];
const arraySize = arrayOfIntegers.length;

const result = makeAvg(arrayOfIntegers, arraySize);
console.log("Average:", result);
