const http = require('http');

http.createServer(function(req, res) {
	res.write("3000: it's me, ma man!");
	res.end();
}).listen(3000);

console.log("Server started on port: 3000");
