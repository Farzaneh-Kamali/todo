import React from "react";

export interface ItemType {
  text: string;
}

export interface TodoItemProps {
  todoItem: ItemType;
}

export const TodoItem = ({ todoItem }: TodoItemProps) => {
  return (
    <div>
      <button className="button" >
        x
      </button>
      &nbsp;
      <label>{todoItem.text}</label>
    </div>
  );
};
