const express = require('express');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./quotesData.json', 'utf-8'));
const quotes = data.quotes;
const server = express();


// CRUD 
// create using the POST 
server.use(express.json());
server.post('/quotes', (req, res) => {
  const data = req.body;
  quotes.push(data);
  res.sendStatus(201).json();
})

// Read using the GET
server.get('/quotes', (req, res) => {
  res.json(quotes);
})
server.get('/quotes/:id', (req, res) => {
  const id = +req.params.id;
  const quoteIndex = quotes.findIndex(p => p.id === id);
  const quote = quotes[quoteIndex];
  res.json(quote);
})

// Update using the PUT and PATCH
server.put('/quotes/:id', (req, res) => {
  const id = +req.params.id;
  const quoteIndex = quotes.findIndex(p => p.id === id);
  const data = req.body;
  quotes.splice(quoteIndex, 1, { id: id, ...data });
  res.sendStatus(201).json();
})
server.patch('/quotes/:id', (req, res) => {
  const id = +req.params.id;
  const quoteIndex = quotes.findIndex(p => p.id === id);
  const quote = quotes[quoteIndex];
  const data = req.body;
  quotes.splice(quoteIndex, 1, { ...quote, ...data });
  res.sendStatus(201).json();
})

// Delete using DELETE
server.delete('/quotes/:id', (req, res) => {
  const id = +req.params.id;
  const quoteIndex = quotes.findIndex(p => p.id === id);
  quotes.splice(quoteIndex, 1);
  res.sendStatus(201).json();
})




server.listen(8080, () => {
  console.log("server is started at port 8080");
})