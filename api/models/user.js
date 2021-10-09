const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({ 
  id: Number, 
  username: String,
  password: String
}));