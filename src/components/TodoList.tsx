//rafce  - ES7 React/Redux/GraphQl/React-Native (extension)
import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setcompletedTodos:  React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<Props> = ({ todos, setTodos}: Props) => {
    return(
        <div className='container'>
            <div className="todos">
                <span className="todos__heading">
                    Active Tasks
                </span>
                {
                    todos.map(todo => ( 
                      <SingleTodo 
                            todo= {todo} key={todo.id}
                            todos = {todos}
                            setTodos ={setTodos}
                     />
                     ))
                }
            </div>
            <div className="todos remove">
                <span className="todos__heading">
                        Completed Tasks
                    </span>
                    {
                        todos.map(todo => ( 
                        <SingleTodo 
                                todo= {todo} key={todo.id}
                                todos = {todos}
                                setTodos ={setTodos}
                        />
                        ))
                    }
            </div>
        </div>
    );   
};

export default TodoList;

// ======
// const TodoList: React.FC<Props> = ({ todos, setTodos}: Props) => {
//     return(
//         <div className='todos'>
//             {todos.map(todo => ( 
//                  <SingleTodo 
//                       todo= {todo} key={todo.id}
//                       todos = {todos}
//                       setTodos ={setTodos}
//                  />
//             ))}

//         </div>
//     );   