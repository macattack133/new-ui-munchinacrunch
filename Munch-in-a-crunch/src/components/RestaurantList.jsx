import React, { useState, useEffect } from 'react';
import RestaurantService from './path-to/RestaurantService';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    RestaurantService.getAllRestaurants()
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  const handleDeleteRestaurant = (id) => {
    RestaurantService.deleteRestaurant(id)
      .then(() => {
        console.log('Restaurant deleted successfully');
        // Update the restaurant list after deletion
        setRestaurants(prevRestaurants => prevRestaurants.filter(restaurant => restaurant.id !== id));
      })
      .catch(error => console.error('Error deleting restaurant:', error));
  };

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.cuisine}
            <button onClick={() => handleDeleteRestaurant(restaurant.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
