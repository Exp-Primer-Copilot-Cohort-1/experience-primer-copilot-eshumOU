// Create web server
// Start server with node comment.js
// Access server in browser with http://localhost:3000
// Use curl to send requests to server:
// curl -X POST -H "Content-Type: application/json" -d '{"author":"Scott", "text":"Hello World!"}' http://localhost:3000/api/comments
// curl -X GET http://localhost:3000/api/comments
// curl -X DELETE http://localhost:3000/api/comments/1

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [
  { "author": "Scott", "text": "Hello World!" }
];

app.get('/api/comments', function(req, res) {
  res.json(comments);
});

app.post('/api/comments', function(req, res) {
  var newComment = {
    "author": req.body.author,
    "text": req.body.text
  };
  comments.push(newComment);
  res.json(newComment);
});

app.delete('/api/comments/:id', function(req, res) {
  var id = req.params.id;
  comments.splice(id, 1);
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
```

## 4.2.2. Express.js

Express.js is a web application framework for Node.js. It is designed for building web applications and APIs.

###