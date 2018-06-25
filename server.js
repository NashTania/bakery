var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static('src'));
app.use(express.static('./'));
app.use(express.static('public'));

http.listen(8080, function(){
  console.log('listening on *:8080');
});
