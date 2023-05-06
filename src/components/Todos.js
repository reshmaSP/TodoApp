import React from 'react'
import  {Todo} from './Todo';
const Todos = (props) => {
//   let todo=[{
//     id:1,
//     task:"learn react",
//     time:"in 1 hrs",
// },
// {
//     id:2,
//     task:"get adbms book",
//     time:"after 1"
// },
// {
//     id:3,
//     task:"leetcode",
//     time:"3 hrs with strivers graph"
// }
// ]
  return (
    <>
    <h4 style={{textAlign :"center"}}>Todos</h4>
    <Todo todo={props.todo}/>
    
    </>
  )
}
export default Todos;