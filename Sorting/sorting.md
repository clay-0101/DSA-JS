# JavaScript Sorting Algorithms Guide

> 📊 Complete reference for Bubble Sort, Insertion Sort, and Selection Sort

---

## 1. Bubble Sort 🫧

### Code
```javascript
let arr = [23, 41, 42, 12, 2, 1]
let n = arr.length

for(let i = 0; i < n-1; i++) {
    for(let j = 0; j < n-1-i; j++) {
        if(arr[j] > arr[j+1]) {
            // Swap elements
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)  // Output: [1, 2, 12, 23, 41, 42]
```

### Explanation (Hindi/Urdu)

**Bubble Sort** ek simple sorting algorithm hai jo **adjacent elements ko compare karke swap karta hai**.

#### Kaise Kaam Karta Hai:

**Concept**: "Bade elements ko end mein bubble karna" 🫧

1. **Outer Loop** (`i` loop): 
   - Array ke har position ke liye chalta hai
   - `n-1` times chalta hai (last element automatically sort ho jaata hai)

2. **Inner Loop** (`j` loop):
   - Adjacent elements ko compare karta hai
   - `n-1-i` tak chalta hai (kyunki last ke `i` elements already sorted hain)

3. **Swapping Logic**:
   - Agar `arr[j] > arr[j+1]` (left wala bada hai right se)
   - Toh swap kar do (temp variable use karke)

#### Step-by-Step Visualization:

**Initial**: `[23, 41, 42, 12, 2, 1]`

**Pass 1 (i=0)**: Bada element end tak bubble hoga
- Compare 23,41 → No swap → `[23, 41, 42, 12, 2, 1]`
- Compare 41,42 → No swap → `[23, 41, 42, 12, 2, 1]`
- Compare 42,12 → **Swap** → `[23, 41, 12, 42, 2, 1]`
- Compare 42,2 → **Swap** → `[23, 41, 12, 2, 42, 1]`
- Compare 42,1 → **Swap** → `[23, 41, 12, 2, 1, 42]` ✅ (42 sorted!)

**Pass 2 (i=1)**: 
- `[23, 12, 2, 1, 41, 42]` ✅ (41 sorted!)

**Pass 3 (i=2)**:
- `[12, 2, 1, 23, 41, 42]` ✅ (23 sorted!)

...and so on

**Final**: `[1, 2, 12, 23, 41, 42]`

#### Time Complexity:
- **Best Case**: O(n) - Agar array already sorted ho (optimized version mein)
- **Worst Case**: O(n²) - Agar array reverse sorted ho
- **Average Case**: O(n²)

#### Space Complexity:
- **O(1)** - Sirf temp variable use hota hai

#### Kab Use Karein:
- ✅ Small arrays (n < 100)
- ✅ Educational purposes (concept samajhne ke liye)
- ✅ Almost sorted arrays
- ❌ Large datasets ke liye nahi!

---

## 2. Insertion Sort 📥

### Code
```javascript
function insertionSort(arr) {
    let n = arr.length

    for (let i = 1; i < n; i++) {
        let key = arr[i]        // Current element ko pakdo
        let j = i - 1           // Previous element se compare karna shuru karo

        // Sab elements ko ek position aage shift karo
        // Jab tak wo key se bade hain
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]  // Shift right
            j--;
        }

        arr[j + 1] = key;      // Key ko sahi position mein daalo
    }
    console.log(arr)
}

// Test
insertionSort([64, 34, 25, 12, 22, 11, 90])
// Output: [11, 12, 22, 25, 34, 64, 90]
```

### Explanation (Hindi/Urdu)

**Insertion Sort** jaise hum **playing cards** arrange karte hain waise hi kaam karta hai!

#### Concept:
> "Ek element uthao, aur usse sorted part mein sahi jagah pe insert karo"

#### Kaise Kaam Karta Hai:

1. **Array ko do parts mein divide karo**:
   - **Sorted Part**: Shuru ke elements (shuru mein sirf pehla element)
   - **Unsorted Part**: Baaki ke elements

2. **Outer Loop** (`i` loop):
   - `i = 1` se start (pehla element already "sorted" maana jaata hai)
   - Har iteration mein ek naya element "key" banata hai

3. **Inner While Loop**:
   - Sorted part mein peeche jaate hain (`j = i-1` se `0` tak)
   - Jo elements key se bade hain, unhe ek position aage shift karte hain
   - Jab sahi position mile, key ko wahan insert karte hain

#### Step-by-Step Visualization:

**Initial**: `[64, 34, 25, 12, 22, 11, 90]`
- Sorted: `[64]` | Unsorted: `[34, 25, 12, 22, 11, 90]`

**i=1, key=34**:
- 64 > 34? Haan! → 64 ko aage shift karo → `[64, 64, 25, 12, 22, 11, 90]`
- j = -1, loop end
- arr[0] = 34 → `[34, 64, 25, 12, 22, 11, 90]` ✅

**i=2, key=25**:
- 64 > 25? Haan! → Shift → `[34, 64, 64, 12, 22, 11, 90]`
- 34 > 25? Haan! → Shift → `[34, 34, 64, 12, 22, 11, 90]`
- j = -1, loop end
- arr[0] = 25 → `[25, 34, 64, 12, 22, 11, 90]` ✅

...continue until fully sorted

**Final**: `[11, 12, 22, 25, 34, 64, 90]`

#### Time Complexity:
- **Best Case**: O(n) - Already sorted array
- **Worst Case**: O(n²) - Reverse sorted array
- **Average Case**: O(n²)

#### Space Complexity:
- **O(1)** - In-place sorting

#### Kab Use Karein:
- ✅ Small datasets
- ✅ Nearly sorted arrays (best performance!)
- ✅ Online sorting (data aata ja raha ho)
- ✅ Stable sorting chahiye ho
- ❌ Large random datasets

#### Real Life Example:
> Card game khelte waqt cards arrange karna - ek card uthao aur usse sorted cards mein sahi jagah pe rakh do!

---

## 3. Selection Sort 🎯

### Code
```javascript
function selectionSort(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let min = i  // Assume current position has minimum

        // Find actual minimum in remaining array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j  // Update minimum index
            }
        }

        // Swap only if minimum is not at current position
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    console.log(arr)
}

// Test
selectionSort([64, 25, 12, 22, 11])
// Output: [11, 12, 22, 25, 64]
```

### Explanation (Hindi/Urdu)

**Selection Sort** mein hum **har baar sabse chota element dhoondhte hain** aur usse current position pe laate hain!

#### Concept:
> "Har iteration mein minimum element dhoondo, aur usse sahi jagah pe rakh do"

#### Kaise Kaam Karta Hai:

1. **Outer Loop** (`i` loop):
   - `i` represent karta hai current position jahan minimum element aana chahiye
   - `n-1` tak chalta hai (last element automatically sorted)

2. **Find Minimum** (Inner `j` loop):
   - `i` ke aage ke saare elements check karo
   - Sabse chota element ka index `min` mein store karo

3. **Swap**:
   - Agar `min != i` (minimum already sahi position pe nahi hai)
   - Toh `arr[i]` aur `arr[min]` ko swap karo

#### Step-by-Step Visualization:

**Initial**: `[64, 25, 12, 22, 11]`

**Pass 1 (i=0)**:
- Find min in `[64, 25, 12, 22, 11]` → **11** at index 4
- Swap index 0 and 4 → `[11, 25, 12, 22, 64]` ✅

**Pass 2 (i=1)**:
- Find min in `[25, 12, 22, 64]` → **12** at index 2
- Swap index 1 and 2 → `[11, 12, 25, 22, 64]` ✅

**Pass 3 (i=2)**:
- Find min in `[25, 22, 64]` → **22** at index 3
- Swap index 2 and 3 → `[11, 12, 22, 25, 64]` ✅

**Pass 4 (i=3)**:
- Find min in `[25, 64]` → **25** already at index 3
- No swap needed → `[11, 12, 22, 25, 64]` ✅

**Final**: `[11, 12, 22, 25, 64]`

#### Time Complexity:
- **Best Case**: O(n²) - Hamesha same comparisons honge
- **Worst Case**: O(n²) - Same as best case
- **Average Case**: O(n²)

#### Space Complexity:
- **O(1)** - In-place sorting

#### Kab Use Karein:
- ✅ Memory writes kam karni ho (swaps kam hote hain)
- ✅ Small datasets
- ✅ When memory is expensive (swapping costly hai)
- ❌ Large datasets (hamesha O(n²) hai)

---

## Comparison of Three Sorting Algorithms

| Feature | Bubble Sort 🫧 | Insertion Sort 📥 | Selection Sort 🎯 |
|---------|---------------|-------------------|-------------------|
| **Approach** | Adjacent swap | Insert in sorted part | Find min & swap |
| **Best Case** | O(n) | O(n) | O(n²) |
| **Average** | O(n²) | O(n²) | O(n²) |
| **Worst Case** | O(n²) | O(n²) | O(n²) |
| **Space** | O(1) | O(1) | O(1) |
| **Stable** | ✅ Yes | ✅ Yes | ❌ No |
| **Adaptive** | ✅ Yes | ✅ Yes | ❌ No |
| **Swaps** | O(n²) | O(n²) | O(n) |
| **Comparisons** | O(n²) | O(n²) | O(n²) |

### Definitions:
- **Stable**: Equal elements ka order change nahi hota
- **Adaptive**: Already sorted data pe fast performance
- **In-place**: Extra memory nahi lagti

---

## When to Use Which? 🤔

### Use Bubble Sort when:
- Array almost sorted hai
- Sirf concept samajhna hai
- Small dataset (< 50 elements)

### Use Insertion Sort when:
- Data nearly sorted hai (BEST choice!)
- Real-time data stream hai
- Small to medium dataset
- Stable sorting chahiye

### Use Selection Sort when:
- Swapping expensive hai (e.g., flash memory)
- Memory writes minimize karni hain
- Small dataset
- Stability matter nahi karti

---

## Interview Tips 💼

### Common Questions:

**Q1: Bubble Sort ko optimize kaise karein?**
```javascript
// Optimized Bubble Sort
function optimizedBubbleSort(arr) {
    let n = arr.length
    for(let i = 0; i < n-1; i++) {
        let swapped = false
        for(let j = 0; j < n-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]  // ES6 swap
                swapped = true
            }
        }
        if(!swapped) break  // Already sorted!
    }
    return arr
}
```

**Q2: Insertion Sort kyun fast hai nearly sorted data pe?**
> Kyunki while loop kam baar chalta hai. Agar element almost sahi position pe hai, toh sirf 1-2 comparisons mein kaam ho jaata hai.

**Q3: Selection Sort stable kyun nahi hai?**
> Example: `[4a, 4b, 1]` → After sorting: `[1, 4b, 4a]` (4a aur 4b ka order change ho gaya!)

**Q4: Teenon mein se best kaunsa?**
> General purpose ke liye: **Insertion Sort** (adaptive + stable)
> Swaps minimize karna ho: **Selection Sort**

---

## Quick Code Reference

### ES6 Swap (Without temp variable):
```javascript
// Old way
let temp = arr[i]
arr[i] = arr[j]
arr[j] = temp

// ES6 way
[arr[i], arr[j]] = [arr[j], arr[i]]
```

### All Three in One:
```javascript
// Bubble Sort - Simple
for(let i=0; i<n-1; i++)
    for(let j=0; j<n-1-i; j++)
        if(arr[j]>arr[j+1]) swap(arr,j,j+1)

// Insertion Sort - Card style
for(let i=1; i<n; i++) {
    let key=arr[i], j=i-1
    while(j>=0 && arr[j]>key) arr[j+1]=arr[j--]
    arr[j+1]=key
}

// Selection Sort - Find min
for(let i=0; i<n-1; i++) {
    let min=i
    for(let j=i+1; j<n; j++)
        if(arr[j]<arr[min]) min=j
    if(min!=i) swap(arr,i,min)
}
```

---

*Happy Sorting! 🚀*

**Created**: April 2026  
**Topics**: Bubble Sort, Insertion Sort, Selection Sort  
**Language**: JavaScript with Hindi/Urdu explanations
