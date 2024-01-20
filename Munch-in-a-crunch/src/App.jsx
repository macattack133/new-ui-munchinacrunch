import React, { useState } from 'react';
import RandomizerButton from './components/RandomizerButton';
import FilterComponent from './components/FilterComponent'; 
import RestaurantList from './components/RestaurantList';
import YelpSearchPage from './components/YelpSearchPage';
import './App.css';

const App = () => {

    return (
      <div>
      <h1>Munch In A Crunch</h1>
      <YelpSearchPage/>
      <RandomizerButton />
       <FilterComponent />
{/*        <RestaurantList />  */}
      </div>
  );
};

export default App;
