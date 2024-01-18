import React from 'react';
import Restaurants from './Restaurants.jsx'

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>
      {Restaurants}
    </button>
  );
};

export default Button;
