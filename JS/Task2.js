// // 1. Write a function calculator 
// // This should accept 3 parameters 2 values and an operator.
// // Develop a function to execute the operation over the 2 values and return the result.
// // Handle the validations operator values(+, -, /, *, %) and 2 values should integers

function calculator(val1,val2,operator){
    switch(operator){
        case '+':
            return val1+val2;
        case '-':
            return val1-val2;
        case '*':
            return val1*val2;
        case '/':
            return val1/val2;
        case '%':
            return val1%val2;
        default:
            return 'The operators must be from { +, -, *, /, % }';
    }
}
console.log(calculator(10,20,'+')); // 30
console.log(calculator(60,30,'-')); // 30
console.log(calculator(9,5,'*')); // 45
console.log(calculator(500,25,'/')); // 20
console.log(calculator(500,0,'/')); // Infinity
console.log(calculator(0,0,'/')); // NaN
console.log(calculator(10,3,'%')); // 1
console.log(calculator(30,20,'x')); // The order of paramaters should be value1, value2 and operator





// 2. Develop a ToDo functionality, a Todo task's info (name, status, completion date, etc)
// This functionality should able 
// to add new task to the list
// to delete the task (with identifier).
// to list the tasks with search functionality on name, sort by completion date (Asc, Dsc), filter by status (Task not started, Task In-progress, Task Completed)
// to delete all the tasks.
// Handle proper validations where ever required.

let ToDo=[];
function addTask(id, name, status, completion_date){
    let obj1={};
    obj1.id=id;
    obj1.name=name;
    obj1.status=status;
    obj1.completion_date=completion_date;
    ToDo.push(obj1);
    console.log("Task added successfully");
}
function deleteTask(name){
    for(let i=0;i<ToDo.length;i++){
        if(ToDo[i].name==name){
            ToDo.splice(i,1);
            return `Task ${name} Deleted`;
        }
    }
    return `There is no task named ${name} `;
}
function search(name){
    for(let i=0;i<ToDo.length;i++){
        if(ToDo[i].name==name){
            return ToDo[i];
        }
    }
    return ('No task named',name);
}
function sortByCompletionDate(order){
    if(order=='asc')
        ToDo.sort((a,b) => new Date(a.completion_date)- new Date(b.completion_date));
    else
        ToDo.sort((a,b) => new Date(b.completion_date)- new Date(a.completion_date));
    console.log(ToDo);
}
function filterByStatus(status){
    let filteredArray=ToDo.filter(x=> x.status===status);
    console.log(filteredArray);
}
function deleteAll(){
    ToDo=[];
}
// while(true){
//     console.log("Choose the options");
//     console.log('1 : addTask')
// }
addTask(1,'LearningJS','In-Progress',"2025-01-30");
addTask(2,'LearningCSS','NotStarted',"2025-02-28");
addTask(3,'LearningHTML','Completed',"2024-12-30");
addTask(4,'LearningReact','NotStarted',"2025-02-15");
addTask(5,'LearningNode','NotStarted',"2025-02-15");
console.log(search('LearningJS'));
console.log(deleteTask('LearningHTML'));
console.log(deleteTask('Hello'));
sortByCompletionDate('asc');
filterByStatus('NotStarted');
deleteAll();
console.log(ToDo);