const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');

const { PORT = 3001 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/todoDB');

app.use(cors);

app.use('/', require('./routes/points'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
