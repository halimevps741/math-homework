// Import required libraries
const express = require('express');
const app = express();

// Set up our routes
app.get('/', (req, res) => {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Return the result
  res.send(`The random number is ${randomNumber}`);
});

// Start our server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
