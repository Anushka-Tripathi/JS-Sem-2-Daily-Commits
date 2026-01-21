// trim() Method
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"

// split() Method
let sentence = "JavaScript is fun";
let words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "fun"]

// Find out the occurrence of r in the given string using split() method
let sampleStr = "tu meri mai tera mai teri tu mera";
let countR = sampleStr.split("r").length - 1;
console.log(countR); // 4

// Join() Method
let arr = ["JavaScript", "is", "awesome"];
let joinedStr = arr.join(" ");
console.log(joinedStr); // "JavaScript is awesome"

// Replace() Method
let originalStr = "I love cats";
let newStr = originalStr.replace("cats", "dogs");
console.log(newStr); // "I love dogs"

// Types of Functions

// Regular Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// Anonymous Function
setTimeout(function() {
    console.log("This is an anonymous function");
}, 1000);       // After 1 second, it will log: "This is an anonymous function"

// Callback Function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}
fetchData(function(data) {
    console.log("Received:", data);
});             // After 1 second, it will log: "Received: Sample Data"






