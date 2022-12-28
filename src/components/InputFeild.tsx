//rafce  - ES7 React/Redux/GraphQl/React-Native (extension)
import React from "react";
import "./style.css";

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;

}


const InputFeild: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className="input">
       <input 
       type="input" 
       value={todo}
       onChange={(e) => setTodo(e.target.value)}
       placeholder="Enter a task"  
       className="input__box"
       />
       <button className="input__submit" type="submit">
        Go
       </button>
    </form>
  );
};

export default InputFeild;
