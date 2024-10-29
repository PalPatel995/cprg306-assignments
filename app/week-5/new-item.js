// File: NewItem.js
"use client";

import { useState } from "react";

const NewItem = () => {
  // State variables for name, quantity, and category
  const [name, setName] = useState(""); // Initial value is an empty string
  const [quantity, setQuantity] = useState(1); // Initial value is 1
  const [category, setCategory] = useState("produce"); // Initial value is "produce"

  // Function to increment quantity
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Function to decrement quantity
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create an item object with the current state values
    const item = {
      name,
      quantity,
      category,
    };

    // Log the item object to the console
    console.log("Submitted Item:", item);

    // Display an alert with the current state values
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset state variables to their initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-gray-50 max-w-xs mx-auto space-y-4">
      {/* Name input field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        required
        className="p-2 border rounded w-full"
      />

      {/* Category selection dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded w-full"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      {/* Display current quantity */}
      <span className="text-2xl font-semibold text-gray-800">Quantity: {quantity}</span>

      <div className="flex space-x-4">
        {/* Decrement button */}
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded text-white ${
            quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          -
        </button>

        {/* Increment button */}
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded text-white ${
            quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>

      {/* Submit button */}
      <button type="submit" className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
