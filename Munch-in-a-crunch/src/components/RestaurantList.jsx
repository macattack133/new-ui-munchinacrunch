import React, { useState, useEffect } from 'react';
//import RestaurantServices from './src/services/RestaurantServices.jsx';
import FilterComponent from './FilterComponent';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredQualities, setFilteredQualities] = useState([]);

  useEffect(() => {
    // Fetch the list of restaurants based on filtered qualities
    RestaurantServices.getFilteredRestaurants(filteredQualities)
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching restaurants:', error));
  }, [filteredQualities]);

  const handleDeleteRestaurant = (id) => {
    RestaurantService.deleteRestaurant(id)
      .then(() => {
        console.log('Restaurant deleted successfully');
        // Update the restaurant list after deletion
        setRestaurants((prevRestaurants) => prevRestaurants.filter((restaurant) => restaurant.id !== id));
      })
      .catch((error) => console.error('Error deleting restaurant:', error));
  };

  const handleFilterChange = (newQualities) => {
    // Update the state of selected qualities when the filter changes
    setFilteredQualities(newQualities);
  };

  return (
    <div>
      <h2>Restaurant List</h2>
      <FilterComponent onFilterChange={handleFilterChange} />
      <ul>
        {restaurants.map((restaurant) => (
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
