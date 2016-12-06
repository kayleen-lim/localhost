//
//	ROUTER INDEX
//

//	ROUTERS

module.exports = function(app) {
	app.use('/', require('./root'));
	app.use('/d', require('./destinations'));
	app.use('/u', require('./users'));
};