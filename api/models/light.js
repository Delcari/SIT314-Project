const mongoose = require('mongoose');

module.exports = mongoose.model('Light', new mongoose.Schema({ 
  id: Number, 
  name: String
}));