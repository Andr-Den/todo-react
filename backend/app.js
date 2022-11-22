const express = require('express');

const { PORT = 3001 } = process.env;

const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});