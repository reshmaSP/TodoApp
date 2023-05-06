import React from 'react'
import { useState } from 'react';

export const Todo = ({todo}) => {
  const deletetask=(todo)=>{
    console.log("I am on deleting",todo.task);
    setTodos(todos.filter((e)=>
    {
      return e!==todo;
    }))
  
  };

const [todos,setTodos] = useState(todo);



  return (
//    <>
//     <div className="card" style={{width: "18rem;"}}>
//   <div className="card-header">
//     list{props.todos.id}
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">{props.todos.task}</li>
//     <li className="list-group-item">{props.todos.time}</li>
   
//   </ul>
// </div>
//    </>
<>
<div className='container my-3 '>

  {

  todos.length===0?<h4>No todo to display</h4>:
  todos.map((todo)=>{

    return<>
    
    <h4>{todo.task}</h4>
    <p>{todo.time}</p>
    <button type="button" className="btn btn-danger" onClick={()=>{deletetask(todo)}}>Delete</button>
    
    </>
  })
}
</div>
</>
  )
}
