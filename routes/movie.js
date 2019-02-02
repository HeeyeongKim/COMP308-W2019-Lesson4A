let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the contact model
let movie = require('../models/movie');

/* GET contact list page - READ */
router.get('/', (req, res, next) => {
    movie.find((err, movieList) => {
        if(err){
            return console.error(err);
        }
        else {
            console.log(movieList);
            res.render('movies/index', {
                title: 'Movie List',
                movieList: movieList
            }); 
        }
    })
});

module.exports = router;