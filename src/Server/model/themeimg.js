
const mongoose = require('mongoose');
const themeimageSchema = new mongoose.Schema({
  filename: String,
  data: String,
  });
  
  module.exports = mongoose.model('Image', themeimageSchema);
 
   