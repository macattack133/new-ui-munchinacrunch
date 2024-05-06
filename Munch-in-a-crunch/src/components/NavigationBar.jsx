import React, { useState } from 'react';
import axios from 'axios';

const NavigationBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = async () => {
        try {
            const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
                headers: {
                    Authorization: `Bearer {process.env.REACT_APP_API_KEY}`,
                },
                params: {
                    term: searchTerm,
                    categories: 'restaurants',
                    location: 'St. Louis', // You can change the location as needed
                },
            });
            setSearchResults(response.data.businesses);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for restaurants..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {searchResults.map((restaurant) => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default NavigationBar;
