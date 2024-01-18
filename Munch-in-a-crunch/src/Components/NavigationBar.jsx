import React, { useState } from 'react';
import axios from 'axios';


const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiKey = 'Ld6wqU30NukAgYEzdzYIsHojAob8ewJbK2NsRRVbNH9h_T2-ELNZMhVTfJPyjOa17cAL6HDDwBlvpgckQG4Xww_xy5gc7t0LoYGRdTuKznBEFJ8xEzTA_pIW-xOoZXYx';
      const endpoint = 'https://api.yelp.com/v3/businesses/search';
      const params = {
        term: searchTerm,
        location: 'St. Louis',
      };

      const queryString = new URLSearchParams(params).toString();
      const url = `${endpoint}?${queryString}`;

      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        params: params,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRestaurants(data.restaurants);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Munch In A Crunch</h2>
      <input
        type="text"
        placeholder="Search Restaurants"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.location.address1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;