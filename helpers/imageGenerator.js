const Jimp = require("jimp");

const generateImage = (image1, image2, text) => {
    return new Promise((resolve, reject) => {
    Jimp.read(image1).then(image => {
      Jimp.read(image2).then(image2 => {
        image.resize(500, 450);
        image2.resize(500, 450);
        image.composite(image2, 0, 0);
        image.quality(60);
        image.write(`${image1}`); // save
        resolve(image1);
      });
    }).catch(err => {
      console.error(err);
    });
  });
};

module.exports = generateImage;