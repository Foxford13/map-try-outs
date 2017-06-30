const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {dbURI} = require('../config/environment');
const Student = require('../models/student');

mongoose.connect(dbURI);
Student.collection.drop();

const studentData = [{
  name: 'Lauren Armbrust',
  image: 'images/lauren.jpg',
  gitHub: 'https://github.com/larmflower',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Simon Amor',
  image: 'images/simon.jpg',
  gitHub: 'https://github.com/simonrramor',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Nick Cresner',
  image: 'images/nick.jpg',
  gitHub: 'https://github.com/nickcresner',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Alex Okamoto',
  image: 'images/alexo.jpg',
  gitHub: 'https://github.com/alexandriako',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Jim Harris',
  image: 'images/jim.jpg',
  gitHub: 'https://github.com/jgbharris',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Angela Maugey',
  image: 'images/angela.jpg',
  gitHub: 'https://github.com/maugeya',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Alex Cwiek',
  image: 'images/alexc.jpg',
  gitHub: 'https://github.com/alexcviek',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Jack May',
  image: 'images/jack.jpg',
  gitHub: 'https://github.com/Jack11709',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'James Clarke',
  image: 'images/james.jpg',
  gitHub: 'https://github.com/JamesRClarke',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Olly Middleton',
  image: 'images/olly.jpg',
  gitHub: 'https://github.com/Ollymid',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Tim Rooke',
  image: 'images/tim.jpg',
  gitHub: 'https://github.com/timrooke1991',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Nimesh Patel',
  image: 'images/nimesh.jpg',
  gitHub: 'https://github.com/n2kp',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Mike de Groot',
  image: 'images/mike.jpg',
  gitHub: 'https://github.com/mikejdegroot',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Jakub Dziekan',
  image: 'images/jakub.jpg',
  gitHub: 'https://github.com/Foxford13',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Clare McLoughlin ',
  image: 'images/clare.jpg',
  gitHub: 'https://github.com/McLoughlinClare',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Jason Ranjitkumar',
  image: 'images/jason.jpg',
  gitHub: 'https://github.com/jasontrk',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Chisomo Lungu',
  image: 'images/chisomo.jpg',
  gitHub: 'https://github.com/obfusticatedcode',
  location: { lat: 51.5221596, lng: -0.0521308 }
}, {
  name: 'Max Eskell',
  image: 'images/max.jpg',
  gitHub: 'https://github.com/maxeskell',
  location: { lat: 51.5221596, lng: -0.0521308 }
}];

Student
.create(studentData)
.then(students => console.log(`${students.length} students creatd`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
