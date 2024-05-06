import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';


const App = () => {

//Yelp search page calls Navigation Bar to Search
    return (
      <div>
      <h1>Munch In A Crunch</h1>
      <NavigationBar/>
      </div>
  );
};

export default App;
