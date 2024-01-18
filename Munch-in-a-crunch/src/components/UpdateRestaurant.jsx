import React, { useState, useEffect } from 'react';
import RestaurantService from './path-to/RestaurantService';

const UpdateRestaurant = ({ match }) => {
  const [restaurant, setRestaurant] = useState({});
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');

  useEffect(() => {
    const restaurantId = match.params.id;

    // Fetch the details of the selected restaurant
    RestaurantService.getRestaurantById(restaurantId)
      .then(data => {
        setRestaurant(data);
        setName(data.name);
        setCuisine(data.cuisine);
      })
      .catch(error => console.error('Error fetching restaurant details:', error));
  }, [match.params.id]);

  const handleUpdateRestaurant = () => {
    const updatedRestaurant = {
      name: name,
      cuisine: cuisine,
    };

    RestaurantService.updateRestaurant(restaurant.id, updatedRestaurant)
      .then(response => {
        console.log('Restaurant updated successfully:', response.data);
        // Optionally, redirect or update the restaurant list on success
      })
      .catch(error => console.error('Error updating restaurant:', error));
  };

  return (
    <div>
      <h2>Update Restaurant</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />

        <label>Cuisine:</label>
        <input type="text" value={cuisine} onChange={e => setCuisine(e.target.value)} />

        <button type="button" onClick={handleUpdateRestaurant}>
          Update Restaurant
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
