var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));
app.use(express.static( __dirname + "/" ) );

app.get('/', function(req, res) {
	res.sendFile( path.join(__dirname + 'index.html'));
})

app.get('/obkaraoke/', function(req, res ){
	res.sendFile( path.join( __dirname + 'obkaraoke.php'));
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});