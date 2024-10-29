// File: NewItem.js
"use client";

import { useState } from "react";

const NewItem = () => {
  // Initialize state variable with useState
  const [quantity, setQuantity] = useState(1);

  // Function to increment quantity
  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  // Function to decrement quantity
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md max-w-sm mx-auto bg-white">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 text-white bg-red-500 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="text-lg font-bold">{quantity}</span>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-4 py-2 text-white bg-green-500 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
};

export default NewItem;
