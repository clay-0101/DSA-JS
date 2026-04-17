a = 10 
console.log(a);
// 1. Engine ka Search (Scope Chain)
// Interview mein bolo: "Jab hum a = 10 likhte hain, toh JavaScript engine sabse pehle use Local Scope mein dhoondta hai. Jab use wahan koi declaration (let, var, ya const) nahi milti, toh wo Scope Chain ke zariye upar jata hai aur Global Scope tak check karta hai."

// 2. Implicit Global Creation
// "Agar Global Scope mein bhi wo variable nahi milta, toh JavaScript engine error dene ki bajaye khud se us variable ko Global Object (window object) ki ek property bana deta hai. Is process ko Implicit Global Variable banana kehte hain."

// 3. Kyun Possible Hai? (The 'Why')
// "Ye isliye possible hai kyunki JavaScript ka default behavior thoda 'forgiving' (maaf karne wala) hai. Wo purane code (legacy code) ko support karne ke liye bina declaration ke variables allow kar deta hai."