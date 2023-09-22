import { useState, createContext } from "react";
import AddCustomButton from "./wrapppers/AddCustomButton";
import "../css/NewTodo.css";
import DisplayTodo from "./DisplayTodo";

export const todoContext = createContext("");

const NewTodo = () => {
  const handleClickButton = ():void => {
    setInput(x);
  }
  const [input, setInput] = useState<string>("");
  let x = "";
  return (
    <>
      <todoContext.Provider value={input}>
        <div className="add-todo">
          <div className="input-container">
            <span className="input-label">Add new todo:</span>
            <input
              className="input-box"
              type="text"
              placeholder="Add todo"
              aria-label="todo"
              onChange={(e) => {
                x = e.target.value;
              }}
            />
          </div>
          <AddCustomButton onClick={handleClickButton}/>
          {/* <div className="temp">{input}</div> */}
        </div>
        <DisplayTodo />
      </todoContext.Provider>
    </>
  );
};

export default NewTodo;