const express = require('express');


const app = express();

app.use(express.static(__dirname + '/public'));

require('./routes/index')(app);
require('./routes/generate')(app);

const port = process.env.PORT || 3090;

const server = app.listen(port, () => {
  console.log('Server ready on:', port);
});
