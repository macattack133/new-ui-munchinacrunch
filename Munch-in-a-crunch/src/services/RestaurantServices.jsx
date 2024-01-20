const API_BASE_URL = '/api/restaurants';


const RestaurantServices = () => {
  getAllRestaurants: () => {
    return fetch(API_BASE_URL)
      .then(response => response.json());
  },

  getRestaurantById: (id) => {
    return fetch(`${API_BASE_URL}/${id}`)
      .then(response => response.json());
  },

  createRestaurant: (restaurant) => {
    return fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    })
    .then(response => response.json());
  },

  updateRestaurant: (id, updatedRestaurant) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRestaurant),
    })
    .then(response => response.json());
  },

  deleteRestaurant: (id) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
  },
};

export default {RestaurantServices};
