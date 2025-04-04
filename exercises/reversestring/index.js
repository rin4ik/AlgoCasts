// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('')
} 
// second version with array loop
// function reverse (str) {
//     let reversed = ''
//     for (let character of str) {
//       reversed = character + reversed
//     }
//    return reversed 
//  }

// third version with reduce
// function reverse (str) {
//     return str.split('').reduce((reversed, character) => character + reversed, '')
// }
module.exports = reverse;
