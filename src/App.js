import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos';
import Footer from "./components/Footer";
import { Addtodo } from './components/Addtodo';
import { useEffect, useState } from 'react';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link


} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  // const[todolist,settodolist]=useState([
  const [todo, settodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));

  }, [todo]);
  const addtodo = (title, desc) => {
    console.log("adding task");
    const newtodo = {
      id: todo.length,
      task: title,
      time: desc
    }
    settodo([...todo, newtodo]);
    console.log("added task");

    localStorage.setItem("todo", JSON.stringify(todo));


  }
  const onDelete = (deletetodo) => {
    console.log("i am deleting", deletetodo.task);
    settodo(todo.filter((e) => {
      return e !== deletetodo;
    }))
    // console.log(todo.length);

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
      <Router>
        <Header title="Reshma Todo" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todo={todo} onDelete={onDelete} />
                </>
            )
          }}>
           
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          
        </Switch>


        <Footer />
      </Router>


    </>
  );
}

export default App;
