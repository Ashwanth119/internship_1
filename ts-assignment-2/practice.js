// Interface
var student = {
    name: 'Ashwanth',
    age: 22,
    gender: 'male',
    email: 'xyz@gmail.com'
    // rollno:number:2;
};
console.log(student); // { name: 'Ashwanth', age: 22, gender: 'male', email: 'xyz@gmail.com' }
var emp = {
    name: 'Sameer',
    age: 23,
    gender: 'male',
    email: 'abc@gmail.com'
};
console.log(emp); // { name: 'Sameer', age: 23, gender: 'male', email: 'abc@gmail.com' }
var emp_union = {
    // email:'az@gmail.com',
    name: 'hello',
    age: 30,
    gender: 'male',
    // college:'college'
};
console.log(emp_union);
var obj = {
    name: 'name',
    age: 25,
    gender: 'female',
    email: 'email@gmail.com',
    // address:'Hyderabad', // address is an optional parameter
};
obj.name = 'obj1'; // we can change name, because we didn't mention it as readonly
// obj.email='klm@gmail.com'; // Error --> Cannot assign to 'email' because it is a read-only property.
console.log(obj);
// Assertion types
var str = 'I am string';
var str_len = str.length;
// let str_len:number=(<string>str).length; // older version
console.log(str_len);
