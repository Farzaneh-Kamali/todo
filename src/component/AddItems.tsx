import React, {useState } from "react";

interface AddItemProps {
    AddToDo: (text: string) => void;
}

export const AddItem = ({ AddToDo }: AddItemProps) => {
  const [input, setInput] = useState("");

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; })=> {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    AddToDo(input);
    e.preventDefault();
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text'
      value={input} 
      name='text'
      placeholder="Add Todo" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};
