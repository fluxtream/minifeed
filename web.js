var express = require('express');
var connect = require('connect');
var port = process.env.PORT || 5000;
var hogan = require("hogan.js");
var fs = require('fs');
var template;
fs.readFile(__dirname + "/templates/index.html", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(process.env.parse_javascriptKey);
  console.log(process.env.parse_applicationID);
  template = hogan.compile(data);
});

var app = express.createServer();
app.use(express.static(__dirname+'/static'));

app.get("/:username/:serverName", function(req, res, next) {
  var params = {process: process, serverName: req.params.serverName, username: req.params.username};
  res.send(template.render(params));
});
app.listen(port);

app.get('/index.html', function(req, res, next){
  res.send(template.render(process));
});
app.listen(port);
