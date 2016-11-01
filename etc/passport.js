//
//	PASSPORT CONFIGURATIONS
//

//	DEPENDENCIES

var LocalStrategy = require('passport-local').Strategy
,	passport = require('passport')
,	User = require('../app/models/user');

//	CONFIGURATIONS

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User
		.findById(id, function(err, user) {
			done(err, user);
		});
});

passport.use(new LocalStrategy(function(username, password, done) {
	User
		.findOne({
			username:username
		}, function(err, user) {
			if (err) {
				return done(err);
			}

			if (!user) {
				return done(null, false, {
					message:'Username and/or password is incorrect.'
				});
			}

			user.validatePassword(password, function(err, valid) {
				if (err) {
					return done(err);
				}

				if (!valid) {
					return done(null, false, {
						message:'Username and/or password is incorrect.'
					});
				}

				return done(null, user);
			});
		});
}));

//	EXPORT

module.exports = passport;