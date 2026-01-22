// Objects
let user = {
    name: "Anushka",
    age: 20,
    email: "anushka@example.com"
};
console.log(user); // { name: 'Anushka', age: 20, email: 'anushka@example.com' }
console.log(user.name); // Anushka
console.log(user['age']); // 20
user.age = 21; // Update age
console.log(user.age); // 21
user.phone = "123-456-7890"; // Add phone
console.log(user.phone); // 123-456-7890
delete user.email; // Delete email
console.log(user); // { name: 'Anushka', age: 21, phone: '123-456-7890' }

let date = new Date();
console.log(date); // Current date and time
console.log(date.getFullYear()); // Current year

setInterval(() => {
    console.log(new Date().toLocaleTimeString()); // Current time every second
}, 1000);