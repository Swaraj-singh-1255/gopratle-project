// 001. Check whether a given number is even or odd

// function evenOrOdd(num) {
//     if (num % 2 !== 0) {
//         return "Odd";
//     } else {
//         return "Even";
//     }
// }
// console.log(evenOrOdd(20)); // Output: Even


// 002. Find the sum of digits of a number
// function sumDigite(num){
//     let sum = 0
//     while(num > 0){
//         sum = sum + num % 10;
//         num = Math.floor(num/10)
//     } 
//     return sum
// }
// console.log(sumDigite(12345))  //Output: 15


// 003. Reverse the digits of an integer
// function reversenumber(num, reverse){
//     reverse = 0
//     while(num !== 0){
//         let lastDigit = num %10;
//         reverse =reverse * 10 + lastDigit
//         num = Math.floor(num /= 10)
//     }
//     return reverse;
// }
// console.log(reversenumber(12345)) //Output: 12345


// 004. Check whether a number is a palindrome
// function Palindrom(num, str){
//     str =String(num)
//     reverse = str.split("").reverse().join('');
//     let isPlindrom = str === reverse;
//     return isPlindrom
// }
// console.log(Palindrom(65732)) //Output: false, input: 12321 Output: true


// 005. Find the factorial of a number using a loop
// function factroial(num, result){
//     result = 1;
//     for(let i = 1; i <= num; i++){
//         result *= i;
//     }
//     return result
// } 
// console.log(factroial(5))