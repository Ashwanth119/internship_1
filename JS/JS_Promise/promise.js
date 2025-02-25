// //promises

// let promise=new Promise((resolve,reject)=>{
//     let num=100;
//     if(num%2==0)
//         resolve("number is even");
//     else
//         reject("number is odd");
// });
// promise
//     .then((message)=>console.log(message))
//     .catch((error)=>console.log(error));

//setTimeout

// setTimeout(function(){console.log("Hello")},5000);

let arr=[10,20,30,40,50,60,70,80,90,100];
let arr_1=arr.splice(2,3);
console.log(arr);
console.log(arr_1);

let arr1=[10,20,30,40,50,60,70,80,90,100];
let arr1_1=arr1.slice(1,3);
console.log(arr1);
console.log(arr1_1);