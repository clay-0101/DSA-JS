# 🗂️ JavaScript Set — Complete Guide (Hinglish mein!)

---

## Set kya hota hai?

**Set** ek special data structure hai JavaScript mein jo sirf **unique values** store karta hai.  
Matlab agar tum same value dobara add karo, toh woh **ignore** ho jaati hai — duplicate bilkul nahi rehta!

> 💡 Array se difference: Array mein duplicates allowed hain, Set mein **nahi**.

---

## ⚙️ Basic Set Operations

```javascript
let set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add(40)         // duplicate hai, ignore ho jaayega
console.log(set)    // Output: Set(4) { 10, 20, 30, 40 }

set.delete(30)
console.log(set)    // Output: Set(3) { 10, 20, 40 }

console.log(set.has(24))   // Output: false  (24 exist nahi karta)
console.log(set.size)      // Output: 3
```

### Methods ka Summary:

| Method | Kaam kya karta hai |
|---|---|
| `set.add(value)` | Value add karo Set mein |
| `set.delete(value)` | Value remove karo Set se |
| `set.has(value)` | Check karo value exist karti hai ya nahi (`true`/`false`) |
| `set.size` | Total kitni values hain Set mein |

---

---

## 🔴 Question 1 — Array mein Unique Element Dhundho

### ❓ Problem:
Ek array hai jisme **sab duplicate elements even number of times repeat hote hain** (jaise 2 baar, 4 baar), lekin **ek element sirf 1 baar aata hai** — woh element dhundho.

```javascript
let arr = [1, 2, 3, 1, 4, 5, 6, 3, 1, 1, 2, 5, 6]
let set = new Set()

for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) set.delete(arr[i])
    else set.add(arr[i])
}

console.log(set) // Output: Set(1) { 4 }
```

### 🧠 Logic Samjho:
- Har element ko Set mein daalo.
- Agar woh element **pehle se Set mein hai** — toh usse **delete karo** (matlab dobara aaya, pair ban gaya).
- Agar **nahi hai** — toh **add karo**.
- Even times repeat hone waale elements cancel out ho jaate hain.
- Jo sirf ek baar aaya, woh Set mein **akela bachega** — wahi answer hai!

### 📊 Trace karte hain:
```
arr = [1, 2, 3, 1, 4, 5, 6, 3, 1, 1, 2, 5, 6]

1 aaya → add → Set: {1}
2 aaya → add → Set: {1,2}
3 aaya → add → Set: {1,2,3}
1 dobara aaya → delete → Set: {2,3}
4 aaya → add → Set: {2,3,4}
5 aaya → add → Set: {2,3,4,5}
6 aaya → add → Set: {2,3,4,5,6}
3 dobara aaya → delete → Set: {2,4,5,6}
1 aaya → add → Set: {2,4,5,6,1}
1 dobara aaya → delete → Set: {2,4,5,6}
2 dobara aaya → delete → Set: {4,5,6}
5 dobara aaya → delete → Set: {4,6}
6 dobara aaya → delete → Set: {4}

✅ Answer: 4
```

---

---

## 🔴 Question 2 — Sentence Pangram Hai Ya Nahi?

### ❓ Problem:
Ek sentence diya hai — check karo kya usme **English ke saare 26 letters** present hain ya nahi.  
Agar hain, toh woh **Pangram** hai!

> 📖 Famous Pangram example: *"The quick brown fox jumps over the lazy dog"*

```javascript
let sentence = 'aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'
let arr = sentence.split('')
let set = new Set(arr)

if (set.size == 26) {
    return 'true'
} else return 'false'

// Output: 'true'
```

### 🧠 Logic Samjho:
- Sentence ko characters mein split karo.
- Set mein daalo — Set automatically **duplicates hata deta hai**.
- Agar `set.size === 26` hai, matlab saare 26 unique letters present hain → **Pangram hai!**
- Agar size 26 se kam hai → **Pangram nahi hai**.

### ⚠️ Note:
Yeh solution **case-insensitive nahi** hai by default.  
Real-world mein `sentence.toLowerCase()` pehle lagao to handle both cases.

---

---

## 🔴 Question 3 — Happy Number Check Karo

### ❓ Problem:
Ek number diya hai. Check karo kya woh **Happy Number** hai ya nahi.

### Happy Number kya hota hai?
- Number ke **har digit ka square** karo.
- Sab squares ko **jodo** — nayi number milegi.
- Yeh process repeat karo.
- Agar kabhi result **1** aa gaya → **Happy Number!** 🎉
- Agar result loop mein ghoomta rahe (1 kabhi nahi aata) → **Not Happy Number** 😢

```javascript
let n = 2;
let set = new Set()

while (true) {
    let sum = 0
    while (n > 0) {
        sum += Math.pow((n % 10), 2)
        n = Math.floor(n / 10)
    }
    if (sum == 1) {
        console.log('happy number')
        break;
    } else if (set.has(sum)) {
        console.log('not happy number')
        break;
    } else {
        set.add(sum)
        n = sum
    }
}
```

### 🧠 Logic Samjho:
- Har step pe sum calculate karo (digits ka square).
- Agar `sum === 1` → Happy Number, loop band karo.
- Agar sum **pehle aa chuka hai** (Set mein hai) → Loop detect ho gaya → **Not Happy Number**.
- Warna `sum` ko Set mein daalo aur `n = sum` karke aage badho.

### 📊 Example — n = 19 (Happy Number):
```
19  → 1² + 9²  = 1 + 81 = 82
82  → 8² + 2²  = 64 + 4 = 68
68  → 6² + 8²  = 36 + 64 = 100
100 → 1² + 0² + 0² = 1  ✅ Happy!
```

### 📊 Example — n = 2 (Not Happy):
```
2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 (repeat! loop hai)
❌ Not Happy Number
```

---

---

## 🔴 Question 4 — Jewels in Stones (Case Sensitive)

### ❓ Problem:
- `jewels` string mein woh characters hain jo **jewel** (ratna/keemti pathar) hain.
- `stones` string mein woh characters hain jo **stones** hain.
- Count karo kitne stones **jewel** hain.
- **Case Sensitive** hai — `'a'` aur `'A'` alag hain!

```javascript
function countJewelsInStones(jewels, stones) {
    let set = new Set()
    let count = 0

    for (let i = 0; i < jewels.length; i++) {
        set.add(jewels[i])
    }

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) count++
    }

    return count
}

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
```

### 🧠 Logic Samjho:
- Pehle saare **jewels** ko Set mein daalo (fast lookup ke liye).
- Phir har **stone** check karo — agar woh Set mein hai (jewel hai), toh `count++` karo.
- Return karo `count`.

### 📊 Trace karte hain:
```
jewels = "aA"  → Set: {'a', 'A'}
stones = "aAAbbbb"

'a' → Set mein hai ✅  count = 1
'A' → Set mein hai ✅  count = 2
'A' → Set mein hai ✅  count = 3
'b' → Set mein nahi ❌
'b' → Set mein nahi ❌
'b' → Set mein nahi ❌
'b' → Set mein nahi ❌

Answer: 3
```

### 💡 Why Set use kiya?
Agar Set ki jagah Array use karte aur `includes()` check karte, toh har stone ke liye poora array scan hota → **O(n×m)** time.  
Set ke saath `has()` → **O(1)** — bahut fast! ⚡

---

---

## 📌 Quick Revision — Set ke Key Points

| Baat | Detail |
|---|---|
| Duplicates | Set mein kabhi nahi rehte |
| Order | Insertion order maintain hoti hai |
| `has()` | O(1) time mein check |
| Best use case | Unique values, fast lookup, cycle detection |
| Array se Set | `new Set(array)` — direct convert |
| Set se Array | `[...set]` ya `Array.from(set)` |

---

> ✍️ **Tip:** Jab bhi problem mein "unique", "duplicate detect", ya "cycle detect" sunao — **Set** yaad karo! 🚀
