//
//	ROOT CONTROLLER
//

//	ACTIONS

exports.index = function(req, res, next) {
	res.render('root/index.ejs', {
		user:req.user
	});
};

exports.signin = function(req, res, next) {
	res.render('root/signin.ejs');
};

exports.signout = function(req, res, next) {
	req.logout();

	res.redirect('/');
};

exports.signup = function(req, res, next) {
	res.render('users/new');
};