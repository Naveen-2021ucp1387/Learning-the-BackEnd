
const express = require('express');
const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Route to handle query parameters
server.get('/demo', (req, res) => {
  console.log(req.query.parameter);
  res.end("The parameter passed is: " + req.query.parameter);
});

// Route to handle URL parameters
server.get('/demo/:id', (req, res) => {
  console.log(req.params);
  res.end("The URL parameter is: " + req.params.id);
});

// Route to handle POST requests
server.post('/demo', (req, res) => {
  console.log(req.body); // Assumes JSON body
  res.end("Received POST request with body: " + JSON.stringify(req.body));
});

server.listen(8080, () => {
  console.log("Server is listening at 8080....");
});
