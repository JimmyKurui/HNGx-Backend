const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const personsRouter = require('./routes/persons');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', personsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
