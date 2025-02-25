// Data Types
// 1. number
var var_num = 10;
console.log(var_num); // 10
console.log(typeof (var_num)); // number
console.log(typeof var_num); // number
// 2. bigint
// "target": "es2016" value in tsconfig.json should not be lower than 2020 
var var_bigint = 100100n; // BigInt literals are not available when targeting lower than ES2020.
// let var_bigint=BigInt(100100);
console.log(var_bigint); // 100100n
console.log(typeof var_bigint); // bigint
// 3. boolean
var var_bool = true;
console.log(var_bool); // 10
console.log(typeof var_bool); // boolean
// 4. string
var var_str = 'Welcome to strings';
console.log(var_str); // Welcome to strings
console.log(typeof var_str); // string
// 5. null
var var_null = null;
console.log(var_null); // null
console.log(typeof var_null); // object
// 6. any
var var_any;
console.log(var_any); // undefined
console.log(typeof var_any); // undefined
var_any = 'Hi';
console.log(var_any); // Hi
console.log(typeof var_any); // string
var_any = 100;
console.log(var_any); // 100
console.log(typeof var_any); // number
// 7. unknown
var var_unknown;
console.log(var_unknown); // undefined
console.log(typeof var_unknown); // undefined
var_unknown = 'Hi';
console.log(var_unknown); // Hi
console.log(typeof var_unknown); // string
var_unknown = 1024;
console.log(var_unknown); // 1024
console.log(typeof var_unknown); // number
// Difference between any and unknown
// 1. Assigning any and unknown type variables to others.
// let x:number=var_unknown; // Type 'unknown' is not assignable to type 'number'
var y = var_any; // we can assign
// --> any is not type safe
// --> unknown is type safe
// 2. Performing operations on any and unknown type variables.
console.log(Math.pow(var_any, 2));
// console.log(var_any.toUpperCase()); // Run Time Error --> TypeError: var_any.toUpperCase is not a function.
// console.log(var_unknown**2); // 'var_unknown' is of type 'unknown'.
if (typeof var_unknown === 'number')
    console.log(Math.pow(var_unknown, 2));
// console.log(var_unknown.toUpperCase()); // 'var_unknown' is of type 'unknown'.
if (typeof var_unknown === 'string')
    console.log(var_unknown.toUpperCase()); // 'var_unknown' is of type 'unknown'.
// --> In case of any, we can directly use methods
// --> In case of unknown, we should first check the type of varaible before performing operation.
// Use any if you don’t care about type safety (not recommended).
// Use unknown if you want flexibility but with type safety.
var fun_unknown = function add(x, y) {
    if (x === void 0) { x = 20; }
    if (y === void 0) { y = 30; }
    console.log(x + y);
};
// fun_unknown.add(); // 'fun_unknown' is of type 'unknown'.
// 8. undefined
var var_undefined;
console.log(var_undefined); // undefined
console.log(typeof var_undefined); // undefined
// var_undefined='hi'; // we cannot assign other datatype values to the explicitly undefined variable.
// Types used in functions
// 9. void --> represents functions that return nothing.
var var_void;
console.log(var_void); // undefined
console.log(typeof var_void); // undefined
function fun_void(name) {
    console.log("Name is", name);
}
fun_void("Ashwanth");
// 10. never --> represents functions that never return (throws error or infinite-loop)
var var_never;
// console.log(var_never); // error --> Variable 'var_never' is used before being assigned.
// console.log(typeof var_never); // error --> Variable 'var_never' is used before being assigned.
// function fun_never_infinteLoop(name:string):never{
//     while(true){
//         console.log("Name is",name);
//     }
// }
// fun_never_infinteLoop("Ashwanth");
function fun_never_error(name) {
    throw new Error("Throw Error");
}
// fun_never_error("Ashwanth"); // Throw Error
// parameters
// optional and default parameters
// 1. sum()
function sum(param1, param2) {
    if (param2 === void 0) { param2 = 200; }
    if (param1)
        console.log(param1 + param2);
    else
        console.log(param2);
}
sum(1, 20); // 21
sum(); // 200
sum(10); // 210
sum(undefined, 20); // 20
// 2. mul()
function mul(param1, param2) {
    if (param2 === void 0) { param2 = 200; }
    if (param1 !== undefined)
        console.log(param1 * param2);
    else
        console.log(param2);
}
mul(1, 20); // 20
mul(); // 200
mul(0, 10); // 0
mul(undefined, 20); // 20
// rounding errors
var x = 0.1 + 0.2;
console.log(x); // 0.30000000000000004 why??? ---> rounding errors
console.log(x.toFixed(1)); // Output: 0.3 (rounded to 1 decimal place)
console.log(2.01 + 2.02); // 4.029999999999999 why??? ---> rounding errors
console.log((2.01 + 2.02).toFixed(2)); // 4.03 (rounded to 2 decimal place)
// using | for multiple types
var var_or;
var_or = 100;
console.log(var_or); // 100
console.log(typeof var_or); // number
var_or = 'Hello';
console.log(var_or); // Hello
console.log(typeof var_or); // string
// var_or=true; // Type 'boolean' is not assignable to type 'string | number'.
var var_or_1;
var_or_1 = "String";
var_or_1 = 10;
var_or_1 = true;
