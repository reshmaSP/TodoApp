import React from 'react'
import { useState } from 'react';

export const Todo = ({todos,OnDelete}) => {
  // const deletetask=(todo)=>{
  //   console.log("I am on deleting",todo.task);
  //   setTodos(todos.filter((e)=>
  //   {
  //     return e!==todo;
  //   }))
  
  // };

// const [todos,setTodos] = useState(todo);



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

    <h4>{todos.task}</h4>
    <p>{todos.time}</p>
    <button type="button" className="btn btn-danger" onClick={()=>{OnDelete(todos)}} >Delete</button>
    

</div>
</>
  )
}
