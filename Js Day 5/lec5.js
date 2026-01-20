// Push() Method
let fruits = ["apple", "banana"]
let newarr = fruits.push("orange")
console.log(fruits) // ["apple", "banana", "orange"]
console.log(newarr) // 3

// Pop() Method
let vegetables = ["carrot", "broccoli", "spinach"]
let removedVeggie = vegetables.pop()
console.log(vegetables) // ["carrot", "broccoli"]
console.log(removedVeggie) // "spinach"

// Shift() Method
let animals = ["dog", "cat", "rabbit"]
let firstAnimal = animals.shift()
console.log(animals) // ["cat", "rabbit"]
console.log(firstAnimal) // "dog"

// Unshift() Method
let colors = ["blue", "green"]
let newLength = colors.unshift("red")
console.log(colors) // ["red", "blue", "green"]
console.log(newLength) // 3

// Reverse the array using Push() and Pop() Method only no loops
let arr = [10, 20, 30];
let rev = [];
while (arr.length > 0) {
    rev.push(arr.pop());
}
console.log(rev); // [30, 20, 10]

// Remove all negative integers from given array and print only positive integers using these methods
let numbers = [-10, 15, -20, 25, 30, -5];
let positiveNumbers = [];
while (numbers.length > 0) {
    let num = numbers.pop();
    if (num > 0) {
        positiveNumbers.unshift(num);
    }
}
console.log(positiveNumbers); // [15, 25, 30]

// Check if the given array is a palindrome using these methods
let palindromeArr = [1, 2, 3, 2, 1];
let tempArr = [...palindromeArr];
let reversedArr = [];
while (tempArr.length > 0) {
    reversedArr.push(tempArr.pop());
}
let isPalindrome = true;
while (palindromeArr.length > 0) {
    if (palindromeArr.shift() !== reversedArr.shift()) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome); // true or false
