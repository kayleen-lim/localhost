//
//	USERS CONTROLLER
//

//	DEPENDENCIES

var modelUtil = require('../utils/model')
,	User = require('../models/user');

//	ACTIONS

exports.add = function(req, res, next) {
	var user = new User();

	modelUtil.updateModelAttributes(req, user);

	user.save(function(err) {
		if (err) {
			next(err);
		}

		req.login(user, function(err) {
			if (err) {
				next(err);
			}

			res.redirect('/');
		});
	});
};

exports.edit = function(req, res, next) {
	User
		.findById(req.session.passport.user)
		.exec(function(err, user) {
			if (err) {
				next(err);
			}

			res.render('users/edit', {
				user:user
			});
		});
};

exports.new = function(req, res, next) {
	res.render('users/new');
};

exports.remove = function(req, res, next) {
	User
		.findById(req.session.passport.user)
		.exec(function(err, user) {
			if (err) {
				next(err);
			}

			user.remove(function(err) {
				if (err) {
					next(err);
				}

				res.redirect('/');
			});
		});
};

exports.update = function(req, res, next) {
	User
		.findById(req.session.passport.user)
		.exec(function(err, user) {
			if (err) {
				next(err);
			}

			modelUtil.updateModelAttributes(req, user);

			user.save(function(err) {
				if (err) {
					next(err);
				}

				res.redirect('/u/' + user.id);
			});
		});
};

exports.view = function(req, res, next) {
	User
		.findById(req.session.passport.user)
		.exec(function(err, user) {
			if (err) {
				next(err);
			}

			res.render('users/view', {
				user:user
			});
		});
};