function password(obj) {
   
    if (
        !obj.hasOwnProperty("name") ||
        !obj.hasOwnProperty("birthYear") ||
        !obj.hasOwnProperty("siteName")
      ) {
        return "Invalid";
      }
  if (obj.birthYear.toString().length !== 4) {
    return "Invalid";
  }
        let upper = obj.siteName
        upper = upper.charAt(0).toUpperCase() + upper.slice(1);
      


            let passGenarate = upper +"#"+obj.birthYear+"@"+obj.name
            
        
    
    return passGenarate
    }
    const passwordObj = { name: "Siam" , birthYear: 1999 , siteName: "amazon" }
let pass = password(passwordObj)
console.log(pass);