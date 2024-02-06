// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
 
function calculateElectronicsBudget(num1, num2, num3) {
    const laptop = 35000 
const tablet = 15000 
const mobile = 20000 
const laptopPrize = laptop * num1
const tabletPrize = tablet * num2
const mobilePrize = mobile * num3
let totalPrize = laptopPrize + tabletPrize + mobilePrize
return totalPrize 
}
let total = calculateElectronicsBudget(0,2,1)
console.log("total money required" ,total);