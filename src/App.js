import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos';
import Footer from "./components/Footer";
import { Addtodo } from './components/Addtodo';

function App() {
  return (
  <>
 <Header title="Reshma Todo" searchbar={true}/>
 <Addtodo/>
 <Todos/>
 <Footer/>
 

  </>
  );
}

export default App;
