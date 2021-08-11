// to import 1 value in my file from this file 

// const name1 = 'amira'
 
// module.exports = name1





//  function myfunction( a,b){
//     return( sum = a+b )
//  }

//  module.exports = myfunction

var myfunction =(a,b)=>{
    return a+b
}
module.exports = myfunction


// ازاى اعمل import for many  value

 const name1 = 'amira'

 const name2 = 'hamza'
 
 var sum =(a,b)=>{
    return a+b
}


 
 module.exports = {
     name:name1,
     name2,  //shorthand
     sum
 }
