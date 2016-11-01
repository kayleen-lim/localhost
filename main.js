//
//	ENTRY POINT
//

//	DEPENDENCIES

var express = require('express')
,	app = express();

//	CONFIGURATIONS

var server = require('./etc/server')(app, express)
,	database = require('./etc/database')(server)
,	routers = require('./etc/routers')(app);

//	SERVER

app.listen(server.getPort(), function() {
	console.log('UP!');
});