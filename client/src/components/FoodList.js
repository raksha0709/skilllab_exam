// components/FoodList.js
import React, { useEffect, useState } from 'react';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Fetch food items from backend API and update state
    // Example fetch code:
    fetch('/api/food')
      .then(response => response.json())
      .then(data => setFoodItems(data))
      .catch(error => console.error('Error fetching food items:', error));
  }, []);

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foodItems.map(food => (
          <li key={food._id}>
            <div>Name: {food.name}</div>
            <div>Description: {food.description}</div>
            <div>Price: {food.price}</div>
            {/* Add image display logic here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;