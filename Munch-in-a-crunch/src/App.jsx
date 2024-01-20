import React, { useState } from 'react';
import RandomizerButton from './components/RandomizerButton';
import FilterComponent from './components/FilterComponent'; 
import RestaurantList from './components/RestaurantList';
import YelpSearchPage from './Components/YelpSearchPage';
import './App.css';

function App() {


  return (
    <>
      <div>
      <RandomizerButton />
      <FilterComponent />
      <RestaurantList />
      </div>
    </>
  );
}

export default App;

