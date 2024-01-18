import React, { useState } from 'react';

const RandomizerButton = () => {
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  const handleRandomize = () => {
    // Make a GET request to the backend to get a random restaurant
    fetch('/api/restaurants/random')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch random restaurant');
        }
      })
      .then(randomRestaurant => {
        // Handle the randomly selected restaurant in your React component
        setRandomRestaurant(randomRestaurant);
      })
      .catch(error => console.error('Error getting random restaurant:', error));
  };

  return (
    <div>
      <button onClick={handleRandomize}>Randomize Restaurant</button>
      {randomRestaurant && (
        <p>Randomly Selected Restaurant: {randomRestaurant}</p>
      )}
    </div>
  );
};

export default RandomizerButton;