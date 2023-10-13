try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName // code that may throw an error
} catch (err) {
  console.error(err) // we can use console.log() or console.error() // code to be executed if an error occurs
} finally {
  console.log('In any case I will be executed') // code to be executed regardless of an error occurs or not
}

// |
// |
// |
// v

// ReferenceError: fistName is not defined
//     at <anonymous>:4:20
// In any case it  will be executed

// -------------------------------------------------

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}

// Name of the error ReferenceError
// Error message fistName is not defined
// In any case I will be executed
