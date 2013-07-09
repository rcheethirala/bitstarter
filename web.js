var express = require('express');

var app = express.createServer(express.logger());
var name = "Rajesh Cheethirala";
app.get('/', function(request, response) {
  response.send(name);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
