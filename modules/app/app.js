'use strict';

const express = require('express');
const cors = require('cors');
const { PORT } = require('../config');

const app = express();

app.use(cors());

app.use('/', require('../people/people.router'));
app.use('/', require('../pets/pets.router'));

app.get('/', (req, res) => {
  res.send('Hello from Petful!');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}.`);
});

module.exports = app;
