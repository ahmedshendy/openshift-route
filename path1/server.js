var createError = require('http-error');

var express = require('express');
app = express();

app.get('/path1/', function (req, res) {
  res.send('Hello World from path1 from service path1: \n')
});

app.get('/', function (req, res) {
  res.send('Hello World from root path from service path1: \n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
