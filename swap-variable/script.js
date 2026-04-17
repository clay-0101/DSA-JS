//1.) SWAPING USING EXTRA VARIABLE
// let a = 4
// let b = 12

// let temp = a 
// a = b  
// b = temp 

// console.log(a, b)

//2.) SWAPING WITHOUT EXTRA VARIABLE
// let a = 9
// let b = 1

// a = a + b 
// b = a - b
// a = a - b 

// console.log(a, b)

//3.) SWAPING WITHOUT EXTRA VARIABLE
// let a = 6
// let b = 7

// a = a * b
// b = a / b
// a = a / b

// console.log(a ,b)

//4.) SWAPING USING DESTRUCTURING METHOD
// let a = 22
// let b = 89; // SemiColn important 

// [a, b] = [b, a]
// console.log(a,b)

//5.) SWAPING VARIABLE USING XOR METHOD 
let a = 5 // 0101
let b = 7 // 0111

a = a ^ b //  0010
b = a ^ b // 0101
a = a ^ b // 0111

console.log(a,b)