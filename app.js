// app.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Allow CORS
app.use(cors());

/**
 *  ------ ROUTERS ------
 */

const playerRouter = require('./routes/playerRouter');

/**
 * ------ ROUTES ------
 */

app.use('/players', playerRouter);

app.listen(process.env.PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`Edgar Api app - listening on port ${process.env.PORT}!`);
});
