import React from 'react';
import { ItemType, TodoItem } from './component/item';


const initialItems: ItemType[] = [
  { text: 'Go to GYM'},
  { text: 'Study for exam' },
  { text: 'Do React task' },
  { text: 'Have lunch'},
];

export const App = () => {

  return (
    <div>

      {initialItems.map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
        />
      ))}

    </div>
  );
}


