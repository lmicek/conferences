var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var eventsSchema = new Schema({
  event_name: String,
  order: Number,
  event_date: Date,
  event_description: String,
  location: String
});

// the schema is useless so far
// we need to create a model using it
var Event = mongoose.model('events', eventsSchema);

// make this available to our users in our Node applications
module.exports = Event;