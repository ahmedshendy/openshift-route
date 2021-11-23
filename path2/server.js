var createError = require('http-error');

var express = require('express');
app = express();

app.get('/path2/', function (req, res) {
  res.send('Hello World from path2 from service path2: \n')
});

app.get('/', function (req, res) {
  res.send('Hello World from root path from service path2: \n')
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
