import React, { useState } from 'react';
import axios from 'axios';
import config from './config';


const NavigationBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const apiUrl = 'https://api.yelp.com/v3/businesses/search';
      const apiKey = 'config.yelpApiKey';

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        params: {
          term: searchTerm,
          location: 'St. Louis',
        },
      });
      onSearchResults(response.data.businesses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Restaurants"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Let's Munch</button>
    </div>
  );
};

export default NavigationBar;

