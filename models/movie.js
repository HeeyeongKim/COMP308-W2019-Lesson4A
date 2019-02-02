let mongoose = require('mongoose');

// create a model class
let movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    director: String
},
{
    collection: "movies"
});

module.exports = mongoose.model('heeyeong', movieSchema);