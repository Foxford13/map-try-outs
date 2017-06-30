const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  gitHub: { type: String },
  location: { lat: Number, lng: Number }
},{
  timestamps: true
});




module.exports = mongoose.model('Student', studentSchema);
