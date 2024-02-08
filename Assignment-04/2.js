function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }


    const put =[]
    for (const val of array) {
        if (typeof val == "number" && !isNaN(put)) {
            put.push(val)
        }
    }
    
    return put
    }
    let arr = [10,-21,undefined, null]
    console.log(deleteInvalids(arr));