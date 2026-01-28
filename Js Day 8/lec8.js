var a = 10;
console.log(a);

function demo() {
    let b = 20;
    console.log(b);
}
demo();

// Call Stack Example
function firstFunction() {
    console.log("Inside First Function");
    secondFunction();
    console.log("Exiting First Function");
}
function secondFunction() {
    console.log("Inside Second Function");
    thirdFunction();
    console.log("Exiting Second Function");
}
function thirdFunction() {
    console.log("Inside Third Function");
}
firstFunction();
// Output:
// Inside First Function
// Inside Second Function
// Inside Third Function
// Exiting Second Function
// Exiting First Function
// The call stack helps in managing function calls and their execution contexts.
// Note: The above code demonstrates the concept of execution context and call stack in JavaScript.
// The global execution context is created when the script starts executing.
// Each function call creates a new execution context that is pushed onto the call stack.
// When the function execution is complete, its context is popped off the stack.
// The call stack follows the Last In First Out (LIFO) principle.

// Object Methods
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // John Doe

// Keys, Values, Entries
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(Object.keys(car)); // [ 'make', 'model', 'year' ]
console.log(Object.values(car)); // [ 'Toyota', 'Camry', 2020 ]
console.log(Object.entries(car)); // [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ] ]

// Freeze and Seal
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    pages: 300
};
console.log(Object.freeze(book)); // [object Object]
console.log(Object.seal(book)); // [object Object]