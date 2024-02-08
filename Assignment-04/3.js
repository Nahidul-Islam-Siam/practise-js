
function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid"
    }
    let count = []
    for (let i = name.length - 1; i >= 0; i--){
       count.push(name[i])       
    } 
    const joinName = count.join(' ')
    if (joinName[0].toLowerCase() == 'a' || joinName[0].toLowerCase() == 'y' || joinName[0].toLowerCase() == 'i' || joinName[0].toLowerCase() == 'e' || joinName[0].toLowerCase() == 'o' || joinName[0].toLowerCase() == 'u' || joinName[0].toLowerCase() == 'w' ) {
        return "Good name"
    }
    return "Bad name"
}
let string = "Siam" 
let check = checkName(string)
console.log(check);