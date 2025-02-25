let fName='ash' //prompt("Enter first Name");
let lName='Th' //prompt("Enter last Name");
localStorage.setItem('first_name',fName);
localStorage.setItem('last_name',lName);
console.log(localStorage.getItem('first_name'));
console.log('last_name');

// let fName_s='ash' //prompt("Enter first Name_s");
// let lName_s='Th' //prompt("Enter last Name_s");
// sessionStorage.setItem('first_name_s',fName_s);
// sessionStorage.setItem('last_name_s',lName_s);
// console.log('first_name_s');
// console.log('last_name_s');
console.log(localStorage[localStorage.key(0)]);
console.log(localStorage.length);
console.log(sessionStorage.length);