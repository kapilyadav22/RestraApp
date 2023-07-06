import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Contact = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), name: 'Item 1' },
    { id: uuidv4(), name: 'Item 2' },
    { id: uuidv4(), name: 'Item 3' },
  ]);

  const addItem = () => {
    const newItem = {
      id: uuidv4(),
      name: `Item ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

