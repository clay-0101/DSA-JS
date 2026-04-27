# Recursion — Complete Guide

---

## Recursion kya hoti hai? (Definition)

Recursion ek technique hai jisme **ek function khud apne aap ko call karta hai** jab tak koi specific condition (base case) meet nahi ho jaati.

Seedha example socho: Ek mirror ke saamne doosra mirror rakh do — infinite reflection dikhega. Wahi recursion hai — function apne andar apna hi ek chota version call karta rehta hai, jab tak kaam poora nahi ho jaata.

```javascript
function recursive(n) {
    if (n == 0) return;       // ← Base case: yahan ruk jaao
    console.log(n);
    recursive(n - 1);         // ← Khud ko hi call kiya
}
```

---

## Key Features of Recursion

**1. Base Case (Ruk jaane ki condition)**
Har recursive function mein ek base case hona chahiye. Yahi woh point hai jahan function wapas aana shuru karta hai. Iske bina function **infinite loop** mein chala jayega aur stack overflow ho jayega.

**2. Recursive Case (Chota karo, call karo)**
Har baar function apne aap ko call karta hai lekin problem **thodi choti** ho jaati hai (n-1, n/2, etc.) — yahi ensure karta hai ki kabhi na kabhi base case hit hoga.

**3. Call Stack**
Har function call memory mein ek **stack frame** leta hai. Jab base case hit hota hai, sab frames ek ek karke pop hote hain (LIFO — Last In First Out).

**4. Trust karo apne function pe**
Recursion likhte waqt sirf current step socho. Baaki ka kaam recursive call sambhal lega — isi trust pe recursion kaam karta hai.

---

## Loop se kaam ho sakta hai — phir Recursion kyun?

Ye sawaal bilkul sahi hai. Zyada tar recursive problems loop se bhi solve ho sakti hain. Toh recursion kyun seekhein?

**Loop theek hota hai jab:** Ek seedha sequence hai, koi branching nahi.

**Recursion zaroori hota hai jab:**

- **Tree structures** — File system, DOM tree, family tree. Har folder ke andar aur folders ho sakte hain. Loop se iterate karna mushkil ho jaata hai kyunki depth pata nahi hoti.
- **Divide & Conquer** — Merge Sort, Binary Search. Problem ko do halves mein todna aur dono pe same kaam karna — recursion ke bina yeh likhna bahut complex ho jaata hai.
- **Backtracking** — Maze solve karna, Sudoku, N-Queens. Galat raaste se wapas aana aur doosra try karna — yeh naturally recursion se hi hota hai.
- **Code readability** — Kuch problems recursion se itni saaf likhti hain ki loop wala solution padh bhi nahi paate. Fibonacci, factorial, tree traversal — yeh sab recursion mein 3-4 lines mein likhe jaate hain.

**Rule of thumb:** Jab problem mein "same kaam, choti problem pe" wala pattern dikhe — recursion socho.

---

## Stack Memory mein kya hota hai?

Jab bhi koi function call hota hai — recursive ho ya normal — OS **call stack** mein uska ek **stack frame** push karta hai. Is frame mein hota hai:

- Function ke local variables (n, i, etc.)
- Return address (kahaan wapas jaana hai kaam khatam hone ke baad)
- Caller ka state (jo function ne call kiya tha, uski memory)

**Push (Call):** Naya frame stack ke upar aata hai
**Pop (Return):** Kaam khatam hone ke baad frame nikal jaata hai

```
printHello(3) call kiya:

STACK (upar se neeche)         Memory
┌─────────────────────┐
│   printHello(0)     │  ← TOP — yahan BASE CASE hit hua, return
│   printHello(1)     │  ← wait kar raha hai
│   printHello(2)     │  ← wait kar raha hai
│   printHello(3)     │  ← BOTTOM — sabse pehle call hua tha
└─────────────────────┘

Jab return hota hai:
printHello(0) pop → printHello(1) pop → printHello(2) pop → printHello(3) pop
Stack khaali!
```

**Danger:** Agar base case nahi likha, stack frames badhte jaate hain aur ek point pe
`RangeError: Maximum call stack size exceeded` aata hai — yahi **Stack Overflow** hai.

---

## Q1 — printHello(n) : n baar "Hello" print karo

```javascript
function printHello(n) {
    if(n == 0) return            // Base case
    console.log('Hello')
    printHello(--n)              // Recursive call (--n matlab n pehle ghata, phir call)
}
```

**Logic:** Har call mein ek "Hello" print karo, phir n-1 se call karo. n==0 par ruk jaao.

**Trace (n=3):**

```
printHello(3) → print "Hello" → call printHello(2)
  printHello(2) → print "Hello" → call printHello(1)
    printHello(1) → print "Hello" → call printHello(0)
      printHello(0) → BASE CASE → return
    ← return
  ← return
← return
```

**Stack ka haal (n=3):**

```
Jate waqt (PUSH):          Aate waqt (POP):
┌──────────────┐           Stack dheere dheere khaali hoti hai
│ printHello(0)│ ← TOP     printHello(0) nikla
│ printHello(1)│           printHello(1) nikla
│ printHello(2)│           printHello(2) nikla
│ printHello(3)│ ← BOTTOM  printHello(3) nikla
└──────────────┘
```

**✅ Output (n=3):**
```
Hello
Hello
Hello
```

---

## Q2 — printNumbers (1 se n tak — Ascending)

```javascript
function printNumbers(n) {
   if(n == 0) return             // Base case
   printNumbers(n-1)             // PEHLE andar jao
   process.stdout.write(n+' ')   // BAAD MEIN print karo (wapas aate waqt)
}
```

**Key insight:** `printNumbers(n-1)` ke BAAD print ho raha hai. Matlab print tab hoga jab function wapas aa raha hoga — isliye output ascending order mein milta hai (chhota pehle, bada baad mein).

**Trace (n=4):**

```
printNumbers(4)
  printNumbers(3)
    printNumbers(2)
      printNumbers(1)
        printNumbers(0) → BASE CASE → return
      ← print 1
    ← print 2
  ← print 3
← print 4
```

**Stack ka haal:**

```
PUSH phase (kuch print nahi):    POP phase (print hota hai):
┌──────────────────┐             printNumbers(0) nikla
│ printNumbers(0)  │ ← TOP       printNumbers(1) nikla → print 1
│ printNumbers(1)  │             printNumbers(2) nikla → print 2
│ printNumbers(2)  │             printNumbers(3) nikla → print 3
│ printNumbers(3)  │             printNumbers(4) nikla → print 4
│ printNumbers(4)  │ ← BOTTOM
└──────────────────┘
```

**Trick:** Recursive call ke BAAD print karo → Ascending (wapas aate waqt)

**✅ Output (n=4):**
```
1 2 3 4
```

---

## Q3 — printNumbers (n se 1 tak — Descending)

```javascript
function printNumbers(n) {
   if(n == 0) return              // Base case
   process.stdout.write(n+' ')    // PEHLE print karo
   printNumbers(--n)              // BAAD MEIN andar jao
}
```

**Key insight:** Print PEHLE ho raha hai, recursive call BAAD mein. Matlab jaate waqt print hoga — isliye bada pehle, chota baad mein → Descending.

**Trace (n=4):**

```
printNumbers(4) → print 4 → call printNumbers(3)
  printNumbers(3) → print 3 → call printNumbers(2)
    printNumbers(2) → print 2 → call printNumbers(1)
      printNumbers(1) → print 1 → call printNumbers(0)
        printNumbers(0) → BASE CASE → return
      ← return
    ← return
  ← return
← return
```

**Q2 vs Q3 comparison:**

```
Q2 (Ascending):             Q3 (Descending):
printNumbers(n-1)           process.stdout.write(n)
process.stdout.write(n)     printNumbers(--n)
↑ pehle andar, baad mein   ↑ pehle print, baad mein andar
  print → 1 2 3 4             print → 4 3 2 1
```

**Trick:** Recursive call ke PEHLE print karo → Descending (jaate waqt)

**✅ Output (n=4):**
```
4 3 2 1
```

---

## Q4 — sumUpToN(n) : 1 se n tak ka sum

```javascript
function sumUpToN(n) {
    if(n == 1) return n             // Base case: n=1 pe return 1
    return n + (sumUpToN(n-1))      // n + chote part ka sum
}
```

**Logic:** `sumUpToN(4)` = `4 + sumUpToN(3)` = `4 + 3 + sumUpToN(2)` = `4+3+2+1`

**Trace (n=4):**

```
sumUpToN(4)
= 4 + sumUpToN(3)
       = 3 + sumUpToN(2)
              = 2 + sumUpToN(1)
                     = 1   ← BASE CASE
              = 2 + 1 = 3
       = 3 + 3 = 6
= 4 + 6 = 10
```

**Stack + return values:**

```
PUSH phase:                  POP phase (return values):
┌──────────────┐             sumUpToN(1) → 1
│ sumUpToN(1)  │ ← TOP       sumUpToN(2) → 2+1 = 3
│ sumUpToN(2)  │             sumUpToN(3) → 3+3 = 6
│ sumUpToN(3)  │             sumUpToN(4) → 4+6 = 10
│ sumUpToN(4)  │ ← BOTTOM
└──────────────┘
```

**Verification:**
- `sumUpToN(1)` = 1
- `sumUpToN(2)` = 2+1 = 3
- `sumUpToN(3)` = 3+3 = 6
- `sumUpToN(4)` = 4+6 = **10**
- `sumUpToN(5)` = 5+10 = **15**

**✅ Output:**
```
sumUpToN(4) → 10
sumUpToN(5) → 15
```

---

## Quick Revision Table

| Cheez | Kya hai |
|-------|---------|
| Base case | Woh condition jahan function ruk jaata hai — MUST hona chahiye |
| Recursive case | Khud ko choti problem ke saath call karna |
| Stack frame | Har call ke liye memory mein ek jagah banti hai |
| Stack overflow | Base case nahi hai ya nahi hit ho raha — frames badte jaate hain |
| LIFO | Last In First Out — jo sabse baad push hua, sabse pehle pop hoga |
| Ascending trick | Recursive call ke BAAD print karo |
| Descending trick | Recursive call ke PEHLE print karo |
