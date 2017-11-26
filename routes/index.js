const path = require('path');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

//   app.use(function(req, res, next) {
//
//     // const store = createStore(req);
//     // res.sendFile(__dirname + '/build');
//     // res.sendFile(path.join(__dirname, '/../public/'));
//
//     // const content = renderer(req, store);
//     // res.send(content);
//
//     // express.static.send(req, res, next ,{
//     //     root: __dirname + "/public",
//     //     path: req.url,
//     //     getOnly: true
//     // });
// });


};
