import React, { useEffect, useState } from 'react';
import config from './config';
import {fetchYelpData} from './YelpApiService';

const apiKey = config.yelpApiKey;
const clientId = config.yelpClientId;


const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
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
