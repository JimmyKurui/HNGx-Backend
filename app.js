const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();
const personsRouter = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', personsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
