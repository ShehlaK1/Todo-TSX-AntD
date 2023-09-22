import { useState, useContext, useEffect } from "react";
import { todoContext } from "./NewTodo";
import "../css/DisplayTodo.css";
import DeleteCustomButton from "./wrapppers/DeleteCustomButton";

const DisplayTodo = () => {
  const newTodo = useContext(todoContext);
  const [todoList, setTodoList] = useState<string[]>([]);
  function addList(newTodo: string) {
    setTodoList([...todoList, newTodo]);
  }

  //deleting todo using splice
  // const handleClick = (id: number) => {
  //   let tempList = [...todoList];
  //   tempList.splice(id, 1);
  //   setTodoList(tempList);
  // };

  //deleting todo using filter
  const handleClick = (id: number):void => {
    console.log(id);
    let tempList = todoList.filter((_item, key) => key !== id);
    setTodoList(tempList);
  };

  useEffect(() => {
    if (newTodo.trim() !== "") {
      addList(newTodo);
    }
  }, [newTodo]);

  return (
    <>
      <div className="display-all">
        <h3 className="todo-heading">Displaying all todos:</h3>
        <ul>
          {todoList.map((todo, i) => (
            <div className="todo" key={"todo" + todo + i}>
              {todo}
                <DeleteCustomButton onClick={() => {handleClick(i)}}/>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayTodo;
