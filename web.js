var express = require('express'), fs=require("fs");

var app = express.createServer(express.logger());
var name = String(fs.readFileSync("index.html"));
app.get('/', function(request, response) {
  response.send(name);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
