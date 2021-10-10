const mongoose = require('mongoose');

module.exports = mongoose.model('Light', new mongoose.Schema({ 
  id: Number, 
  name: String,
  group: String, 
  building: String,
  room: String,
  status: String,
  users: [],
  dateAdded: String
}));