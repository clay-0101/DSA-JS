## Q9 — fiboNth(n) : nth Fibonacci number nikalo

```javascript
function fiboNth(n) {
    if (n == 1) return 0         // Base case: 1st term = 0
    else if (n == 2) return 1    // Base case: 2nd term = 1
    else {
        return fiboNth(n - 2) + fiboNth(n - 1)  // Pichle do terms ka sum
    }
}
```

**Logic:** Fibonacci series: `0, 1, 1, 2, 3, 5, 8, 13...`
Har term pichle do terms ka sum hoti hai. nth term matlab nth position pe kya value hai.

**Ye function printFibonacci se alag kaise hai:**

|            | printFibonacci(n)           | fiboNth(n)                     |
| ---------- | --------------------------- | ------------------------------ |
| Kaam       | n terms tak print karta hai | sirf nth term return karta hai |
| Output     | poori series                | ek number                      |
| fiboNth(6) | `0 1 1 2 3 5`               | `5`                            |

**Trace (n=5):**

```
fiboNth(5)
= fiboNth(3) + fiboNth(4)
     |               |
     |          fiboNth(2) + fiboNth(3)
     |               1    +     |
     |                    fiboNth(1) + fiboNth(2)
     |                         0    +     1    = 1
     |
fiboNth(1) + fiboNth(2)
     0     +     1     = 1

fiboNth(5) = 1 + (1+1+1) = ... = 3
```

**Recursive tree (n=5):**

```
                 fiboNth(5)
                /          \
         fiboNth(3)      fiboNth(4)
         /       \       /        \
    fiboNth(1) fiboNth(2) fiboNth(2) fiboNth(3)
        0         1         1       /      \
                                fiboNth(1) fiboNth(2)
                                    0         1
```

**Ek problem:** Is approach mein **same calculations baar baar hoti hain** — jaise `fiboNth(3)` do baar call hoti hai. Isliye ye approach large n ke liye slow hoti hai (O(2^n) time complexity). Isko optimize karne ke liye **memoization** use karte hain.

**✅ Output:**
```
fiboNth(1)  → 0
fiboNth(2)  → 1
fiboNth(5)  → 3
fiboNth(7)  → 8
fiboNth(10) → 34
```

---

## Q10 — GCD : Do numbers ka Greatest Common Divisor (Method 1 — Brute Force)

```javascript
let a = 56, b = 98;

function gcd(a, b) {
    let i = Math.floor(Math.min(a, b) / 2)   // shuruaat aadhe se
    function findGCD(i) {
        if (i == 1) return i                  // Base case: 1 hamesha GCD hota hai
        if ((a % i) == 0 && (b % i) == 0) return i  // dono se divide ho → GCD mila
        return findGCD(i - 1)                 // nahi mila → ek chhota try karo
    }
    return findGCD(i)
}
```

**Logic:** Chhote number ka aadha sabse bada possible GCD ho sakta hai. Wahaan se neeche aate hain — pehli value jo dono ko divide kare woh GCD hai.

**Trace (a=56, b=98):**

```
min(56,98) = 56 → start i = 28

findGCD(28): 56%28=0, 98%28=14 ✗ → findGCD(27)
findGCD(27): 56%27=2 ✗ → findGCD(26)
findGCD(26): 56%26=4 ✗ → ...
...
findGCD(14): 56%14=0, 98%14=0 ✓ → MILA! return 14
```

**Stack frames:**
```
┌────────────────┐
│  findGCD(14)   │ ← TOP — FOUND! return 14
│  findGCD(15)   │
│  findGCD(16)   │
│     ...        │
│  findGCD(28)   │ ← BOTTOM — shuru yahan se hua
└────────────────┘
```

**✅ Output: `14`**

---

## Q11 — GCD : Method 2 — Subtraction Method (Euclidean Algorithm)

```javascript
let a = 123456, b = 789012;

function gcd(a, b) {
    if (a == b) return a               // Base case: dono same ho gaye → wahi GCD
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let d = max - min                  // bade mein se chhhota ghataao
    return gcd(d, min)                 // naya pair: difference aur chhota number
}
```

**Logic (Euclidean Property):** GCD(`a`, `b`) = GCD(`a-b`, `b`) jab `a > b`. Yeh tab tak chalte rehte hain jab dono equal ho jayein — wahi GCD hota hai.

**Trace (a=56, b=98) — simple example:**

```
gcd(56, 98)  → max=98, min=56, d=42 → gcd(42, 56)
gcd(42, 56)  → max=56, min=42, d=14 → gcd(14, 42)
gcd(14, 42)  → max=42, min=14, d=28 → gcd(28, 14)
gcd(28, 14)  → max=28, min=14, d=14 → gcd(14, 14)
gcd(14, 14)  → a==b → BASE CASE → return 14
```

**Method 1 vs Method 2:**

|                    | Brute Force           | Subtraction                        |
| ------------------ | --------------------- | ---------------------------------- |
| Approach           | i ko 1-1 ghataata hai | difference nikalta rehta hai       |
| a=56, b=98         | ~14 calls             | 5 calls                            |
| a=123456, b=789012 | ~61728 calls          | bahut zyada (bade numbers pe slow) |
| Best for           | chhote numbers        | medium numbers                     |

**✅ Output:**
```
gcd(56, 98)         → 14
gcd(123456, 789012) → 12
```

---

## Q12 — GCD of Min and Max element of Array

```javascript
let arr = [12, 15, 21, 30]
let a = Math.min(...arr), b = Math.max(...arr)
// a = 12, b = 30

function gcd(a, b) {
    if (a == b) return a
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let dif = max - min
    return gcd(dif, min)
}
console.log(gcd(a, b));
```

**Logic:** Pehle array mein se min aur max nikalo, phir unka GCD subtraction method se nikalo.

**Trace (a=12, b=30):**

```
gcd(12, 30) → max=30, min=12, dif=18 → gcd(18, 12)
gcd(18, 12) → max=18, min=12, dif=6  → gcd(6, 12)
gcd(6, 12)  → max=12, min=6,  dif=6  → gcd(6, 6)
gcd(6, 6)   → a==b → BASE CASE → return 6
```

**Verify karo:**
```
12 = 2 × 6     ✓
15 = 2.5 × 6   ✗ (15 ka GCD alag hai, par hum sirf min aur max le rahe hain)
21 = 3.5 × 6   ✗
30 = 5 × 6     ✓

GCD(12, 30) = 6  ✓
```

**Note:** Yeh function sirf min aur max ka GCD deta hai — pure array ka GCD nahi. Agar poore array ka GCD chahiye toh har adjacent pair pe gcd call karni hogi.

**✅ Output: `6`**

---

## Q13 — GCD : Method 3 — Modulo / Euclidean (Sabse Efficient)

```javascript
// Method 3: Modulo — Euclidean Algorithm
function gcd(a, b) {
    if (b == 0) return a          // Base case: b zero ho gaya → a hi GCD hai
    if (a > b) return gcd(b, a % b)
    return gcd(a, b % a)
}
```

**Logic:** `%` (modulo) operator ek hi step mein number ko bahut chhhota kar deta hai. Yeh Euclid ka original algorithm hai — 300 BC se chala aa raha hai.

**Property:** `GCD(a, b) = GCD(b, a % b)`

Matlab bade number ko chhote se divide karo, remainder aur chhota number — yahi nayi pair ban jaati hai. Remainder hamesha chhota hota hai, isliye bahut jaldi base case aa jaata hai.

**Trace (a=10, b=48):**

```
gcdMod(10, 48) → b>a  → gcdMod(10, 48%10) = gcdMod(10, 8)
gcdMod(10, 8)  → a>b  → gcdMod(8,  10%8)  = gcdMod(8,  2)
gcdMod(8,  2)  → a>b  → gcdMod(2,  8%2)   = gcdMod(2,  0)
gcdMod(2,  0)  → b==0 → BASE CASE → return 2
```

**✅ Output: `2`** (sirf **4 calls** mein!)

---

## Q14 — GCD : Method 2 revisited — Subtraction vs Modulo Comparison

```javascript
// Method 2: Subtraction
let a = 10, b = 48
function gcd(a, b) {
    if (a == b) return a          // Base case: dono equal → wahi GCD
    if (a > b) return gcd(a - b, b)
    return gcd(a, b - a)
}
console.log(gcd(a, b));
```

**Trace (a=10, b=48):**

```
gcdSub(10, 48) → b>a → gcdSub(10, 38)
gcdSub(10, 38) → b>a → gcdSub(10, 28)
gcdSub(10, 28) → b>a → gcdSub(10, 18)
gcdSub(10, 18) → b>a → gcdSub(10, 8)
gcdSub(10, 8)  → a>b → gcdSub(2,  8)
gcdSub(2,  8)  → b>a → gcdSub(2,  6)
gcdSub(2,  6)  → b>a → gcdSub(2,  4)
gcdSub(2,  4)  → b>a → gcdSub(2,  2)
gcdSub(2,  2)  → a==b → BASE CASE → return 2
```

**✅ Output: `2`** (lekin **9 calls** mein)

---

## Dono Methods ka Direct Comparison

|                 | Modulo Method       | Subtraction Method       |
| --------------- | ------------------- | ------------------------ |
| Base case       | `b == 0`            | `a == b`                 |
| Reduction       | `a % b` (remainder) | `max - min` (difference) |
| Time Complexity | **O(log min(a,b))** | **O(max(a,b) / gcd)**    |
| Speed           | ⚡ Fast              | 🐢 Slow on large numbers  |

**Real numbers pe fark:**

| Input               | Modulo calls | Subtraction calls |
| ------------------- | ------------ | ----------------- |
| gcd(10, 48)         | 4            | 9                 |
| gcd(56, 98)         | 4            | 5                 |
| gcd(123456, 789012) | 12           | 32+               |

**Kyun modulo itna fast hai?**

```
Subtraction: 48 → 38 → 28 → 18 → 8  (ek ek ghata raha hai, slow)
Modulo:      48 → 8              (ek hi step mein! 48%10 = 8)
```

`%` operator ek hi step mein woh kaam karta hai jo subtraction ko kayi steps mein karna padta — isliye log(n) complexity aati hai.

**Conclusion:** Jab bhi GCD nikalna ho — **Modulo method use karo**. Subtraction method sirf samajhne ke liye achhi hai, production mein hamesha Euclidean (modulo) prefer karte hain.

---

## Sieve of Eratosthenes — n tak ke saare prime numbers nikalo

```javascript
let n = 50  // (prompt se aata hai)

let prime = new Array(n + 1).fill(true)  // sab ko pehle prime maan lo

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
        for (let j = i * i; j <= n; j += i) {
            prime[j] = false    // i ka multiple → composite hai
        }
    }
}

for (let i = 2; i < prime.length-1; i++) {
    if (prime[i]) {
        process.stdout.write(i + ' ')
    }
}
```

**Logic — Sieve kya hai?**

Sieve ka matlab hota hai "chalni" — us chalni se prime numbers ko baaki sab se alag karna. Idea simple hai:

Pehle sab numbers ko prime maan lo. Phir 2 se shuru karo — jo bhi prime milta hai uske **saare multiples ko mark karo false** (kyunki woh prime nahi ho sakte — unka ek factor toh pehle se hai). End mein jo bhi `true` hain woh saare primes hain.

**2 key tricks jo isko efficient banate hain:**

**Trick 1 — `i*i` se start karo, `i*2` se nahi:**

```
i=2 ke liye: 4, 6, 8, 10... (i*i = 4 se shuru)
i=3 ke liye: 9, 12, 15... (i*i = 9 se shuru)
             ↑
             6 skip kiya — 6 = 2×3, ye already i=2 ne mark kar diya tha!
```

`j = i*i` isliye — `i` se chhoti saari values already pehle ke kisi prime ne mark kar di hoti hain.

**Trick 2 — `Math.sqrt(n)` tak hi outer loop:**

```
n=50 → sqrt(50) ≈ 7.07 → i sirf 2,3,5,7 tak chalega
```

Kyunki agar koi number `n` composite hai aur uska ek factor `sqrt(n)` se bada hai, toh doosra factor zaroor `sqrt(n)` se chhota hoga — aur usne pehle hi us number ko mark kar diya hoga.

**Step-by-step trace (n=20):**

```
Init:   [2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20]
        (sab true)

i=2 (prime[2]=true):
  j = 4,6,8,10,12,14,16,18,20 → false
  [2 3 x 5 x 7 x 9  x 11  x 13  x 15  x 17  x 19  x]

i=3 (prime[3]=true):
  j = 9,12,15,18 → false  (4,6 pehle hi mark the)
  [2 3 x 5 x 7 x x  x 11  x 13  x  x  x 17  x 19  x]

i=4: prime[4]=false → skip
sqrt(20) ≈ 4.47 → loop khatam

Final primes: 2 3 5 7 11 13 17 19
```

**Array state visualization:**

```
Index:   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
Start: [ F  F  T  T  T  T  T  T  T  T   T  T  T  T  T  T  T  T  T  T  T]
i=2:   [ F  F  T  T  F  T  F  T  F  T   F  T  F  T  F  T  F  T  F  T  F]
i=3:   [ F  F  T  T  F  T  F  T  F  F   F  T  F  T  F  F  F  T  F  T  F]
                ↑  ↑     ↑     ↑        ↑        ↑              ↑     ↑
             Yeh sab TRUE hain → Primes!
```

**Time & Space Complexity:**

| | Complexity | Matlab |
|--|-----------|--------|
| Time | **O(n log log n)** | Almost linear — bahut fast |
| Space | **O(n)** | n size ka array chahiye |

Single number ke liye prime check karna `O(√n)` hota hai. Sieve se ek saath **saare** primes `O(n log log n)` mein milte hain — agar bohot saare primes chahiye toh sieve hamesha better hai.

**✅ Output:**
```
n=20 → 2 3 5 7 11 13 17 19
n=30 → 2 3 5 7 11 13 17 19 23 29
n=50 → 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
```
---

## Q15 — Integer Square Root using Binary Search

Do alag methods hain — dono ka output same hai, fark sirf condition mein hai.

---

### Method 1 — `mid <= Math.floor(n / mid)` (Division-based)

```javascript
function sqr(n) {
    let first = 1, last = n, ans = 0
    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (mid <= Math.floor(n / mid)) {  // ← division se check
            ans = mid
            first = mid + 1
        } else {
            last = mid - 1
        }
    }
    return ans
}
```

### Method 2 — `mid * mid <= n` (Multiplication-based)

```javascript
function mySqrt(n) {
    let first = 1, last = n, ans = 0
    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (mid * mid <= n) {              // ← multiplication se check
            ans = mid
            first = mid + 1
        } else {
            last = mid - 1
        }
    }
    return ans
}
```

---

**Logic — Binary Search pe kyon?**

Square root `√n` kisi bhi number ka `1` aur `n` ke beech hota hai. Hum binary search se yeh range narrow karte jaate hain:

- `mid * mid <= n` → matlab mid chhota hai ya theek hai → `ans = mid`, aur aage dekho (`first = mid+1`)
- `mid * mid > n`  → mid zyada bada hai → `last = mid-1`

Har iteration mein range **aadhi** ho jaati hai → `O(log n)` time.

---

**Dono conditions mein fark:**

| | Method 1 | Method 2 |
|--|----------|----------|
| Condition | `mid <= floor(n/mid)` | `mid*mid <= n` |
| Operation | Division | Multiplication |
| Overflow risk | ✅ Safe (large n pe bhi) | ⚠️ Very large n pe `mid*mid` overflow ho sakta hai |
| Readability | Thoda confusing | ✅ Seedha samajh aata hai |

**Overflow example (large n):**
```
n = 2147483647, mid = 46341
mid * mid = 2147488281  ← integer overflow ho sakta hai kuch languages mein
n / mid   = 46340       ← safe rehta hai
```

JavaScript mein numbers 64-bit float hote hain toh overflow nahi hota practically — lekin Java, C++ mein Method 1 zyada safe hoti hai.

---

**Trace (n=26):**

```
√26 ≈ 5.09 → integer answer = 5

Step 1: first=1,  last=26, mid=13 → 13*13=169 > 26 → last=12
Step 2: first=1,  last=12, mid=6  → 6*6=36   > 26 → last=5
Step 3: first=1,  last=5,  mid=3  → 3*3=9  ≤ 26 → ans=3, first=4
Step 4: first=4,  last=5,  mid=4  → 4*4=16 ≤ 26 → ans=4, first=5
Step 5: first=5,  last=5,  mid=5  → 5*5=25 ≤ 26 → ans=5, first=6
        first(6) > last(5) → loop khatam
```

**Search space ka narrowing:**

```
[1 ............... 26]    mid=13 ✗ → right half hatao
[1 ....... 12]            mid=6  ✗ → right half hatao
[1 .. 5]                  mid=3  ✓ → ans=3
   [4 . 5]                mid=4  ✓ → ans=4
      [5]                 mid=5  ✓ → ans=5 ← FINAL
```

**`ans` variable kyun chahiye?**

Directly return nahi kar sakte kyunki hume **floor** chahiye — matlab `mid*mid <= n` wali last valid value. `ans` mein hum best valid mid store karte rehte hain, aur loop khatam hone pe return karte hain.

**✅ Output:**

```
mySqrt(4)   → 2   (√4 = 2.0 exact)
mySqrt(8)   → 2   (√8 ≈ 2.82, floor = 2)
mySqrt(9)   → 3   (√9 = 3.0 exact)
mySqrt(26)  → 5   (√26 ≈ 5.09, floor = 5)
mySqrt(50)  → 7   (√50 ≈ 7.07, floor = 7)
mySqrt(100) → 10  (√100 = 10.0 exact)
```