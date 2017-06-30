const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {dbURI} = require('../config/environment');
const Student = require('../models/student');

mongoose.connect(dbURI);
Student.collection.drop();

const studentData = [{
  name: 'Lauren Armbrust',
  image: 'images/lauren.jpg',
  gitHub: 'https://github.com/larmflower'
}, {
  name: 'Simon Amor',
  image: 'images/simon.jpg',
  gitHub: 'https://github.com/simonrramor'
}, {
  name: 'Nick Cresner',
  image: 'images/nick.jpg',
  gitHub: 'https://github.com/nickcresner'
}, {
  name: 'Alex Okamoto',
  image: 'images/alexo.jpg',
  gitHub: 'https://github.com/alexandriako'
}, {
  name: 'Jim Harris',
  image: 'images/jim.jpg',
  gitHub: 'https://github.com/jgbharris'
}, {
  name: 'Angela Maugey',
  image: 'images/angela.jpg',
  gitHub: 'https://github.com/maugeya'
}, {
  name: 'Alex Cwiek',
  image: 'images/alexc.jpg',
  gitHub: 'https://github.com/alexcviek'
}, {
  name: 'Jack May',
  image: 'images/jack.jpg',
  gitHub: 'https://github.com/Jack11709'
}, {
  name: 'James Clarke',
  image: 'images/james.jpg',
  gitHub: 'https://github.com/JamesRClarke'
}, {
  name: 'Olly Middleton',
  image: 'images/olly.jpg',
  gitHub: 'https://github.com/Ollymid'
}, {
  name: 'Tim Rooke',
  image: 'images/tim.jpg',
  gitHub: 'https://github.com/timrooke1991'
}, {
  name: 'Nimesh Patel',
  image: 'images/nimesh.jpg',
  gitHub: 'https://github.com/n2kp'
}, {
  name: 'Mike de Groot',
  image: 'images/mike.jpg',
  gitHub: 'https://github.com/mikejdegroot'
}, {
  name: 'Jakub Dziekan',
  image: 'images/jakub.jpg',
  gitHub: 'https://github.com/Foxford13'
}, {
  name: 'Clare McLoughlin ',
  image: 'images/clare.jpg',
  gitHub: 'https://github.com/McLoughlinClare'
}, {
  name: 'Jason Ranjitkumar',
  image: 'images/jason.jpg',
  gitHub: 'https://github.com/jasontrk'
}, {
  name: 'Chisomo Lungu',
  image: 'images/chisomo.jpg',
  gitHub: 'https://github.com/obfusticatedcode'
}, {
  name: 'Max Eskell',
  image: 'images/max.jpg',
  gitHub: 'https://github.com/maxeskell'
}];

Student
.create(studentData)
.then(students => console.log(`${students.length} students creatd`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
