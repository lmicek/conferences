// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/events', { useNewUrlParser: true });
var Event = require('../../models/event');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    //console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });  
});

// more routes for our API will happen here
router.route('/events')

    // create a event (accessed at POST http://localhost:8080/api/events)
    .post(function(req, res) {
            var event = new Event(req.body);
            event.save();
            res.json(event);
    })
    // get all the events (accessed at GET http://localhost:8080/api/events)
    .get(function(req, res) {
        Event.find(function(err, event) {
            if (err)
                res.send(err);

            res.json(event);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
