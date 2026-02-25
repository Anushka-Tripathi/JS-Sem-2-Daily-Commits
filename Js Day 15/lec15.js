let myPromise = new Promise((resolve, reject)=>{
    let data = "This is my data";
    if(data){
        resolve(data);
    }else{
        reject("Error: no data found");
    }
});
//console.log(myPromise);

myPromise.then((d)=>{
    console.log(d);
},(e)=>{
    console.log(e);
});