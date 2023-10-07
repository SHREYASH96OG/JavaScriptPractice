// 1.Function Declaretion
function sqr(n){
  console.log('Square of given number is :'n*n)
}
sqr(2) //4

// 2.Function Expression
const sqr = function(n){
  console.log(n*n)
}
sqr(8)//64

// 3.Anonymous Function
  const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
// 4.Self Invoking Functions
const sqr=(function(n){
  console.log('Square of given number is :'n*n)
}(10))//100

// 5.Arrow Function
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
