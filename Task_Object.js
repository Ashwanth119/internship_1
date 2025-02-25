
// 1. Write the code for each query

// create an empty object Employee
let Employee={}; // let Employee=new Object();

// Add the property 'name' with value 'John' and 'surname' with value 'Jacob'
Employee.name='John';   // Employee['name']='John';
Employee.surname='Jacob';   // Employee['surname']='Jacob';
console.log(Employee);   // { name: 'John', surname: 'Jacob' }

// change the value of name to 'Pete'
Employee.name='Pete'; // Employee['name']='Pete';
console.log(Employee); // { name: 'Pete', surname: 'Jacob' }

// Remove the property 'name' from the Employee
delete Employee.name; // delete Employee['name'];
console.log(Employee); // { surname: 'Jacob' }


// 2. Create a function isEmpty(obj), to return true if obj does not have any property, else return false

function isEmpty(obj){
    return Object.keys(obj).length ? false : true;
}

console.log(isEmpty(Employee)); // false

let empty_Obj={};

console.log(isEmpty(empty_Obj)); // true


// 3. Create a function  to sum all the salarries and store it in the variable sum, if salaries is empty it should return 0

let salaries={
    John : 100,
    Pete : 250,
    Rachael : 300
};

function sumOfSalaries(obj){
    let sum=0;
    for(let key in obj){
        sum+=obj[key];
    }
    return sum;
}

let sum=sumOfSalaries(salaries);
console.log(sum); // 650

sum=sumOfSalaries(empty_Obj);
console.log(sum); // 0


// 4. Create a function multipleNumeric(obj) that multiplies all the numeric property values with 2
let SystemData={
    Computer : 260,
    Mouse : 270,
    Boards : 'White Board'
}
console.log(SystemData); // { Computer: 260, Mouse: 270, Boards: 'White Board' }
function multipleNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key])=='number'){
            obj[key]=obj[key]*2;
        }
    }
}
multipleNumeric(SystemData);
console.log(SystemData); // { Computer: 520, Mouse: 540, Boards: 'White Board' }