// // Explict binding

let person={
    f_name:"Ashwanth",
    l_name:"Thimmareddy",
    // age:21,
    getDetails(msg){
        console.log(msg,this.f_name,this.l_name);
    }
}
let student={
    f_name:"Ashwanth_student",
    l_name:"Thimmareddy",
    // age:21,
}

// // call()
person.getDetails('Hi'); // Hi Ashwanth Thimmareddy
person.getDetails.call(student,'Hello'); // Hello Ashwanth_student Thimmareddy

// apply()
person.getDetails.apply(student,['Hello']); // Hello Ashwanth_student Thimmareddy

// bind() returns a function
let fun=person.getDetails.bind(student,'Hello'); // Hello Ashwanth_student Thimmareddy
fun();

// callback

// Main function
const mainFunction=(callback)=>{
    setTimeout(()=>{
        callback([1, 2, 3, 4, 5]);
    }, 2000);
}

// Add function
const add=(array)=>{
    let sum=0;
    for(let i of array){
        sum+=i;
    }
    console.log(sum);
}

// Calling main function
mainFunction(add); // prints 15 after 2 seconds.

