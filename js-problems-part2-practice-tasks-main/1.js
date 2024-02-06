// ### Task -1:
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

// ---
// ************************ solve 1 ******************************
// const heights2 = [167, 190, 120, 165, 137];
// let lowestNum = Math.min(...heights2)
// console.log("The lowest num is " ,lowestNum);

// **************************************************************

// ************************ solve 2 ******************************

const heights2 = [167, 190, 120, 165, 137];

function lowestNum(number) {
  let min = number[0];
  for (let num of number) {
    if (num < min) {
      min = num;
    }
  }
  return min
}

let low = lowestNum(heights2);
console.log(low);
