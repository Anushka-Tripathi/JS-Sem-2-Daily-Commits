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

// Remove duplicates from an array using these methods
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
while (dupArr.length > 0) {
    let element = dupArr.pop();
    let isDuplicate = false;
    for (let i = 0; i < uniqueArr.length; i++) {
        if (uniqueArr[i] === element) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        uniqueArr.unshift(element);
    }
}
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// Split even and odd numbers in given array using these methods
let evenNumbers = [];
let oddNumbers = [];
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (numArr.length > 0) {
    let num = numArr.pop();
    if (num % 2 === 0) {
        evenNumbers.unshift(num);
    } else {
        oddNumbers.unshift(num);
    }
}
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]
console.log("Odd numbers:", oddNumbers); // [1, 3, 5, 7, 9]

// Move all zeros to the end of the array using these methods
let arrayWithZeros = [0, 1, 0, 3, 12, 0, 5];
let nonZeroArr = [];
let zeroCount = 0;
while (arrayWithZeros.length > 0) {
    let num = arrayWithZeros.pop();
    if (num === 0) {
        zeroCount++;
    } else {
        nonZeroArr.unshift(num);
    }
}
while (zeroCount > 0) {
    nonZeroArr.push(0);
    zeroCount--;
}
console.log(nonZeroArr); // [1, 3, 12, 5, 0, 0, 0]