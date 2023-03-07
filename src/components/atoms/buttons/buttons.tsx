// Components

import Icons from "../icons/icons";

// Types

type Props = {
  button: "add" | "delete" | "edit" | "done";
  todo?: { title: string, id: string, completed: boolean };
  todos: Array<{ title: string, id: string, completed: boolean }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{ title: string, id: string, completed: boolean }>
    >
  >;
  setEditTodo: React.Dispatch<
    React.SetStateAction<null | { title: "", id: "", completed: false }>
  >;
  editTodo: null | { title: "", id: "", completed: false };
};

export default function Buttons({
  button,
  todo,
  todos,
  setTodos,
  setEditTodo,
  editTodo,
}: Props) {

  const handleDelete = ({ id }: { id: string }) => {
    setTodos(todos?.filter((todo: { id: string }) => todo?.id !== id));
  };

  const handleComplete = (todo: { id: string }) => {
    setTodos(
      todos?.map((item) => {
        if (item?.id === todo?.id) {
          return { ...item, completed: !item?.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }: { id: string }) => {
    const findTodo = todos?.find((todo) => todo?.id === id);
    setEditTodo(findTodo as { title: ""; id: ""; completed: false });
  };

  return (
    <button
      type={button === "add" ? "submit" : "button"}
      onClick={() =>
        button === "delete"
          ? handleDelete(todo as { id: string })
          : button === "done"
          ? handleComplete(todo as { id: string })
          : button === "edit"
          ? handleEdit(todo as { id: string })
          : ""
      }
      className={`flex rounded-full md:rounded-md ${
        button === "add"
          ? "bg-purple-700 py-2.5"
          : button === "delete"
          ? "bg-red-600 py-1.5"
          : button === "edit"
          ? "bg-yellow-400 py-1.5"
          : "bg-green-700 py-1.5"
      }  md:py-2.5 px-2 md:px-3.5 text-sm font-semibold text-white shadow-sm ${
        button === "add"
          ? "hover:bg-purple-800"
          : button === "delete"
          ? "hover:bg-red-800"
          : button === "edit"
          ? "hover:bg-yellow-500"
          : "hover:bg-green-800"
      }`}
    >
      {button === "add" ? (
       <Icons type="check"/>
      ) : button === "delete" ? (
        <Icons type="delete"/>
      ) : button === "edit" ? (
        <Icons type="edit"/>
      ) : (
        <Icons type="check"/>
      )}
      {button === "add"? "Add" : "" }
    </button>
  );
}
