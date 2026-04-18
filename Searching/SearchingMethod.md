# Search Algorithms in JavaScript

This repository contains implementations of two fundamental search algorithms: **Linear Search** and **Binary Search**.

---

## 1. Linear Search 🔍

### Code

```javascript
function linearSearch(arr, target) {
    // Initialize index to -1 (indicates not found)
    let idx = -1;

    // Iterate through each element of the array
    for(let i = 0; i < arr.length; i++) {
        // Check if current element matches the target
        if(arr[i] == target) {
            idx = i;  // Store the found index
            break;    // Exit loop as we found the target
        }
    }

    return idx;  // Return index (-1 if not found, otherwise position)
}
```

### Explanation (Hindi/Urdu)

**Linear Search** ek simple searching technique hai jo array ke har element ko **ek-ek karke check karti hai**.

#### Kaise Kaam Karta Hai:
1. **Initialization**: `idx = -1` set karte hain (iska matlab hai abhi target nahi mila)
2. **Loop**: Array ke shuru se end tak iterate karte hain (`i = 0` se `arr.length - 1` tak)
3. **Comparison**: Har element ko target se compare karte hain (`arr[i] == target`)
4. **Found**: Agar match mil jaye toh:
   - Us index ko store kar lete hain (`idx = i`)
   - Loop ko break kar dete hain (kyunki target mil gaya)
5. **Return**: Final index return karte hain

#### Time Complexity:
- **Best Case**: O(1) - Target pehle position par ho
- **Worst Case**: O(n) - Target last position par ho ya na ho
- **Average Case**: O(n)

#### Space Complexity:
- **O(1)** - Sirf ek variable (`idx`) use ho raha hai

#### Kab Use Karein:
- Jab array **unsorted** ho
- Jab array ka size **chota** ho
- Jab sirf **ek baar search** karna ho

---

## 2. Binary Search ⚡

### Code

```javascript
let prompt = require('prompt-sync')()
let arr = [12, 24, 32, 29, 47, 51, 58, 64, 70, 79, 85, 99] // Sorted array required
let target = Number(prompt('Find Element : '))
let idx = -1 // -1 means element not found
let st = 0, end = arr.length - 1;

while(st <= end) {
   let mid = Math.floor((st + end) / 2)  // Find middle index

   if(arr[mid] == target) {
        idx = mid;  // Element found at middle
        break;
   } else if(arr[mid] < target) {
        st = mid + 1;  // Target is in right half
   } else {
        end = mid - 1;  // Target is in left half
   }
}

console.log(idx)
```

### Explanation (Hindi/Urdu)

**Binary Search** ek **efficient** searching algorithm hai jo **sorted array** par kaam karta hai. Ye **Divide and Conquer** approach use karta hai.

#### Kaise Kaam Karta Hai:

1. **Initialization**:
   - `st = 0` (start pointer - array ke shuru mein)
   - `end = arr.length - 1` (end pointer - array ke end mein)
   - `idx = -1` (default - element nahi mila)

2. **Loop Condition**: Jab tak `st <= end` (start end se chota ya barabar hai)

3. **Middle Calculate**: 
   - `mid = Math.floor((st + end) / 2)`
   - Array ke beech ka index nikalte hain

4. **Three Cases**:
   - **Case 1 - Found**: `arr[mid] == target`
     - Element mil gaya! Index store karo aur break karo

   - **Case 2 - Go Right**: `arr[mid] < target`
     - Target bada hai middle element se
     - Left half discard karo: `st = mid + 1`

   - **Case 3 - Go Left**: `arr[mid] > target`
     - Target chota hai middle element se
     - Right half discard karo: `end = mid - 1`

#### Example Walkthrough:
Array: `[12, 24, 32, 29, 47, 51, 58, 64, 70, 79, 85, 99]`
Target: `58`

| Step | st | end | mid | arr[mid] | Comparison | Action |
|------|----|-----|-----|----------|------------|--------|
| 1 | 0 | 11 | 5 | 51 | 51 < 58 | Go right (st = 6) |
| 2 | 6 | 11 | 8 | 70 | 70 > 58 | Go left (end = 7) |
| 3 | 6 | 7 | 6 | 58 | 58 == 58 | **Found!** |

#### Time Complexity:
- **Best Case**: O(1) - Target middle mein ho
- **Worst Case**: O(log n) - Har step mein half array discard hota hai
- **Average Case**: O(log n)

#### Space Complexity:
- **O(1)** - Iterative version mein sirf variables use hote hain

#### Important Note:
⚠️ **Binary Search sirf SORTED array par kaam karta hai!**

#### Kab Use Karein:
- Jab array **sorted** ho
- Jab array ka size **bada** ho
- Jab **multiple searches** karni ho (same array par)

---

## Comparison: Linear Search vs Binary Search

| Feature | Linear Search | Binary Search |
|---------|--------------|---------------|
| **Array Requirement** | Sorted ya Unsorted dono chalega | **Sirf Sorted array** |
| **Approach** | Sequential (ek-ek karke) | Divide and Conquer (aadha karte jao) |
| **Time Complexity** | O(n) | O(log n) |
| **Speed** | Slow (large data mein) | Fast (large data mein) |
| **Implementation** | Simple | Thoda complex |
| **Best Use Case** | Small, unsorted arrays | Large, sorted arrays |

---

## How to Run

### Linear Search:
```bash
node linear_search.js
```

### Binary Search:
```bash
npm install prompt-sync
node binary_search.js
```

---

## Summary

- **Linear Search**: Simple hai, har jagah kaam karta hai, lekin slow hai bade data ke liye
- **Binary Search**: Fast hai, lekin array sorted hona chahiye

**Rule of Thumb**: 
- Chota array ( < 100 elements) → Linear Search ✅
- Bada array + Sorted → Binary Search ✅

---

*Happy Coding! 🚀*
