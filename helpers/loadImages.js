var Bing = require('node-bing-api')({ accKey: "df71dc906c3f4b698e521f84e3bba21e" });

module.exports = (search) => new Promise((resolve, reject) => {
  Bing.images(search, {
    count: 5,
  }, (error, res, body) => {
      if (error) {
        reject(error);
      }
      const random = Math.round(Math.random() * 4);
      resolve(body.value[random]);
    });
});
