const loadWords = require('../label-generator-wth-hackathon/helpers/loadWords');
const loadImages = require('../label-generator-wth-hackathon/helpers/loadImages');

loadWords().then(text => console.log(text)).catch(err => console.log(err));
//loadImages().then(res => console.log(res));
