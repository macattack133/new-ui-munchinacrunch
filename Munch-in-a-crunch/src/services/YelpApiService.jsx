import React, { useState } from 'react';
import config from 'Munch-in-a-crunch/src/components/Config.jsx';


    const fetchYelpData = async () => {
      try {
        const apiKey = config.yelpApiKey;
        const apiUrl = 'https://api.yelp.com/v3/businesses/search';

        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: `application/json`
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return(data);
      } catch (error) {
        console.error('Error fetching Yelp data:', error);
      }
    };

   export {fetchYelpData};