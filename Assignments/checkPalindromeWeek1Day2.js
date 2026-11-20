function checkPalindrome(str)
 {
    let reversed = str.split('').reverse().join('');
   return str === reversed;
   
    }
// Test Cases
console.log( checkPalindrome("Earth"));   // output = false
console.log( checkPalindrome("level"));   // output = true
console.log(checkPalindrome("world"));   // output = false
console.log( checkPalindrome("MADAm"));   // output = false
console.log( checkPalindrome("MADAM"));   // output = false
