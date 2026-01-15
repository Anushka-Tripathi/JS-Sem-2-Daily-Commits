console.log({}+{}); // "[object Object][object Object]"
console.log([]+[]); // ""
console.log({}+[]); // "[object Object]"

console.log(!!"false"); // true
console.log(!![]); // true
console.log(!!{}); // true

typeof(Nan) // "number"
typeof(null) // "object"
typeof([]) // "object"
typeof({}) // "object"

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log([] == 0); // true
console.log([] === 0); // false
console.log("" == []); // true
console.log("" === []); // false
console.log([1,2] == "1,2"); // true
console.log([1,2] === "1,2"); // false

// Reduce Method
let arr = [1,2,3,4,5];
let sum = arr.reduce((acc, current) => acc + current);
console.log(sum); // 15