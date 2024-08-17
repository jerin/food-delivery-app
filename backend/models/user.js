const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },    
    role: { type: String, enum: ['customer', 'restaurant', 'delivery'], default: 'customer', unique: true }
});

module.exports = mongoose.model('User', userSchema);