import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos';
import Footer from "./components/Footer";
import { Addtodo } from './components/Addtodo';
import { useState } from 'react';

function App() {
  // const[todolist,settodolist]=useState([
    const[todo,settodo]=useState([
    {
      id:1,
      task:"learn react",
      time:"in 1 hrs",
  },
  {
      id:2,
      task:"get adbms book",
      time:"after 1"
  },
  {
      id:3,
      task:"leetcode",
      time:"3 hrs with strivers graph"
  }

  ]);
  const addtodo=(title,desc)=>{
    console.log("adding task");
    const newtodo={
      id:todo.length,
      task:title,
      time:desc
    }
    settodo([...todo,newtodo]);
    console.log("added task");

  }
  const onDelete=(deletetodo)=>{
    console.log("i am deleting",deletetodo.task);
    settodo(todo.filter((e)=>
    {
      return e!==deletetodo;
    }))
    console.log(todo.length)

  }
  //  const deletetask=(todo)=>{
  //   console.log("I am on deleting",todo.task);
  //   setTodos(todos.filter((e)=>
  //   {
  //     return e!==todo;
  //   }))
  
  // };

  return (
  <>
 <Header title="Reshma Todo" searchbar={true}/>
 <Addtodo addtodo={addtodo}/>
 <Todos todo={todo} onDelete={onDelete}/>
 <Footer/>
 

  </>
  );
}

export default App;
