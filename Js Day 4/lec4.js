// Map() Method
const nums = [2, 3, 4, 5];
const squared = nums.map(num => num * num);
console.log(squared); // [4, 9, 16, 25]

// Filter() Method
const mixedNums = [1, -2, 3, -4, 5];
const positiveNums = mixedNums.filter(num => num > 0);
console.log(positiveNums); // [1, 3, 5]

// Reduce() Method
const total = mixedNums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 3

// Find() Method
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: 'Bob' }


