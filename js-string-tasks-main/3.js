// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

// ---
// function checkVowel(sentence){
//     let reg = /["a", "e", "i", "o", "u"]/gi;
//     let test = sentence.match(reg);
//     let char = test.length;
//     return char;
//     }
//     const a = "The quick fox jump over the lazy dog."
//     const result = checkVowel(a);
//     console.log("Number of the vowel is: ", result);

    // ******************************************Solved 2**************************
    // শেষের letter টা চেক করা আরো বেশি সহজ...
// আপনি একটা string কে array of character হিসাবে চিন্তা করতে পারেন, এবং সেই array টার last index এ last character থাকবে

    function vowelCount(str){
        let count=0;
        for(let arr of str){
            if(arr=='a'||arr=="e"||arr=="i"||arr=="o"||arr=="u"){
                count++;
            }
        }
        return count++;
    }
    
    const string="Siam";
    
    const str1=string.toLocaleLowerCase();
    
    const vowel=vowelCount(str1);
    
    console.log(vowel);