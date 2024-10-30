// /app/week-7/page.js
"use client"; // Add this directive at the top

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  // Initialize state with itemsData from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      {/* Pass handleAddItem to NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass items state to ItemList component */}
      <ItemList items={items} />
    </main>
  );
}
