const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  gitHub: { type: String }
});


module.exports = mongoose.model('Student', studentSchema);
