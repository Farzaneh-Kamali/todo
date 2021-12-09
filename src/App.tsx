import React, { useCallback, useState } from "react";
import { ItemType, TodoItem } from "./component/TodoItem";
import { AddItem } from "./component/AddItems";

const initialItems: ItemType[] = [
  { id: Math.floor(Math.random() * 1000), text: "Go to GYM" },
  { id: Math.floor(Math.random() * 1000), text: "Study for exam" },
  { id: Math.floor(Math.random() * 1000), text: "Do React task" },
  { id: Math.floor(Math.random() * 1000), text: "Have lunch" },
];

export const App = () => {
  const [todoItems, setTodoItems] = useState(initialItems);

  const handleAdd = useCallback(
    (newText: string) => {
      if (!newText || /^\s*$/.test(newText)) {
        return;
      }
      setTodoItems([
        ...todoItems,
        { id: Math.floor(Math.random() * 1000), text: newText },
      ]);
    },
    [todoItems]
  );

  const handleDelete = useCallback(
    (todoItem: ItemType) => {
      setTodoItems(todoItems.filter((item) => item !== todoItem));
    },
    [todoItems]
  );

  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem todoItem={todoItem} DeleteItem={handleDelete} key= {todoItem.id}/>
      ))}

      <hr />

      <AddItem AddToDo={handleAdd} />
    </div>
  );
};
