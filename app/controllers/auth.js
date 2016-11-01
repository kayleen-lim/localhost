//
//	AUTH CONTROLLER
//

//	DEPENDENCIES

var passport = require('../../etc/passport');

//	ACTIONS

exports.authenticate = passport.authenticate('local', {
	failureRedirect:'/signin',
	session:true,
	successRedirect:'/'
});

exports.validate = function(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	}
	else {
		res.redirect('/signin');
	}
};