import React from 'react';

const ToDo = ({ index, id, createdAt }) => (
<tr>
   <td>
     <label>{index}</label>
   </td>
   <td>
     <label>{id}</label>
   </td>
   <td>
     <input />
   </td>
   <td>
     <label>{createdAt.toLocaleTimeString()}</label>
   </td>
</tr>
);

function Table(props) {
const [todoCounter, setTodoCounter] = React.useState(1);
const [list, setList] = React.useState([{ id: 1, createdAt: new Date() }]);


const addToEnd = () => {
   const date = new Date();
   const nextId = todoCounter + 1;
   setList([...list, { id: nextId, createdAt: date }]);
   setTodoCounter(nextId);
};

const addToStart = () => {
   const date = new Date();
   const nextId = todoCounter + 1;
   setList([{ id: nextId, createdAt: date }, ...list]);
   setTodoCounter(nextId);
};

return (
   <div>
     <code>key=index</code>
     <br />
     <button onClick={addToStart}>Add New to Start</button>
     <button onClick={addToEnd}>Add New to End</button>

     <table>
       <thead>
         <tr>
           <th>Index</th>
           <th>ID</th>
           <th>Item</th>
           <th>Created at</th>
         </tr>
       </thead>
       <tbody>
         {list.map((todo, index) => (
           <ToDo key={todo.id} index={index} {...todo} />
         ))}
       </tbody>
     </table>
   </div>
);
}

export default Table;