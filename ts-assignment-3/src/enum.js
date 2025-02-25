/* enum
 --> enum allows us to create a named constants i.e., collection of related values that could be of any type
 --> enum members must be of type string
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* enum types
    1. Numeric enums
    2. String enums
    3. Heterogenous or Hybrid enums
    4. computed enums
*/
// 1. Numeric enums --> numeric enums have reverse mapping feature i.e., allows us to map a value back to it's corresponding name
// Default numeric enums
// If we don't specify values, it'll start from 0
var dir;
(function (dir) {
    dir[dir["north"] = 0] = "north";
    dir[dir["south"] = 1] = "south";
    dir[dir["east"] = 2] = "east";
    dir[dir["west"] = 3] = "west";
})(dir || (dir = {}));
console.log(dir); // to display dir enum
console.log(dir.north); // to display particular dir member value
// dir.north=15; // Cannot assign to 'north' because it is a read-only property.
// Initialized numeric enums
// We can specify the starting value, so it continues
var dir1;
(function (dir1) {
    dir1[dir1["north"] = 10] = "north";
    dir1[dir1["south"] = 11] = "south";
    dir1[dir1["east"] = 12] = "east";
    dir1[dir1["west"] = 13] = "west";
})(dir1 || (dir1 = {}));
console.log(dir1);
// Fully initialized numeric enums
// we can specify each value to enum members
var dir2;
(function (dir2) {
    dir2[dir2["north"] = 10] = "north";
    dir2[dir2["south"] = 20] = "south";
    dir2[dir2["east"] = 30] = "east";
    dir2[dir2["west"] = 40] = "west";
})(dir2 || (dir2 = {}));
console.log(dir2);
console.log(dir2['north']); // we can acces value by using member --> [Bracket notation]
console.log(dir2.north); // we can acces value by using member --> [Dot notation]
console.log(dir2[10]); // we can access member by using value
// 2. String enums
var subjects;
(function (subjects) {
    subjects["math"] = "Mathematics";
    subjects["phy"] = "Physics";
    subjects["chem"] = "Chemistry";
    subjects["bio"] = "Biology";
    subjects["eng"] = "English";
})(subjects || (subjects = {}));
console.log(subjects);
console.log(subjects.eng);
console.log(subjects['Biology']); // undefined 
// --> ts does not create reverse mapping for strings because multiple keys can have the same value.
// we can create custom reverse mapping by creating new objects 
// 3. Heterogenous or Hybrid enums --> contains both numeric and string enums
var student;
(function (student) {
    student["name"] = "Ashwanth";
    student[student["age"] = 22] = "age";
    student["gender"] = "male";
    student["branch"] = "CSE";
    student["section"] = "E";
    student[student["marks"] = 80] = "marks";
})(student || (student = {}));
console.log(student);
console.log(typeof student); // object
// 4. computed enums --> allows us to generate values dynamically based on computations or function calls
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 5] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 15] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 30] = "Thursday";
    Weekdays[Weekdays["Friday"] = 50] = "Friday";
    Weekdays[Weekdays["Saturday"] = 75] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 105] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays);
/* Type Narrowing
    1. typeof
    2. instanceof
*/
// 1. typeof
var str = 'Hello';
if (typeof str === 'string') {
    console.log(str.length);
}
else {
    console.log(str * 10);
}
// 2. instanceof
var num = 10;
var num1 = new Number();
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
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getDetails = function () {
        console.log("name:", this.name);
        console.log('age:', this.age);
        console.log('gender:', this.gender);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, gender, id) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.getDetails = function () {
        _super.prototype.getDetails.call(this);
        console.log('id:', this.id);
    };
    return Student;
}(Person));
var person_obj = new Person('Lady', 22, 'female');
person_obj.getDetails();
// console.log(obj.name); // Property 'name' is private and only accessible within class 'Person'.
var student_object = new Student('Kamal', 22, 'male', '5D3');
student_object.getDetails();
// console.log(student_object.name); // Property 'name' is private and only accessible within class 'Person'.
// console.log(student_object.age); // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(student_object.gender); // male
console.log(student_object.id); // 5D3
