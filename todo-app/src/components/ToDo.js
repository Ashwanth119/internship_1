import { useEffect, useState } from 'react';
import './ToDo.css';


/*
    CreateList function, return the JSX, that will take the input from the form and update the taskArray and display the tasks accordingly.
*/
function CreateList(){

    const [taskId,setTaskId]=useState(1);
    const [taskTitle,setTitle]=useState('');
    const [taskDes,setDes]=useState('');
    const [taskArray,setTaskArray]=useState([]);
    const [editIndex,setEditIndex]=useState(-1);

    /*
    ==> To immediately console the updated array

    useEffect(()=>{
        console.log("use effect console",taskArray)
    },[taskArray])

    */

    /*

    addTask will add the new task if editIndex is -1, else it will update the existing task with the editIndex sent by the editTask method.

    */
    const addTask=()=>{
        if(editIndex!==-1){
            taskArray[editIndex].taskTitle=taskTitle;
            taskArray[editIndex].taskDes=taskDes;
            setTaskArray(taskArray);
            setEditIndex(-1);
        }
        else if(taskTitle!=='' && taskDes!==''){
            setTaskArray([...taskArray,{taskId,taskTitle,taskDes}]);
            setTaskId(taskId+1);
        }
        else{
            alert('Title or Description cannot be empty!!!');
        }
        setTitle("");
        setDes("");
    }

    // deleteTask will delete the task based on the taskId.

    const deleteTask=(id)=>{
        setTaskArray((prev)=>prev.filter(item=>{ return item.taskId!==id; }));
    }

    // editTask find the index of the task in the taskArray with the taskId and set the editIndex value, and the task will update in the addtask method.

    const editTask=(id)=>{
        const taskIndex=taskArray.findIndex(task=> task.taskId===id ); // taskArray.find((task)=>task.Id===id);
        console.log(taskIndex);
        if(taskIndex!=-1){
            setTitle(taskArray[taskIndex].taskTitle);
            setDes(taskArray[taskIndex].taskDes);
            setEditIndex(taskIndex);
        }
    }

    return(
        <div>
            <input type='text' id='title' placeholder='Enter Title' value={taskTitle} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type='text' id='description' placeholder='Enter Description' value={taskDes} onChange={(e)=>{setDes(e.target.value)}}></input>
            <button onClick={addTask} className='addTask'>{editIndex === -1 ? 'Add Task' : 'Update Task'}</button>
            <div>
                {
                    taskArray.map((task)=>(
                        <div key={task.taskId} className='toDoRow'>
                            <div className='taskId'>{task.taskId}</div>
                            <div className='taskTitle'>{task.taskTitle}</div>
                            <div className='taskDes'>{task.taskDes}</div>
                            <button onClick={()=>editTask(task.taskId)} className='edit'>Edit</button>
                            <button onClick={()=>deleteTask(task.taskId)} className='delete'>Delete</button>                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CreateList;