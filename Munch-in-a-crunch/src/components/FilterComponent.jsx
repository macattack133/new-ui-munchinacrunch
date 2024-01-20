import React, { useState } from 'react';

const FilterComponent = ({ onFilterChange }) => {
  const [selectedQualities, setSelectedQualities] = useState([]);

  const handleQualityChange = (quality) => {
    const updatedQualities = selectedQualities.includes(quality)
      ? selectedQualities.filter((q) => q !== quality)
      : [...selectedQualities, quality];

    setSelectedQualities(updatedQualities);
    onFilterChange(updatedQualities);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="Fast Food"
          checked={selectedQualities.includes('Fast Food')}
          onChange={() => handleQualityChange('Fast Food')}
        />
        Fast Food
      </label>

      <label>
        <input
          type="checkbox"
          value="Restaurant"
          checked={selectedQualities.includes('Restaurant')}
          onChange={() => handleQualityChange('Restaurant')}
        />
        Restaurant
      </label>

      <label>
        <input
          type="checkbox"
          value="Food Truck"
          checked={selectedQualities.includes('Food Truck')}
          onChange={() => handleQualityChange('Food Truck')}
        />
        Food Truck
      </label>
    </div>
  );
};

export default FilterComponent;
