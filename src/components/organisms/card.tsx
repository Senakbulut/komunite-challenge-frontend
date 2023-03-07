import { useState } from "react";

// Components
import Header from "../atoms/header/header";
import AddTodo from "../molecules/addTodo";
import TodoList from "../molecules/todoList";

// Types
type Props = {};

export default function Card({}: Props) {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([{ title: "", id: "", completed: false }]);
  const [editTodo, setEditTodo] = useState(
    null as null | { title: "", id: "", completed: false }
  );

  return (
    <div className="bg-white shadow sm:rounded-lg p-4 flex justify-center items-center flex-col">
      <Header />
      <AddTodo
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}
