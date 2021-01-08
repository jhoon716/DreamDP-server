const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    date: Date,
    weather: Number,
    comment: String,
    rating: Number
});

module.exports = mongoose.model('page', pageSchema);