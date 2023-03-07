import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import Buttons from "../atoms/buttons/buttons";
import Inputs from "../atoms/inputs/inputs";

// Types
type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: Array<{ title: string; id: string; completed: boolean }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{ title: string; id: string; completed: boolean }>
    >
  >;
  setEditTodo: React.Dispatch<
    React.SetStateAction<null | { title: ""; id: ""; completed: false }>
  >;
  editTodo: null | { title: ""; id: ""; completed: false };
};

export default function AddTodo({
  input,
  setInput,
  todos,
  setTodos,
  setEditTodo,
  editTodo,
}: Props) {
  const updateTodo = (title: string, id: string, completed: boolean) => {
    const newTodo = todos?.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo as any);
    setEditTodo({ title: "", id: "", completed: false });
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="mt-6 flex md:w-1/2 w-full gap-x-4">
      <Inputs input={input} setInput={setInput} isAddInput={true} />
      <Buttons
        button="add"
        setTodos={setTodos}
        todos={todos}
        setEditTodo={setEditTodo}
        editTodo={editTodo}
      />
    </form>
  );
}
