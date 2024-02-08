                //    ****************************************** task 05 done
function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr)){
        return "invalid input"
    }else if (typeof livingCost !== "number"){
        return "invalid input"
    }
    let totalIncome = 0
    let lessThan3000=0;
    let greaterThan3000=0;

    for(let i=0; i<arr.length;i++ ){
        if(arr[i] >= 3000){
            lessThan3000 = lessThan3000 +(arr[i]*((100-20)/100));
        }else{
            greaterThan3000 = greaterThan3000+arr[i];
        }
        
    }
    totalIncome=lessThan3000+greaterThan3000;
        let leftMoney = totalIncome-livingCost;

        if(leftMoney<0){
            return "earn more"
        }else{
            return leftMoney
        }
}


const earning= [1000 , 2000 , 2500] 
const livingCost= 5000 ;

result=monthlySavings(earning,livingCost)

console.log(result);

