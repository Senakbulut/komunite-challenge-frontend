// Components
import React from "react";
import Buttons from "../atoms/buttons/buttons";
import Inputs from "../atoms/inputs/inputs";

// Types
type Props = {
  todos: Array<{ title: string; id: string; completed: boolean }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{ title: string; id: string; completed: boolean }>
    >
  >;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setEditTodo: React.Dispatch<
    React.SetStateAction<null | { title: ""; id: ""; completed: false }>
  >;
  editTodo: null | { title: ""; id: ""; completed: false };
};

export default function TodoList({
  todos,
  setTodos,
  setInput,
  setEditTodo,
  editTodo,
}: Props) {
  return (
    <div className="flow-root w-full">
      <ul role="list" className="divide-y divide-gray-200">
        {todos?.map((todo) => (
          <li className="py-3 sm:py-4" key={todo?.id}>
            <div className="flex items-start md:items-center flex-col md:flex-row gap-4">
              <div className="flex-1 min-w-0">
                <Inputs
                  isAddInput={false}
                  input={todo?.title}
                  setInput={setInput}
                  isCompleted={todo?.completed}
                />
              </div>
              {todo?.title && (
                <div className="inline-flex items-center text-base font-semibold text-gray-900 gap-2">
                  <Buttons
                    button="done"
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    setEditTodo={setEditTodo}
                    editTodo={editTodo}
                  />
                  <Buttons
                    button="edit"
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    setEditTodo={setEditTodo}
                    editTodo={editTodo}
                  />
                  <Buttons
                    button="delete"
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    setEditTodo={setEditTodo}
                    editTodo={editTodo}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
