// Js Recap
console.log([2]==[2]);
console.log([2]===[2]);
console.log([]==[]);
console.log(null==undefined);
console.log(null===undefined);

console.log(1+"1");
console.log("1"-"1");

console.log(!false);
console.log(!"false");
console.log(!!"false");
console.log(!![]);

console.log([1,2]+[3,4]);
console.log([1,2]-[3,4]);
console.log(0.1+0.2===0.3);

//Synchronous JavaScript
function first(){
    console.log("first");
}
first();
function second(){
    console.log("second");
}
second();

//Asyncronous JavaScript
function sample(callback){
    console.log("sample");
    callback();
}

function demo(){
    console.log("demo");
}
sample(demo);