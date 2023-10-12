// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
// ----------------------------------------
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result) //true
 // ----------------------------------------------
const pattern = /\d/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
---------------------------------------------------------
  const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches) //["Apple", "banana", "apple", "banana", "Banana"]
// -----------------------------------------------------------
const pattern = /[a]./g  // this square bracket means a and . means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]
