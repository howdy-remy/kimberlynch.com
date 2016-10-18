'use strict';

let express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		path = require('path');


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', function(req, res, next){
	res.sendFile(__dirname + '/browser/index.html');
});

app.listen(process.env.PORT || 3000, function(){
	console.log('the server is listening.....');
});