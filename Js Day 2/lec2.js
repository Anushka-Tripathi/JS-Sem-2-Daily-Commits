// Hoisting
a = 10;
console.log(a);
var a;

// Filter Method
let marks = [15, 18, 20, 24, 26, 30, 32, 35, 36, 40];

let result = marks.filter((x)=>{
    if(x>=16){
        console.log(x, "PASSED")
    }
    else{
        console.log(x, "FAILED")
    }
});

// For Loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum+arr[i];
}
console.log(sum);

// Nested For Loop
for(let i = 0; i <= 5; i++){
    for(let j = 0; j <= i; j++){
        console.log(j);
    }
    console.log(i);
}
