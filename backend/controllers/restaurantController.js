const Restaurant = require('../models/restaurant');

// Get all restaurants
exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get restaurant by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (restaurant) {
            res.json(restaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Create a new restaurant (Admin only)
exports.createRestaurant = async (req, res) => {
    const { name, location, cuisine, menu, rating, numReviews } = req.body;

    try {
        const restaurant = new Restaurant({
            name,
            location,
            cuisine,
            menu,
            rating,
            numReviews
        });

        const createdRestaurant = await restaurant.save();
        res.status(201).json(createdRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a restaurant (Admin only)
exports.updateRestaurant = async (req, res) => {
    const { name, location, cuisine, menu, rating, numReviews } = req.body;

    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (restaurant) {
            restaurant.name = name || restaurant.name;
            restaurant.location = location || restaurant.location;
            restaurant.cuisine = cuisine || restaurant.cuisine;
            restaurant.menu = menu || restaurant.menu;
            restaurant.rating = rating || restaurant.rating;
            restaurant.numReviews = numReviews || restaurant.numReviews;

            const updatedRestaurant = await restaurant.save();
            res.json(updatedRestaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a restaurant (Admin only)
exports.deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (restaurant) {
            await restaurant.remove();
            res.json({ message: 'Restaurant removed' });
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
