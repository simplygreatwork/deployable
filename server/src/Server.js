
const Class = require('./Class.js');
const path = require('path');
const fs = require('fs');

Server = module.exports = Class.extend({
	
	initialize: function(properties) {
		
		this.initializeServer();
	},
	
	initializeServer : function() {
		
		var http = require('http');
		var Express = require('express');
		var express = Express();
		express.use('/', Express.static(path.join(process.env.PWD, 'client')));
		var server = http.createServer(express);
		var port = process.env.PORT || 80;
		server.listen(port, process.env.IP);
		console.log('Listening on port: ' + port);
	}
});
