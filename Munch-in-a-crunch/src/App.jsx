import React, { useState } from 'react';
import RandomizerButton from './components/RandomizerButton';
import FilterComponent from './components/FilterComponent'; 
import RestaurantList from './components/RestaurantList';
import YelpSearchPage from './components/YelpSearchPage';
import Login from './components/Login';
import './App.css';

const App = () => {

//Yelp search page calls Navigation Bar to Search
    return (
      <div>
      <h1>Munch In A Crunch</h1>
      <YelpSearchPage/>
      <RandomizerButton />
      <FilterComponent />
{/*        <RestaurantList />  */}
      <Login/>
      </div>
  );
};

export default App;
