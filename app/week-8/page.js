"use client";
import { useState } from 'react';
import MealIdeas from './meal-ideas';
import ItemList from './item-list';
import NewItem from './new-item';

function Page() {
    const [selectedItemName, setSelectedItemName] = useState('');
    const items = ["chicken breast, 1 kg 🍗", "beef, 500 g 🥩", "carrots, 2 pcs 🥕"]; // Example items

    const handleItemSelect = (item) => {
        const cleanedName = item
            .split(',')[0]                // Split on comma and take the first part
            .replace(/[^a-zA-Z\s]/g, '')   // Remove emojis and other characters
            .trim();                       // Trim whitespace
        setSelectedItemName(cleanedName);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <NewItem />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    );
}

export default Page;