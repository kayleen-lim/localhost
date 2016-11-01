//
//	ROUTER INDEX
//

//	ROUTERS

module.exports = function(app) {
	app.use('/', require('./root'));
	app.use('/u', require('./users'));
};