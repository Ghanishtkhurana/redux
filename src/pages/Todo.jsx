import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { addTodo, deleteTodo, updateTodo } from "../redux/Todo/todo.action";

function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((store) => store.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text,
    };
    dispatch(addTodo(newItem));
    console.log("hi");
  };
  const handleToggle = (id)=>{
    const update = todos.map((todo)=>todo.id === id ? {...todo,status : !todo.status} : todo)
    dispatch(updateTodo(update))
  }

  const handleDelete = (id)=>{
    const deleteUpdate = todos.filter((todo)=>todo.id!==id)
    dispatch(deleteTodo(deleteUpdate))
  }
  console.log(todos);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todos.map((user) => (
          <li>
            {user.title} {user.status ? "Completed" : "Not completed"}{" "}
            <button onClick={()=>handleToggle(user.id)} >TOGGLE</button> 
            <button onClick={()=>handleDelete(user.id)}>Delete</button>{" "}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
