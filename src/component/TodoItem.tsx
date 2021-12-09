import React, { useCallback } from "react";

export interface ItemType {
  id: number;
  text: string;
}

interface TodoItemProps {
  todoItem: ItemType;
  DeleteItem: (todoItem: ItemType) => void;
}

export const TodoItem = ({ todoItem , DeleteItem }: TodoItemProps) => {
  
  const handleDelete = useCallback(() => {
    DeleteItem(todoItem);
  }, [DeleteItem, todoItem]);

  return (
    <div>
      <button className="button" onClick={handleDelete}>
        x
      </button>
      &nbsp;
      <label>{todoItem.text}</label>
    </div>
  );
};
