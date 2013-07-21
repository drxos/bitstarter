var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	fs.readFile('index.html', 'utf8', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
			if (err)
			res.write('Could not find or open file for reading\n');
			else
			// if no error, write JS file to client
			res.write(data);
			res.end();
	});
	
});
server.listen(8080);
console.log("Running Node Server on 8080 port ...");
