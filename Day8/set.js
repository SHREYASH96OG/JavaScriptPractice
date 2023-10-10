const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// ----------------------------------------------
const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

// ----------------------------------------------
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

companies.clear()
console.log(companies)
