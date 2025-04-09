let express = require('express');
let app = express();

app.use(express.json());

app.post('/submit', function(req, res) {
  // Add your code here to process the POST request
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
