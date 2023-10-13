let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName                   //Reference Error
console.log(fullName)
// Uncaught ReferenceError: lastName is not defined
    // at <anonymous>:2:35
---------------------------------------------------------------------------------------------------------------------------
let square = 2 x 2
console.log(square)                                 //SyntaxError
console.log('Hello, world")
// Uncaught SyntaxError: Unexpected identifier
------------------------------------------------------------------------------------------------------------------------------
let num = 10
console.log(num.toLowerCase())                      //Type Error
// Uncaught TypeError: num.toLowerCase is not a function
//     at <anonymous>:2:17
