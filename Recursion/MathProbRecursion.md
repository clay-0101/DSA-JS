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