const express = require('express');
const { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantController');

const router = express.Router();

router.route('/')
    .get(getRestaurants)  // Public route to get all restaurants
    .post(createRestaurant);  // Admin route to create a new restaurant

router.route('/:id')
    .get(getRestaurantById)  // Public route to get a restaurant by ID
    .put(updateRestaurant)  // Admin route to update restaurant details
    .delete(deleteRestaurant);  // Admin route to delete a restaurant

module.exports = router;