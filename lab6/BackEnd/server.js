// Importing required modules and set up the Express application
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Enabling Cross-Origin Resource Sharing (CORS) for the application
app.use(cors());

// Setting up CORS headers to allow requests from any origin and specify allowed methods and headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Using body-parser middleware to handle JSON and URL data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Defining a route to handle POST requests to '/name'
app.post('/name', (req, res) => {
  console.log("post method");
  console.log(req.body.firstname);
  res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
});

// Defining a route to handle POST requests to '/api/book'
app.post('/api/book', (req, res) => {
  console.log(req.body);
  res.send("Book Created");
});

// Defining a route to handle GET requests to the root '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Defining a route to handle GET requests to '/api/books'
app.get('/api/books', (req, res) => {
  // Sample data for books
  const data = [
    {
      "title": "Learn Git in a Month of Lunches",
      "isbn": "1617292419",
      "pageCount": 0,
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      "status": "MEAP",
      "authors": ["Rick Umali"],
      "categories": []
    },
    {
      "title": "MongoDB in Action, Second Edition",
      "isbn": "1617291609",
      "pageCount": 0,
      "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      "status": "MEAP",
      "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
      ],
      "categories": []
    }
  ];

  // Responding with JSON data and a custom message
  res.json({
    myBooks: data,
    "MyMessage": "Hello Data"
  });
});

// Starting the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
