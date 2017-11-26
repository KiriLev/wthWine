const loadWords = require('../label-generator-wth-hackathon/helpers/loadWords');
const loadImages = require('../label-generator-wth-hackathon/helpers/loadImages');

//loadWords().then(text => console.log(text));
loadImages().then(res => console.log(res));
