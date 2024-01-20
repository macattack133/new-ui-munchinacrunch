const BASE_URL = '/api/restaurants';

const FilterService = () => {
  getFilteredRestaurants: async (qualities) => {
    try {
      const response = await fetch(`${BASE_URL}/filtered${qualities ? `?qualities=${qualities.join(',')}` : ''}`);
      
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch filtered restaurants');
      }
    } catch (error) {
      throw new Error(`Error in FilterService: ${error.message}`);
    }
  },
};

export default FilterService;
