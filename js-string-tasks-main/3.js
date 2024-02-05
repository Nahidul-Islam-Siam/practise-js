// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

// ---
function checkVowel(sentence){
    let reg = /["a", "e", "i", "o", "u"]/gi;
    let test = sentence.match(reg);
    let char = test.length;
    return char;
    }
    const a = "The quick fox jump over the lazy dog."
    const result = checkVowel(a);
    console.log("Number of the vowel is: ", result);

    // ******************************************Solved 2**************************
    