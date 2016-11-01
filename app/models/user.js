//
//	USER MODEL
//

//	DEPENDENCIES

var bcrypt = require('bcrypt')
,	mongoose = require('mongoose');

//	SCHEMA

var UserSchema = new mongoose.Schema({
	email:{
		required:true,
		type:String
	},
	password:{
		required:true,
		type:String
	},
	username:{
		required:true,
		type:String
	}
},
{
	timestamps:{
		createdAt:'createDate',
		updatedAt:'updateDate'
	}
});

//	INSTANCE METHODS

UserSchema.methods.validatePassword = function(password, next) {
	bcrypt.compare(password, this.password, function(err, valid) {
		if (err) {
			return next(err);
		}

		return next(null, valid);
	});
};

//	PRES

UserSchema.pre('save', function(next) {
	var user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(parseInt(process.env.DEMO_SALT_ROUNDS), function(err, salt) {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) {
				return next(err);
			}

			user.password = hash;

			next();
		});
	});
});

//	EXPORT

var User = mongoose.model('User', UserSchema);

module.exports = User;