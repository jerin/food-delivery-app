const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String }
});

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    menu: [menuItemSchema],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);