"use client";
import { useEffect, useState } from 'react';

function MealIdeas({ ingredient }) {
    // State variable to hold meal ideas
    const [meals, setMeals] = useState([]);

    // Fetch data from the API
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    }

    // Load meal ideas
    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    // Call loadMealIdeas when ingredient changes
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    // Render the component
    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MealIdeas;