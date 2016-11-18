var express = require('express');
var app = express();
var path = require('path');

app.use(express.static( __dirname + "/" ) );

app.get('/', function(req, res) {
	res.sendFile( path.join(__dirname + '/index.html'));
})

app.get('/help', function(req, res) {
	res.send('Going somewhere?!')
})

app.listen(80, function() {
	console.log('Listening on port 8081....');
})