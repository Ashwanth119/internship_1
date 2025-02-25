// Array Methods
let arr=[]; // let arr=new Array();
console.log(arr); // []

// 1. length
console.log(arr.length); // 0

// 2. push methods

// 2.1 push()
arr.push(10);
console.log(arr); // [ 10 ]

// 2.2 unshift() --> to add element at the starting of the array
arr.unshift(20);
console.log(arr); // [ 20, 10 ]

// 2.3 concat()
arr=arr.concat(30)
console.log(arr); // [ 20, 10, 30 ]


// 3. Removing elements from an array

// 3.1 pop()
arr.pop();
console.log(arr); // [ 20, 10 ]

// 3.2 shift() --> to remove elements from the front
arr.shift();
console.log(arr); // [ 10 ]



// // Object Methods
let obj={
    x:10,
    y:20,
    fun(){
        console.log(x,y);
    }
}
// 1. length
console.log(Object.keys(obj).length);

// // 2.