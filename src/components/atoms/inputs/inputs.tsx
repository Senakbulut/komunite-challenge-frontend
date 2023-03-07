import React from "react";
// Components

// Types
type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isAddInput: boolean;
  isCompleted?: boolean;
};

export default function Inputs({
  input,
  setInput,
  isAddInput,
  isCompleted,
}: Props) {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value as string);
  };

  return (
    <input
      type="text"
      id={isAddInput ? "todo-title" : "list-title"}
      name={isAddInput ? "todo-title" : "list-title"}
      required={isAddInput ? true : false}
      className={`${
        isAddInput
          ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          : isCompleted
          ? "line-through"
          : ""
      } w-full`}
      placeholder={isAddInput ? "Enter your todo title" : ""}
      value={input}
      onChange={isAddInput ? onInputChange : (event) => event.preventDefault()}
    />
  );
}
