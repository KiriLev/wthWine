const fs = require('fs');
const axios = require('axios');

const loadWords = require('../helpers/loadWords');
const loadImagesFromSearch = require('../helpers/loadImages');
const generateImage = require('../helpers/imageGenerator');

module.exports = (app) => {

  app.get('/api/generate', (req, res) => {

    loadWords().then(words => {

      loadImagesFromSearch(words[1]).then(data => {
        const { name, encodingFormat, contentUrl } = data;
        let fullName = `${Date.parse(new Date())}.${encodingFormat}`;
        console.log(fullName);

        axios({
          method:'get',
          url: contentUrl,
          responseType:'stream'
        })
          .then(response => {
            const wstream = fs.createWriteStream('public/' + fullName);
            response.data.pipe(wstream);
            wstream.on('finish', () => {
              console.log('file has been written');
              generateImage('public/' + fullName, 'public/shab.jpg', 'Good morning' || words.join(' ')).then(() => {
                res.send(fullName);
              })
            });
          })
      })
    });


  });
};
