
// arr1 = [3, 4, 5, 0, 0, 0], arr2 = [1, 2, 2]
// let m = 3
// let temp  = new Array(m)
// temp = arr1
// console.log(temp);


let arr = [1, 0, 2, 3, 0, 4, 5, 0]

let zeros = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        zeros++
    }
}
let n = arr.length;
let i = n - 1;
let j = i + zeros;


while(i >= 0 ){
    if(arr[i] === 0){

        if(j < n) arr[j] = 0;
        j--

        if(j < n) arr[j] = 0;
        j--
    }else{
        if(j < n) arr[j] = arr[i];
        j--
    }
    i--
}
console.log(arr)