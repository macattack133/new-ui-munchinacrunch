import React, { useState } from 'react';
import RestaurantServices from './services/RestaurantServices';

const CreateRestaurant = () => {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleCreateRestaurant = () => {
    const newRestaurant = {
      name: name,
      cuisine: cuisine,
    };

    RestaurantService.createRestaurant(newRestaurant)
      .then(response => {
        console.log('Restaurant created successfully:', response.data);
        // Optionally, redirect or update the restaurant list on success
      })
      .catch(error => console.error('Error creating restaurant:', error));
  };

  return (
    <div>
      <h2>Create New Restaurant</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />

        <label>Cuisine:</label>
        <input type="text" value={cuisine} onChange={e => setCuisine(e.target.value)} />

        <button type="button" onClick={handleCreateRestaurant}>
          Create Restaurant
        </button>
      </form>
    </div>
  );
};

export default CreateRestaurant;
