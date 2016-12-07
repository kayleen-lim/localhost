//
//	ENTRY POINT
//

//	DEPENDENCIES

var express = require('express')
,	path = require('path')
,	app = express();

//	CONFIGURATIONS

var server = require('./etc/server')(app, express)
,	database = require('./etc/database')(server)
,	routers = require('./etc/routers')(app);

//	STATIC FILES

app.use(express.static(path.join(__dirname, 'public')));

//	SERVER

app.listen(server.getPort(), function() {
	console.log('UP!');
});