var http = require('http');
var settings = require('./settings');
var bot = require('./bot2');
var server = http.createServer();

server.on('request',function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('konichiwa');
	bot.update(Date.now());	
	res.end();
});

server.listen(settings.port, settings.host);
