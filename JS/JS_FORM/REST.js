// // Rest Parameters
// function add(...args){
//     let sum=0;
//     for(const x of args){
//         sum+=x;
//     }
//     return sum;
// }
// console.log(add(1,2,3)); // 6
// console.log(add(1,2,3,4,5,6,7,8,9,10)); // 55

// // Nullish Coalescing operator

// // Before
// function getX(x){
//     console.log(x);
// }
// getX(10); // 10
// getX(); // undefined

// // After
// function getX(x){
//     console.log(x ?? "unknown");
// }
// getX(10); // 10
// getX(); // unknown

// // Optional chaining
// let obj={
//     name:"Ash",
//     id:"105"
// }
// console.log(obj.name); // Ash
// console.log(obj.class); // undefined
// console.log(obj?.class); // undefined (but used optional chaining for handling null and undefined values)

// // Ternary operator
// let x=1;
// x>=10? (x==10? console.log("x is equal to 10"):console.log("x is greater than 10")): console.log("x is less than 10");

// // Regular Expressions
// let regex_i=/hello/i;
// let regex=/hello/;
// // let regex=new RegExp("hello","i");
// console.log(regex_i.test("Hello world")); // true
// console.log(regex.test("Hello world")); // false
// let regex_1=/(Hi  )/;
// console.log(regex_1.test(" Hi "));
// let regex_2=/[A-Z]/;
// let regex_3=/[A-Z]/g;
// let match_1="Hello World!, Welcome to DIVAMI".match(regex_2);
// let match_2="Hello World!, Welcome to DIVAMI".match(regex_3);
// console.log(match_1);
// console.log(match_2);

