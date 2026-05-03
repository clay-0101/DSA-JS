# 🗺️ JavaScript Map — Complete Guide (Hinglish mein!)

---

## Map kya hota hai?

**Map** ek data structure hai jisme **key-value pairs** store hote hain.  
Yeh Object jaisa hi hai, lekin Map mein:
- **Koi bhi cheez key ban sakti hai** — string, number, object, sab kuch!
- **Insertion order** maintain hoti hai
- **Duplicate keys nahi** — same key dobara set karo toh **value update** ho jaati hai

> 💡 Object se difference: Object mein keys sirf strings/symbols hoti hain, Map mein **kuch bhi** ho sakta hai!

---

## ⚙️ Basic Map Operations

```javascript
let map = new Map()
map.set('carry', 21)
map.set('lokesh', 23)
map.set('ayush', 24)
map.set('carry', 25)   // duplicate key — value update ho jaayegi

map.delete('lokesh')
console.log(map)        // Output: Map(2) { 'carry' => 25, 'ayush' => 24 }

console.log(map.get('ayush'))   // Output: 24
console.log(map.size)           // Output: 2
console.log(map.has('carry'))   // Output: true

for (let key of map.keys()) {
    console.log(key)    // carry, ayush
}
for (let value of map.values()) {
    console.log(value)  // 25, 24
}
```

### Methods ka Summary:

| Method                | Kaam kya karta hai                     |
| --------------------- | -------------------------------------- |
| `map.set(key, value)` | Key-value pair add/update karo         |
| `map.get(key)`        | Key ki value nikalo                    |
| `map.delete(key)`     | Key-value pair hata do                 |
| `map.has(key)`        | Check karo key exist karti hai ya nahi |
| `map.size`            | Total kitne pairs hain                 |
| `map.keys()`          | Saari keys ka iterator                 |
| `map.values()`        | Saari values ka iterator               |

---

---

## 🔴 Question 1 — Names ko Height ke Hisaab se Sort Karo

### ❓ Problem:
Do arrays hain — ek mein **names** hain, doosre mein unki **heights**.  
Heights ke ascending order mein **names sort** karo.

```javascript
let names = ["Alice", "Bob", "Charlie"]
let heights = [165, 180, 170]
let sortNames = []

let map = new Map()

for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i])
}

for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
        if (heights[j] < heights[i]) {
            let temp = heights[i]
            heights[i] = heights[j]
            heights[j] = temp
        }
    }
}

for (let i = 0; i < heights.length; i++) {
    sortNames.push(map.get(heights[i]))
}

console.log(sortNames)  // Output: [ 'Alice', 'Charlie', 'Bob' ]
```

### 🧠 Logic Samjho:

**3 steps hain:**

**Step 1 — Map banao (height → name):**
```
165 → "Alice"
180 → "Bob"
170 → "Charlie"
```

**Step 2 — Heights array ko sort karo (Bubble Sort):**
```
[165, 180, 170]  →  [165, 170, 180]
```

**Step 3 — Sorted heights se Map mein naam dhundho:**
```
165 → "Alice"
170 → "Charlie"
180 → "Bob"

sortNames = ["Alice", "Charlie", "Bob"] ✅
```

> 💡 **Map ka fayda:** Height sort karne ke baad bhi hum jaante hain ki **kaun si height ka naam kya tha** — kyunki map mein store hai!

---

---

## 🔴 Question 2 — Array mein Har Element ki Frequency Count Karo

### ❓ Problem:
Ek array diya hai — har element **kitni baar aaya** woh count karo.

```javascript
let arr = [1, 2, 4, 5, 6, 7, 1, 5, 25, 2, 5, 1, 2, 6, 3, 6, 2, 3, 4, 5, 6, 5]
let map = new Map()

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1)
    } else {
        map.set(arr[i], 1)
    }
}

console.log(map)
```

### 📊 Output:
```
Map(8) {
  1  => 3,
  2  => 4,
  4  => 2,
  5  => 5,
  6  => 4,
  7  => 1,
  25 => 1,
  3  => 2
}
```

### 🧠 Logic Samjho:
- Agar element **pehle se Map mein hai** → uski count `+1` karo
- Agar **nahi hai** → usse `1` count ke saath add karo
- End mein Map mein har number ki **frequency** mil jaati hai

### 📊 Trace (pehle 4 elements):
```
1 nahi hai → set(1, 1)     Map: {1→1}
2 nahi hai → set(2, 1)     Map: {1→1, 2→1}
4 nahi hai → set(4, 1)     Map: {1→1, 2→1, 4→1}
5 nahi hai → set(5, 1)     Map: {1→1, 2→1, 4→1, 5→1}
...
1 dobara aaya → set(1, 2)  Map: {1→2, ...}
```

---

---

## 🔴 Question 3 — Two Sum (Target ke liye Index Dhundho)

### ❓ Problem:
Array aur ek target number diya hai.  
Woh **do indices dhundho** jinka sum target ke barabar ho.

```javascript
let arr = [5, 3, 2, 10, 9, 8]
let target = 15
let map = new Map()

for (let i = 0; i < arr.length; i++) {
    let leftValue = target - arr[i]
    if (map.has(leftValue)) {
        console.log(map.get(leftValue), i)
        break
    } else {
        map.set(arr[i], i)
    }
}

// Output: 0 3   (index 0 = 5, index 3 = 10, 5+10 = 15 ✅)
```

### 🧠 Logic Samjho:
- Har element ke liye calculate karo: `leftValue = target - currentElement`
- Matlab "mujhe **kaunsa number chahiye** jo mujhse milke target bane?"
- Agar woh number **Map mein pehle se hai** → mil gaya pair! Dono indices print karo.
- Agar **nahi hai** → current element ko uske index ke saath Map mein store karo.

### 📊 Trace:
```
arr = [5, 3, 2, 10, 9, 8],  target = 15

i=0: arr[0]=5,  leftValue = 15-5 = 10  → Map mein nahi → store: {5→0}
i=1: arr[1]=3,  leftValue = 15-3 = 12  → Map mein nahi → store: {5→0, 3→1}
i=2: arr[2]=2,  leftValue = 15-2 = 13  → Map mein nahi → store: {5→0, 3→1, 2→2}
i=3: arr[3]=10, leftValue = 15-10 = 5  → Map mein HAI! (index 0) ✅

Answer: 0 3  (5 + 10 = 15)
```

> ⚡ **Yeh approach O(n) hai** — ek hi loop mein answer mil jaata hai! Brute force (2 loops) se bohot fast.

---

---

## 🔴 Question 4 — Sirf Unique Elements ka Sum Nikalo

### ❓ Problem:
Array mein jo elements **sirf ek baar aaye hain** (duplicates nahi) unka **sum** nikalo.

```javascript
let arr = [1, 2, 4, 2, 3, 4, 5]
let map = new Map()
let sum = 0

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
}

for (let key of map.keys()) {
    if (map.get(key) == 1) {
        sum += key
    }
}

console.log(sum)  // Output: 9
```

### 🧠 Logic Samjho:

**Step 1 — Frequency count karo:**
```
arr = [1, 2, 4, 2, 3, 4, 5]

Map: { 1→1, 2→2, 4→2, 3→1, 5→1 }
```

**Step 2 — Sirf jinki count 1 hai unka sum karo:**
```
1 → count 1 ✅  sum = 1
2 → count 2 ❌  (duplicate, skip)
4 → count 2 ❌  (duplicate, skip)
3 → count 1 ✅  sum = 1+3 = 4
5 → count 1 ✅  sum = 4+5 = 9

Answer: 9 ✅
```

### 💡 Ek Interesting Line:
```javascript
map.set(arr[i], (map.get(arr[i]) || 0) + 1)
```
Yeh line shorthand hai — agar key exist karti hai toh uski value lo, nahi toh `0` lo, phir `+1` karo.  
If-else likhne ki zaroorat nahi! Clean aur smart code. 😎

---

---

## 🔴 Question 5 — String mein Pehla Repeated Character Dhundho

### ❓ Problem:
Ek string di hai — uska **pehla character dhundho jo repeat hota hai**.

```javascript
function repeatedCharacter(s) {
    let set = new Set()
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) return s[i]
        else set.add(s[i])
    }
}

// Example:
console.log(repeatedCharacter("abcabd"))  // Output: 'a'
console.log(repeatedCharacter("abcd"))    // Output: undefined (koi repeat nahi)
```

### 🧠 Logic Samjho:
- Har character ko Set mein daalo.
- Agar character **pehle se Set mein hai** → yahi pehla repeated character hai, return karo!
- Agar end tak koi repeat nahi mila → `undefined` return hoga.

### 📊 Trace — `"abcabd"`:
```
'a' → Set mein nahi → add → Set: {'a'}
'b' → Set mein nahi → add → Set: {'a','b'}
'c' → Set mein nahi → add → Set: {'a','b','c'}
'a' → Set mein HAI! ✅ → return 'a'

Answer: 'a'
```

> 📝 **Note:** Is question mein **Map nahi, Set use kiya** — kyunki sirf existence check karna tha, count ya index ki zaroorat nahi thi. Sahi tool choose karna important hai!

---

---

## 📌 Map vs Set vs Object — Kab Kya Use Karo?

| Situation                                   | Best Choice |
| ------------------------------------------- | ----------- |
| Sirf unique values store karni hain         | **Set**     |
| Existence/presence check karna hai          | **Set**     |
| Key-value pairs store karni hain            | **Map**     |
| Frequency / count track karni hai           | **Map**     |
| Two Sum jaisi index mapping chahiye         | **Map**     |
| Simple string keys, normal object kaam kare | **Object**  |

---

## ⚡ Map vs Object — Quick Difference

| Feature     | Map                              | Object                      |
| ----------- | -------------------------------- | --------------------------- |
| Key types   | Kuch bhi (number, object, etc.)  | Sirf string/symbol          |
| Order       | Insertion order maintain         | Mostly maintain (modern JS) |
| Size        | `map.size` direct milta hai      | `Object.keys(obj).length`   |
| Iteration   | `for...of` direct kaam karta hai | Thoda extra kaam            |
| Performance | Better for frequent add/delete   | Simple cases ke liye theek  |

---

> ✍️ **Tip:** Jab bhi problem mein **"count karo"**, **"index yaad rakho"**, ya **"kisi cheez ko kisi aur cheez se map karo"** — seedha **Map** yaad karo! 🚀


Yeh raha bhai, seedha copy-paste kar apni `map.md` mein:

---

## 🔴 Question 6 — Most Frequent Even Element Dhundho

### ❓ Problem:
Array mein jo **even number sabse zyada baar aaya** ho usse return karo.  
Agar do even numbers ki frequency same ho toh **chota wala** return karo.  
Koi even number nahi hai toh `-1` return karo.

```javascript
class Solution {
    mostFrequentEven(nums) {
        // Implement your solution here
       let map = new Map()
       let max = 0 , ele = -1
       for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
       }
       for(let key of map.keys()){
        if(key % 2 == 0){
            let currentFreq = map.get(key)
            if(currentFreq > max){
                max = currentFreq
                ele = key
            }
            else if(currentFreq == max){
                if(ele == -1 || key < ele){
                    ele = key
                }
            }
        }
       }
       return ele
    }
}
```

### 📊 Output:
```
Input:  nums = [0, 1, 2, 2, 4, 4, 1]
Output: 2

Input:  nums = [4, 4, 4, 9, 2, 2]
Output: 4

Input:  nums = [29, 47, 21, 41, 13, 37, 25, 7]
Output: -1   // koi even number nahi
```

### 🧠 Logic Samjho:

**Step 1 — Sabka frequency count karo (Map mein):**
```
nums = [0, 1, 2, 2, 4, 4, 1]

Map: { 0→1, 1→2, 2→2, 4→2 }
```

**Step 2 — Sirf even keys pe dhyan do:**
```
0 → even ✅  freq=1  max=1, ele=0
1 → odd  ❌  skip
2 → even ✅  freq=2  2 > 1 → max=2, ele=2
4 → even ✅  freq=2  2 == 2 (tie!) → 4 > 2 toh ele nahi badla

Answer: 2 ✅
```

### 🧠 Tie ka Case Samjho:
```javascript
else if(currentFreq == max){
    if(ele == -1 || key < ele){
        ele = key   // chota wala rakho
    }
}
```
- Jab do even numbers ki **frequency same** ho
- Toh jo **key choti** hai woh `ele` mein store hogi
- `ele == -1` check isliye kiya kyunki initial value `-1` hai — pehli even milne pe seedha store karo

### 💡 Is Question mein Map ka Fayda:
- Pehle **ek loop** mein saari frequencies store kar li Map mein
- Doosre loop mein sirf **even keys filter** ki aur max dhundha
- Bina Map ke yeh **O(n²)** hota, Map se **O(n)** mein ho gaya ⚡

---
Yeh raha bhai, seedha copy-paste kar apni `map.md` mein:

---

## 🔴 Question 7 — Kth Distinct String Dhundho

### ❓ Problem:
Ek array of strings aur ek integer `k` diya hai. Jo string array mein **sirf ek baar** aayi ho woh "distinct" hai. Array ki **Kth distinct string** return karo. Agar itni distinct strings nahi hain toh `"None"` return karo.

```javascript
class Solution {
    kthDistinct(arr, k) {
        let map = new Map()
        let eles = []
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i]
            map.set(curr, (map.get(curr) || 0) + 1)
        }
        let count = 0
        for (let key of map.keys()) {
            if (map.get(key) == 1) {
                count++
                if (count == k) {
                    return key
                }
            }
        }
        return 'None'
    }
}
```

### 📊 Output:
```
Input:  arr=["d","b","c","b","c","a"], k=2
Output: "a"

Input:  arr=[2,1,3,3,2], k=1
Output: 1

Input:  arr=[1,2,3,4], k=5
Output: 'None'
```

### 🧠 Logic Samjho:

**Step 1 — Frequency Map banao:**
```
arr = ["d","b","c","b","c","a"]

Map: { "d"→1, "b"→2, "c"→2, "a"→1 }
```

**Step 2 — Sirf freq=1 wale count karo:**
```
"d" → freq=1 ✅  count=1  (k=2, abhi nahi mila)
"b" → freq=2 ❌  skip
"c" → freq=2 ❌  skip
"a" → freq=1 ✅  count=2 == k ✅ return "a"

Answer: "a"
```

### 💡 Map ka Order kyun Important hai:
Map **insertion order** maintain karta hai — elements usi order mein traverse honge jisme array mein the. Isliye Kth distinct correctly milta hai! ✅

---

---

## 🔴 Question 8 — Candies Distribute Karo

### ❓ Problem:
`n` candies hain, `k` children hain, aur `candies` array mein har candy ka type diya hai.  
**Rule:** Har child ko **exactly k distinct types** ki candy milegi.  
Ek candy sirf ek hi child ko di ja sakti hai — reuse nahi hogi.  
Count karo **maximum kitne children** ko complete distribution mil sakti hai.

```javascript
class Solution {
    distributeCandies(n, k, candies) {
        let map = new Map()
        let count = 0
        let child = 0
        for (let i = 0; i < candies.length; i++) {
            let curr = candies[i]
            map.set(curr, (map.get(curr) || 0) + 1)
        }
        if (map.size >= k) {
            while (map.size > 0) {
                for (let key of map.keys()) {
                    if (count == k) {
                        child++
                        count = 0
                        break;
                    }
                    if (map.has(key) && map.get(key) > 0) {
                        count++
                        map.set(key, (map.get(key)) - 1)
                    } else if (map.get(key) == 0) {
                        map.delete(key)
                    }
                }
            }
        } else {
            return child
        }
        return child
    }
}
```

### 📊 Output:
```
Input:  n=7, k=3, candies=[1,1,2,2,3,3,4]
Output: 2

Input:  n=6, k=2, candies=[1,1,1,1,1,1]
Output: 0   // sirf 1 type hai, k=2 chahiye
```

### 🧠 Logic Samjho:

**Step 1 — Frequency Map banao:**
```
candies = [1,1,2,2,3,3,4]

Map: { 1→2, 2→2, 3→2, 4→1 }
```

**Step 2 — Check karo `map.size >= k`:**
```
map.size=4, k=3 → 4 >= 3 ✅ aage badho
```
Agar `map.size < k` → directly `0` return, ek bhi round possible nahi.

**Step 3 — Round simulate karo:**
```
Round 1:
  key=1 → count=1, map: {1→1, ...}
  key=2 → count=2, map: {2→1, ...}
  key=3 → count=3 == k → child=1, count=0, break ✅

Round 2:
  key=1 → count=1, map: {1→0, ...}
  key=2 → count=2, map: {2→0, ...}
  key=3 → count=3 == k → child=2, count=0, break ✅

Round 3:
  key=1 → freq=0, delete
  key=2 → freq=0, delete
  key=3 → freq=0, delete
  key=4 → count=1
  map khaali → while loop band

Answer: 2 ✅
```

---

---

## 🔴 Question 9 — Word Pattern Match Karo

### ❓ Problem:
Ek `pattern` string aur ek `s` string diya hai.  
Check karo kya `s` ke words `pattern` ke characters ko **one-to-one follow** karte hain.  
- Har character exactly ek word se map hona chahiye.
- Do alag characters same word se map nahi hone chahiye.

```javascript
class Solution {
    wordPattern(pattern, s) {
        let arr = s.split(' ')
        let set = new Set(arr)
        let uniqueArr = Array.from(set)
        let map = new Map()
        let count = 0

        for (let i = 0; i < uniqueArr.length; i++) {
            map.set(pattern[i], uniqueArr[i])
        }

        for (let i = 0; i < pattern.length; i++) {
            let curr = pattern[i]
            if (map.get(curr) == arr[i]) {
                count++
            }
        }

        if (count == pattern.length) return true;
        else return false
    }
}
```

### 📊 Output:
```
Input:  pattern="abba", s="dog cat cat dog"
Output: true

Input:  pattern="abba", s="dog cat cat fish"
Output: false

Input:  pattern="aa", s="dog dog"
Output: true
```

### 🧠 Logic Samjho:

**Step 1 — Unique words nikalo Set se:**
```
s = "dog cat cat dog"
arr = ["dog","cat","cat","dog"]
set = {"dog","cat"}
uniqueArr = ["dog","cat"]
```

**Step 2 — Pattern characters ko unique words se map karo:**
```
pattern = "abba"
uniqueArr = ["dog","cat"]

map: { 'a'→"dog", 'b'→"cat" }
```

**Step 3 — Verify karo har position pe:**
```
i=0: pattern[0]='a' → map.get('a')="dog" == arr[0]="dog" ✅ count=1
i=1: pattern[1]='b' → map.get('b')="cat" == arr[1]="cat" ✅ count=2
i=2: pattern[2]='b' → map.get('b')="cat" == arr[2]="cat" ✅ count=3
i=3: pattern[3]='a' → map.get('a')="dog" == arr[3]="dog" ✅ count=4

count=4 == pattern.length=4 → return true ✅
```

---

---

## 🔴 Question 10 — Duplicate aur Missing Number Dhundho

### ❓ Problem:
Array mein `1` se `n` tak numbers hone chahiye. Lekin:
- **Ek number duplicate** hai (2 baar aaya)
- **Ek number missing** hai (aaya hi nahi)

Dono return karo `[duplicate, missing]` order mein.

```javascript
class Solution {
    findErrorNums(nums) {
        let missing = 0
        let duplicate = 0
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            map.set(curr, (map.get(curr) || 0) + 1)
        }
        for (let i = 1; i <= nums.length; i++) {
            if (!map.has(i)) {
                missing = i
            }
            if (map.get(i) > 1) {
                duplicate = i
            }
        }
        return [duplicate, missing]
    }
}
```

### 📊 Output:
```
Input:  nums=[1,2,2,4]
Output: [2, 3]   // 2 duplicate hai, 3 missing hai

Input:  nums=[1,1,3]
Output: [1, 2]   // 1 duplicate hai, 2 missing hai
```

### 🧠 Logic Samjho:

**Step 1 — Frequency Map banao:**
```
nums = [1,2,2,4]

Map: { 1→1, 2→2, 4→1 }
```

**Step 2 — 1 se n tak loop lagao aur check karo:**
```
i=1: map.has(1) ✅, freq=1  → normal
i=2: map.has(2) ✅, freq=2  → duplicate=2 ✅
i=3: map.has(3) ❌          → missing=3 ✅
i=4: map.has(4) ✅, freq=1  → normal

Answer: [2, 3] ✅
```

### 💡 2 Cheezein ek saath dhundhi:
```javascript
if (!map.has(i))      // missing: 1 to n mein se jo Map mein nahi
if (map.get(i) > 1)   // duplicate: jiska count 2 hai
```
Ek hi loop mein **dono answers** nikal aate hain — clean aur efficient! ⚡

---
---

## Decode Message using HashMap

**Problem:** Ek encoded message diya gaya hai aur ek mapping bhi — har character ko uske mapped character se replace karo. Spaces waise hi rahenge. Agar character mapping mein nahi hai toh woh bhi waise hi rahega.

```javascript
class Solution {
    decodeMessage(mapping, message) {
        let map = new Map()
        let arr = []

        // Step 1: mapping object ko Map mein convert karo
        for (let key in mapping) {
            map.set(key, mapping[key])
        }

        // Step 2: message ke har character ko decode karo
        for (let i = 0; i < message.length; i++) {
            if (message[i] == ' ') {
                arr.push(' ')                    // space → space as-is
            } else if (map.has(message[i])) {
                arr.push(map.get(message[i]))    // mapping mili → replace karo
            } else {
                arr.push(message[i])             // mapping nahi → as-is rakhdo
            }
        }

        return arr.join('')
    }
}
```

**Logic — 3 simple steps:**

1. `mapping` object ko `Map` mein daalo — fast lookup ke liye (`O(1)` per lookup)
2. Message ke har character pe teen cases check karo:
   - Space hai → seedha space daalo
   - Map mein hai → mapped value daalo
   - Map mein nahi → original character daalo
3. Array ko join karke string return karo

**`for...in` vs `for...of` — yahan kyun `for...in`:**

```javascript
for (let key in mapping)    // Object ke keys iterate karta hai → 'a','b','c'...
for (let val of arr)        // Iterable (array/string) ke values iterate karta hai
```

`mapping` ek plain object hai `{}`, isliye `for...in` use kiya.

---

**Trace (mapping = `{h:'a', e:'b', l:'c', o:'d'}`, message = `"hello world"`):**

Map ban gayi:
```
h → a
e → b
l → c
o → d
```

Character by character decode:

| i | message[i] | Map mein? | arr mein push |
|---|------------|-----------|---------------|
| 0 | `h`        | ✅ → `a`  | `a`           |
| 1 | `e`        | ✅ → `b`  | `b`           |
| 2 | `l`        | ✅ → `c`  | `c`           |
| 3 | `l`        | ✅ → `c`  | `c`           |
| 4 | `o`        | ✅ → `d`  | `d`           |
| 5 | ` `        | Space!    | ` `           |
| 6 | `w`        | ❌ nahi   | `w`           |
| 7 | `o`        | ✅ → `d`  | `d`           |
| 8 | `r`        | ❌ nahi   | `r`           |
| 9 | `l`        | ✅ → `c`  | `c`           |
|10 | `d`        | ❌ nahi   | `d`           |

`arr.join('')` → `"abccd wdrcd"`

---

**Test Cases:**

```javascript
// Test 1: simple mapping
mapping = { a:'z', b:'y', c:'x', d:'w' }
message = 'abcd'
Output → 'zyxw'

// Test 2: spaces aur unmapped characters ke saath
mapping = { h:'a', e:'b', l:'c', o:'d' }
message = 'hello world'
Output → 'abccd wdrcd'

// Test 3: kuch characters map mein nahi hain
mapping = { a:'m', b:'n' }
message = 'abc def'
Output → 'mnc def'   // c,d,e,f → as-is, space → space
```

**Time & Space Complexity:**

| | Complexity | Reason |
|--|-----------|--------|
| Time | O(n) | message ke n characters ek baar scan |
| Space | O(k + n) | k = mapping size, n = output array |