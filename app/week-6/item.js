// /app/week-6/item.js
export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 border-b">
        {name} - Quantity: {quantity} - Category: {category}
      </li>
    );
  }
  