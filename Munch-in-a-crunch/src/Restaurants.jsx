import React, { useEffect, useState } from 'react';
import config from './config';

const apiKey = config.yelpApiKey;
const clientId = config.yelpClientId;


const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchYelpData = async () => {
      try {
        const apiUrl = 'https://api.yelp.com/v3/businesses/search';

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch (error) {
        console.error('Error fetching Yelp data:', error);
      }
    };

    fetchYelpData();
  }, []);

  return (
    <div>
      <h1>Yelp Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
