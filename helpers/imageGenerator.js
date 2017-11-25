const Jimp = require("jimp");


const generateImage = (image1, image2, text) => {
  const texts = text.split(' ');
  return new Promise((resolve, reject) => {
    Jimp.read(image1).then(image => {
      Jimp.read(image2).then(image2 => {
       Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
          image.resize(1000, 450);
          image2.resize(500, 450);
          image.composite(image2, 260, 0);
          image.print(font, 450, 100, texts[0]);
          image.print(font, 450, 150, texts[1]);
          image.quality(60);
          console.log(`new${image1}`);
          image.write(`${image1}`); // save
          resolve();
        });
      });
    }).catch(err => {
        console.error(err);
    });
  });
};

module.exports = generateImage;
