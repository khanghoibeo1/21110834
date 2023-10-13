const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const routes = require('./routes/routes');

app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
