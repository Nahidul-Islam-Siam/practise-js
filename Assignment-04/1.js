
function  calculateMoney(ticketSale) {
    let ticketPrice = 120
    let securityFee = 500
    let staff = 8
    let staffLunceFee = 50 
    let totalCoast = (ticketPrice * ticketSale) - (securityFee +(staff * staffLunceFee))
    if (ticketSale <=0) {
        return "please input positive Number"
    }
    return totalCoast
}
let arr = -10
let calculate = calculateMoney(arr)
console.log(calculate);







            


                            // */***************task 04 done */



// const passwordObj = { name: "Siam" , birthYear: 1999 , siteName: "amazon" }
// let pass = password(passwordObj)
// console.log(pass);

// *********************************************************************************************************

// *************************************************************************************************



// const earning= [1000 , 2000 , 2500] 
// const livingCost= 5000 ;

// result=monthlySavings(earning,livingCost)

// console.log(result);

// ********************************************************************************

// for (const payment of payments) {
//     if (payment > 3000) {
//       let actualMoney = payment - (payment * incomeTax) / 100;
//       totalEarn = totalEarn + actualMoney;
//     } else {
//       totalEarn = payment + totalEarn;
//     }
//   }