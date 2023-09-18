const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();
const personsRouter = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', personsRouter);
// Route default 
app.use((req, res, next) => {
  res.status(404).json({ message: 'Use /api endpoint to access person resource' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
