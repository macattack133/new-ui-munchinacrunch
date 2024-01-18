import React, { useEffect, useState } from 'react';
import Restaurants from './Restaurants';
import config from './config';
import {fetchYelpData} from './YelpApiService';


const clientId = config.yelpClientId;

// const NavigationBar = ({setResults}) => {
//   const [input, setInput] = useState('');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);
//
//
//   const handleChange = (value) => {
//   setInput(value);
//   fetchYelpData(value);
//   };
//
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Restaurants"
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//
//     </div>
//   );
// };
//
// export default NavigationBar;
// YelpSearch.jsx


const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = config.yelpApiKey;
      const endpoint = 'https://api.yelp.com/v3/businesses/search';
      const params = {
        term: searchTerm,
        location: 'St. Louis',
      };

      const queryString = new URLSearchParams(params).toString();
      const url = `${endpoint}?${queryString}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          accept: `application/json`
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.businesses);
    } catch (error) {
      console.error('Error fetching Yelp data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search St.Louis Restaurants"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search Yelp</button>

      <ul>
        {searchResults.map((business) => (
          <li key={business.id}>
            <h3>{business.name}</h3>
            <p>{business.location.address1}</p>
            {/* Add other business information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;

