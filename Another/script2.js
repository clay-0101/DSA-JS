// console.log(Math.round(3.5)); 
// console.log(Math.ceil(1.2));
// console.log(Math.floor(1.2));
// console.log(Math.trunc(4.2));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(625));
// console.log(Math.cbrt(27));
// console.log(Math.abs(-36));
// console.log(Math.max(92,63,14,83,90));
// console.log(Math.min(92,63,14,83,90));
// console.log(Math.floor((Math.random()*9000)+1000));
// let a = 34.234423
// console.log(a.toFixed(3))

// let a = 3, b= 5, c=4;
// let s = (a+b+c)/2
// let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(area);

// console.log(area.toFixed(2))

// Accept Value from the terminal 
// let inp = require('prompt-sync')()
// let age = inp('Enter Your age')
// console.log(age)

// let prompt = require('prompt-sync')()
// let nStr = Number(prompt('Enter Number : '))
//  let numLen = n.toString().length;
//   let sqOfNum = n*n
//   let arr = sqOfNum.toString().split('')
//   let str = ''


//   for(let i = arr.length -1 ; i >= ; i--){
//     console.log(i)
//   }
// console.log(str)
// for(let i = 5 ; i >= 3; i--){
//     console.log(i)
// }
// 8901648291

// if (nStr == 1 || nStr == 0) {
//     return 'No prime factors'
// } else {


//    for(let i = 2; i <= nStr ; i++){
//       let count = 0
//     if(nStr % i == 0){

//        for(let j = 1 ; j <= i ; j++ ){
//         if(i % j == 0){
//           count++
//         }
//        }
//     }
//     if(count == 2){
//       console.log(i)
//     }
//    }
// }
// let prompt = require('prompt-sync')()
// let n = prompt('Enter You number : ')
function calculateSumAndMean(arr) {
    // Write your logic here
    // for(let i = arr.length ; i >= 0; i--){
    //     for(let j = arr.length -1 ; j >= 0; j--){
    //         if(arr[j] > arr[i]){
    //             let temp = arr[i]
    //             arr[i]  = arr[j]
    //             arr[j] = temp
    //         }
    //     }
    // }
        let mid = Math.ceil(arr.length / 2)
        let firstHalf = arr.slice(0, mid)
        let secondHalf = arr.slice(mid)
        console.log(...firstHalf)
        console.log(...secondHalf)
    }
   

calculateSumAndMean([2 ,6 ,3 ,1 ,9 ,8 ,5])
