import React from 'react';
import { Todo } from '../model';
import './styles.css';

interface Props{
    todos:Todo[];
    Todos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC = ({todos, setTodos}) => {
  return (
    <div className='todos'>{}
      
    </div>
  )
}

export default TodoList;
