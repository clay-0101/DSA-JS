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

| Method | Kaam kya karta hai |
|---|---|
| `map.set(key, value)` | Key-value pair add/update karo |
| `map.get(key)` | Key ki value nikalo |
| `map.delete(key)` | Key-value pair hata do |
| `map.has(key)` | Check karo key exist karti hai ya nahi |
| `map.size` | Total kitne pairs hain |
| `map.keys()` | Saari keys ka iterator |
| `map.values()` | Saari values ka iterator |

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

| Situation | Best Choice |
|---|---|
| Sirf unique values store karni hain | **Set** |
| Existence/presence check karna hai | **Set** |
| Key-value pairs store karni hain | **Map** |
| Frequency / count track karni hai | **Map** |
| Two Sum jaisi index mapping chahiye | **Map** |
| Simple string keys, normal object kaam kare | **Object** |

---

## ⚡ Map vs Object — Quick Difference

| Feature | Map | Object |
|---|---|---|
| Key types | Kuch bhi (number, object, etc.) | Sirf string/symbol |
| Order | Insertion order maintain | Mostly maintain (modern JS) |
| Size | `map.size` direct milta hai | `Object.keys(obj).length` |
| Iteration | `for...of` direct kaam karta hai | Thoda extra kaam |
| Performance | Better for frequent add/delete | Simple cases ke liye theek |

---

> ✍️ **Tip:** Jab bhi problem mein **"count karo"**, **"index yaad rakho"**, ya **"kisi cheez ko kisi aur cheez se map karo"** — seedha **Map** yaad karo! 🚀
