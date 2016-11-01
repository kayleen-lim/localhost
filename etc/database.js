//
//	DATABASE CONFIGURATIONS
//

//	DEPENDENCIES

var mongoose = require('mongoose');

//	CONFIGURATIONS

module.exports = function(server) {
	mongoose.Promise = global.Promise;

	mongoose.connect(server.getDBURI(), {
		autoIndex:false
	});

	mongoose.connection.on('error', function() {
		console.log('DB_CNX_ERROR');
	});
};