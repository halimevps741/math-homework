const express = require('express');

// Define your routes here
module.exports = function() {
  // Example route: GET /api/data
  return express.Router()
    .get('/', (req, res) => {
      const data = { message: 'Hello from Express!' };
      res.send(data);
    });
};
