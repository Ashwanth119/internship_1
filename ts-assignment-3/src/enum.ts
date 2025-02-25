/* enum 
 --> enum allows us to create a named constants i.e., collection of related values that could be of any type
 --> enum members must be of type string 
*/

/* enum types
    1. Numeric enums
    2. String enums
    3. Heterogenous or Hybrid enums
    4. computed enums
*/

// 1. Numeric enums --> numeric enums have reverse mapping feature i.e., allows us to map a value back to it's corresponding name

// Default numeric enums
// If we don't specify values, it'll start from 0
enum dir{
    north,
    south,
    east,
    west
}
console.log(dir); // to display dir enum
console.log(dir.north); // to display particular dir member value
// dir.north=15; // Cannot assign to 'north' because it is a read-only property.

// Initialized numeric enums
// We can specify the starting value, so it continues
enum dir1{
    north=10,
    south,
    east,
    west
}
console.log(dir1);

// Fully initialized numeric enums
// we can specify each value to enum members
enum dir2{
    north=10,
    south=20,
    east=30,
    west=40
}
console.log(dir2);
console.log(dir2['north']); // we can acces value by using member --> [Bracket notation]
console.log(dir2.north); // we can acces value by using member --> [Dot notation]
console.log(dir2[10]); // we can access member by using value

// 2. String enums
enum subjects{
    math='Mathematics',
    phy='Physics',
    chem='Chemistry',
    bio='Biology',
    eng='English'
}
console.log(subjects);
console.log(subjects.eng);
console.log(subjects['Biology']); // undefined 
// --> ts does not create reverse mapping for strings because multiple keys can have the same value.
// we can create custom reverse mapping by creating new objects 

// 3. Heterogenous or Hybrid enums --> contains both numeric and string enums
enum student{
    name='Ashwanth',
    age=22,
    gender='male',
    branch='CSE',
    section='E',
    marks=80
}
console.log(student);
console.log(typeof student); // object

// 4. computed enums --> allows us to generate values dynamically based on computations or function calls
enum Weekdays {
    Monday=0,
    Tuesday=Monday+5,
    Wednesday=Tuesday+10,
    Thursday=Wednesday+15,
    Friday=Thursday+20,
    Saturday=Friday+25,
    Sunday=Saturday+30
}
console.log(Weekdays);


/* Type Narrowing
    1. typeof
    2. instanceof
*/

// 1. typeof
let str:string|number='Hello';
if(typeof str==='string'){
    console.log(str.length);
}
else{
    console.log(str*10);
}

// 2. instanceof
let num:unknown=10;
let num1=new Number();
console.log(num instanceof Number); // false
console.log(num1 instanceof Number); // true


/*
    class
    Access Modifiers
        1. public
        2. private
        3. protected
        ---> If we don't specify access modifier, then the default one is public.
*/

// class
class Person{
    private name:string;
    protected age:number;
    gender:string;
    constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getDetails(){
        console.log("name:",this.name);
        console.log('age:',this.age);
        console.log('gender:',this.gender);
    }
}

class Student extends Person{
    id:string;
    constructor(name:string, age:number, gender:string, id:string){
        super(name,age,gender);
        this.id=id;
    }
    getDetails(){
        super.getDetails();
        console.log('id:',this.id);
    }
}
let person_obj=new Person('Lady',22,'female');
person_obj.getDetails();
// console.log(obj.name); // Property 'name' is private and only accessible within class 'Person'.

let student_object=new Student('Kamal',22,'male','5D3');
student_object.getDetails();
// console.log(student_object.name); // Property 'name' is private and only accessible within class 'Person'.
// console.log(student_object.age); // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(student_object.gender); // male
console.log(student_object.id); // 5D3