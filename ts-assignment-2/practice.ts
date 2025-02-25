// Interface

interface person{
    name:string;
    age:number;
    gender:string;
}
interface person{
    readonly email:string;
}
let student:person={
    name:'Ashwanth',
    age:22,
    gender:'male',
    email:'xyz@gmail.com'
    // rollno:number:2;
}
console.log(student); // { name: 'Ashwanth', age: 22, gender: 'male', email: 'xyz@gmail.com' }

// Type
// 1. creating objects
type person1={
    name:string;
    age:number;
    gender:string;
}
type person1_ext={
    email:string;
}
type combined_inter=person1 & person1_ext; // creating intersection types
type combined_union=person1 | person1_ext; // creating union types

let emp:combined_inter={
    name:'Sameer',
    age:23,
    gender:'male',
    email:'abc@gmail.com'
}
console.log(emp); // { name: 'Sameer', age: 23, gender: 'male', email: 'abc@gmail.com' }

let emp_union:combined_union={
    // email:'az@gmail.com',
    name:'hello',
    age : 30,
    gender : 'male',
    // college:'college'
}
console.log(emp_union);

// Extending interfaces

interface person_imp extends person{
    address?:string;
}
let obj:person_imp={
    name:'name',
    age:25,
    gender:'female',
    email:'email@gmail.com',
    // address:'Hyderabad', // address is an optional parameter
}
obj.name='obj1'; // we can change name, because we didn't mention it as readonly
// obj.email='klm@gmail.com'; // Error --> Cannot assign to 'email' because it is a read-only property.
console.log(obj);


// Assertion types

let str:unknown='I am string';
let str_len:number=(str as string).length;
// let str_len:number=(<string>str).length; // older version
console.log(str_len);