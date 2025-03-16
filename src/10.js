const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const result = Math.random() * 10;
  res.json({ result });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
