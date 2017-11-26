const fs = require('fs');
const axios = require('axios');

const loadWords = require('../helpers/loadWords');
const loadImagesFromSearch = require('../helpers/loadImages');
const generateImage = require('../helpers/imageGenerator');
const appendText = require('../helpers/imageTextAppender');

module.exports = (app) => {

  app.get('/api/generate', (req, res) => {

    loadWords().then(titles => {
      const rand = Math.floor(Math.random() * titles.length);   
      const title = titles[rand];  
      loadImagesFromSearch(title).then(data => {
        console.log("data: "+ data);
        const { name, encodingFormat, contentUrl } = data;
        let fullName = `${Date.parse(new Date())}.${encodingFormat}`;
        console.log(fullName);

        axios({
          method: 'get',
          url: contentUrl,
          responseType: 'stream'
        })
          .then(response => {
            const wstream = fs.createWriteStream('public/' + fullName);
            response.data.pipe(wstream);
            wstream.on('finish', () => {
              console.log('file has been written');
              console.log(title);
              var baseImgPath = 'public/' + fullName;
              generateImage(baseImgPath, 'public/shab.png', title).then((outImgPath) => {
                res.send(outImgPath);
                appendText(outImgPath, title)
              })
            });
          })
      })
    });
  });
};
