// Create web server application
// 1. Import express
const express = require('express');
// 2. Create an express app
const app = express();
// 3. Define port number
const port = 3000;
// 4. Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});