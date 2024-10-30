// /app/week-7/page.js
"use client";

import { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';

export default function Page() {
  const [items, setItems] = useState([]);

  // Fetch items.json on component mount
  useEffect(() => {
    fetch('/app/week-7/items.json')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
