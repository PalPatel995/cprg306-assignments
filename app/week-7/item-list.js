// /app/week-7/item-list.js
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  // Sort items based on the sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category if sortBy is 'grouped'
  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`px-4 py-2 rounded ${sortBy === 'grouped' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Group by Category
        </button>
      </div>

      <ul>
        {sortBy === 'grouped' ? (
          Object.keys(groupedItems).sort().map((category) => (
            <div key={category} className="mb-4">
              <h2 className="capitalize text-lg font-bold mb-2">{category}</h2>
              <ul>
                {groupedItems[category].map((item) => (
                  <Item key={item.id} {...item} />
                ))}
              </ul>
            </div>
          ))
        ) : (
          sortedItems.map((item) => <Item key={item.id} {...item} />)
        )}
      </ul>
    </div>
  );
}
