import React, { useState } from 'react';
import "./App.css";
import InputFeild from './components/InputFeild';
import { Todo } from './model';



const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd =() =>{};


  console.log(todo);

  return (
   <div className="App"> 
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
   </div>
   ); 
};

export default App;
