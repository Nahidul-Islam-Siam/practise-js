// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },500
// ];

// function findAveragePhonePrice(phones){
//     let price=0;
//     const number=phones.length;
//     for(let phone of phones){
//         price=price+phone.price;
//     }
//     let avg=price/number;
//     return avg;  
// }

//  let avg=findAveragePhonePrice(phones)


// ### Task-4:

// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

// **Input**

// <br>

//         const phones = [
//             { model: "PhoneA", brand: "Iphone", price: 95000 },
//             { model: "PhoneB", brand: "Samsung", price: 40000 },
//             { model: "PhoneC", brand: "Oppo", price: 26000 },
//             { model: "PhoneD", brand: "Nokia", price: 35000 },
//             { model: "PhoneE", brand: "Iphone", price: 105000 },
//             { model: "PhoneF", brand: "HTC", price: 48000 },
//         ];

// ---

// Avg =0
// Price=0
// Number=phones.length
//  niye 
// Loop chaliye 
// Price=price+phones.price korben  
// Loop er baire avg=price/number niben 

// Then avg return
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(phone) {
    let price = 0
    let number = phone.length
    for(let phn of phone){
        price = price + phn.price
        
    }
    avg = price / number
    let avPrize = avg.toFixed(2)
    return parseFloat(avPrize)
    // console.log(price, number, avg);
}

let average = findAveragePhonePrice(phones);
console.log("average price of phone", average);
