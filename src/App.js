import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos';
import Footer from "./components/Footer";
import { Addtodo } from './components/Addtodo';
import { useState } from 'react';

function App() {
  // const[todolist,settodolist]=useState([
  const todolist=[
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

  ];
  const addtodo=(title,desc)=>{
    console.log("adding task");
  }
  return (
  <>
 <Header title="Reshma Todo" searchbar={true}/>
 <Addtodo addtodo={addtodo}/>
 <Todos todo={todolist}/>
 <Footer/>
 

  </>
  );
}

export default App;
